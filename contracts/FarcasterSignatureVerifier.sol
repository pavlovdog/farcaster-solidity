// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.9;


abstract contract FarcasterSignatureVerifier {
  function _verifyFarcasterSignature(
    bytes memory message,
    bytes memory signature,
    bytes memory public_key
  ) internal returns (bool valid) {
    // Hash message with BLAKE3
    // Take first 20 bytes of hash
    // Check signature against public key
  }
}