import { CastAddBody, Factories, FarcasterNetwork, MessageData, MessageType, ReactionType, makeCastAdd, makeMessageHash } from '@farcaster/core';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { fid, hash, timestamp } from './constants';
import { blake3 } from "@noble/hashes/blake3";
import { Test } from '../typechain-types';
import { signFarcasterMessage } from './utils';


const ed25519Signer = Factories.Ed25519Signer.build();


describe('Test decodings', async () => {
  let test: Test;

  it('Deploy', async () => {
    const Blake3 = await ethers.getContractFactory('Blake3');
    const blake3 = await Blake3.deploy();

    const Ed25519_pow = await ethers.getContractFactory('Ed25519_pow');
    const ed25519_pow = await Ed25519_pow.deploy();

    const Sha512 = await ethers.getContractFactory('Sha512');
    const sha512 = await Sha512.deploy();

    const Ed25519 = await ethers.getContractFactory('Ed25519', {
      libraries: {
        Ed25519_pow: ed25519_pow.target,
        Sha512: sha512.target,
      }
    });
    const ed25519 = await Ed25519.deploy();

    const Test = await ethers.getContractFactory('Test', {
      libraries: {
        Blake3: blake3.target,
        Ed25519: ed25519.target,
      }
    });
    test = await Test.deploy();
  });

  describe('Test messages', async () => {
    it('CastAddBody', async () => {
      const message_data: MessageData = {
        type: MessageType.CAST_ADD,
        fid,
        timestamp,
        network: FarcasterNetwork.MAINNET,
        castAddBody: {
          embedsDeprecated: [],
          mentions: [1],
          parentCastId: {
            fid,
            hash,
          },
          text: '@dwr.eth dau goes brrr',
          mentionsPositions: [1],
          embeds: [],
        }
      };
  
      const signature = await signFarcasterMessage(ed25519Signer, message_data);
      const public_key = (await ed25519Signer.getSignerKey())._unsafeUnwrap();
  
      const message = (MessageData.encode(message_data).finish());
  
      const tx = test.verifyCastAddMessage(
        public_key,
        signature.r,
        signature.s,
        message
      );

      await expect(tx)
        .to.emit(test, 'MessageCastAddVerified')
        .withArgs(
          message_data.fid,
          message_data.castAddBody?.text,
          message_data.castAddBody?.mentions
        );
    });

    it('ReactionBody', async () => {
      const message_data: MessageData = {
        type: MessageType.REACTION_ADD,
        fid,
        timestamp,
        network: FarcasterNetwork.MAINNET,
        reactionBody: {
          type: ReactionType.LIKE,
          targetCastId: {
            fid,
            hash,
          }
        }
      };

      const signature = await signFarcasterMessage(ed25519Signer, message_data);
      const public_key = (await ed25519Signer.getSignerKey())._unsafeUnwrap();
  
      const message = (MessageData.encode(message_data).finish());
  
      const tx = test.verifyReactionAddMessage(
        public_key,
        signature.r,
        signature.s,
        message
      );

      await expect(tx)
        .to.emit(test, 'MessageReactionAddVerified')
        .withArgs(
          message_data.fid,
          message_data.reactionBody?.type,
          message_data.reactionBody?.targetCastId?.fid,
          message_data.reactionBody?.targetCastId?.hash,
        );
    });
  });
});