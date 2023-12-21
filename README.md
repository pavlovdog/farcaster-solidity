# Farcaster Solidity

A collection of Solidity libraries for interacting with the Farcaster messages onchain.

## Overview

Describe how Farcaster protocol works.
Message -> Message structure -> Protobuf encoding -> Blake3 hash -> Ed25519 signature
Describe EVM limitations (no BLAKE3, no Ed25519, no protobuf encodings)

## Gas usage

Table of gas usage.

The gas usage is the bottleneck. It can be solved in two ways:
- using native precompiles
- using ZK scalability patterns

## Roadmap

Efficient hashing and signature verification. 

## Installing locally

Install proto sol plugin
Update proto files, yarn protoc (Docker required)

## Links

- Farcaster: @fastfourier.eth
- Blake3 implementation
- Ed25519 implementation
- Celestia proto-sol generator
- @farcaster/core proto files