# Farcaster Solidity

A collection of Solidity libraries for interacting with the Farcaster messages on-chain. Made by [fastfourier.eth](https://warpcast.com/fastfourier.eth).

## Overview

Most of the Farcaster actions are represented as Protobuf messages, signed with the user's key. Here's an illustration of what happens when a new cast is sent to the Farcaster network:

1. Client application forms a message from text, mentions, links, etc
2. The message gets hashed using the Blake3 hash function, first 20 bytes of the hash are signed with the user's Ed25519 private key
3. The message, along with the signature and some other metadata, is being sent to the network

The goal of this project is to provide a set of Solidity libraries and examples, helping to verify and parse Farcaster messages on-chain.

## Usage example

The full example can be found at [contracts/Test.sol](./contracts/Test.sol).

```solidity
function verifyCastAddMessage(
  bytes32 public_key,
  bytes32 signature_r,
  bytes32 signature_s,
  bytes memory message
) external {
  MessageData memory message_data = _verifyMessage(
    public_key,
    signature_r,
    signature_s,
    message
  );

  if (message_data.type_ != MessageType.MESSAGE_TYPE_CAST_ADD) {
    revert InvalidMessageType();
  }

  emit MessageCastAddVerified(
    message_data.fid,
    message_data.cast_add_body.text,
    message_data.cast_add_body.mentions
  );
}
```

## Gas usage

Gas usage mainly consists of three components:

- Blake3 hashing (500k - 1m)
- Ed25519 signature verification (≈ 1m)
- Message decoding (≈ 100k)

```
·-----------------------------------------|----------------------------|-------------|-----------------------------·
|          Solc version: 0.8.19           ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
··········································|····························|·············|······························
|  Methods                                                                                                         │
·············|····························|··············|·············|·············|···············|··············
|  Contract  ·  Method                    ·  Min         ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·············|····························|··············|·············|·············|···············|··············
|  Test      ·  verifyCastAddMessage      ·           -  ·          -  ·    1922353  ·            2  ·          -  │
·············|····························|··············|·············|·············|···············|··············
|  Test      ·  verifyReactionAddMessage  ·           -  ·          -  ·    1518784  ·            2  ·          -  │
·············|····························|··············|·············|·············|···············|··············
```

## FAQ

### Is it possible to reduce gas usage per message?

Yes, absolutely! The main idea is to move expensive computations (Blake3 hashing and Ed25519 signature verification) off-chain, using ZK proofs.
In this case, the Solidity contract verifies only a short proof (≈300k gas vs 2m).
This approach can be scaled with batching, so in the case of 10 messages, it takes 300k / 10 = 30k gas to verify a single message.

### Which message types are supported?

Most of them. Due to the `MessageDataCodec` library size limitations, decodings for `CastRemoveBody`, `VerificationRemoveBody`, and `UserNameProof` are not included. You can do it yourself, by modifying the [message.proto](./protobufs/message.proto), check out the [Running locally](#running-locally) section.

### My contract does not fit into the 24 kb limit

Try to use external libraries, as they are quite heavy to be used internally. Check the [test.ts](./test/test.ts) for deployment reference.

## Running locally

```bash
node --version
v18.17.1
npm --version
9.6.7

yarn
yarn hh:compile
yarn hh:test
# Get contract's size in kb
yarn hh:size
```

### Modifying proto schemes

To modify .proto schemes, install [protobuf3-solidity](https://github.com/celestiaorg/protobuf3-solidity).

```
git clone https://github.com/celestiaorg/protobuf3-solidity
cd protobuf3-solidity
make
```

Export the path to the binary and run `yarn protoc` to update Solidity libraries and TS definitions

```bash
export PROTO_GEN_SOL=./../protobuf3-solidity/bin/protoc-gen-sol
cd farcaster-solidity
yarn protoc
```

Keep in mind, that not all Protobuf features are supported (`oneOf` fields, repeated strings, non-packed repeated fields). Another important thing is that message fields should be enumerated in a strict incremental order.

## Links & credits

- [Blake3 Solidity implementation](https://github.com/mel-project/blake3-sol)
- [Ed25519 Solidity implementation](https://github.com/chengwenxi/Ed25519)
- [protobuf3-solidity](https://github.com/celestiaorg/protobuf3-solidity)
- [@farcaster/core](https://github.com/farcasterxyz/hub-monorepo/tree/main/packages/core) (contains .proto files)
- [Farcaster specification](https://github.com/farcasterxyz/protocol/blob/main/docs/SPECIFICATION.md)