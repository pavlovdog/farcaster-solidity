# Farcaster Solidity

A collection of Solidity libraries for interacting with the Farcaster messages onchain.

## Overview

Describe how Farcaster protocol works.
Message -> Message structure -> Protobuf encoding -> Blake3 hash -> Ed25519 signature
Describe EVM limitations (no BLAKE3, no Ed25519, no protobuf encodings)

Here's an illustration of what happens when new cast is being sent to the Farcaster network:

1. Client application forms message
2. Message gets hashed using Blake3 hash function, first 20 bytes of the hash are signed with user's Ed25519 private key
3. Message, along with the signature and some other meta, is sent to the network

The goal of this project is to provide a set of libraries and examples of how Farcaster message can be verified onchain.

## Example

```solidity

```

## Gas usage

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

- using native precompiles
- using ZK scalability patterns

## Roadmap

1. Implement hashing & signature verification in ZK
2. Implement batching

## Running locally

```
yarn
yarn hh:compile
yarn hh:test
# Get contract's size in kBs
yarn hh:size
```

### Upgrading proto schemes

To upgrade .proto schemes, install [protobuf3-solidity](https://github.com/celestiaorg/protobuf3-solidity).

```
git clone https://github.com/celestiaorg/protobuf3-solidity
cd protobuf3-solidity
make
```

Export the path to the binary and run `yarn protoc` to update Solidity libraries and TS definitions

```
export PROTO_GEN_SOL=./../protobuf3-solidity/bin/protoc-gen-sol
cd farcaster-solidity
yarn protoc
```

Keep in mind, that not all .proto features are suppoted (such as `oneOf` fields, repeated strings, ). Another important thing is that message fields should be numerated in an incremental order.

## Links & credits

- [Blake3 Solidity implementation](https://github.com/mel-project/blake3-sol)
- [Ed25519 Solidity implementation](https://github.com/chengwenxi/Ed25519)
- [protobuf3-solidity](https://github.com/celestiaorg/protobuf3-solidity)
- [@farcaster/core](https://github.com/farcasterxyz/hub-monorepo/tree/main/packages/core) (contains .proto files)
- [Farcaster specification](https://github.com/farcasterxyz/protocol/blob/main/docs/SPECIFICATION.md)