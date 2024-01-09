// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

library Blake3 {
    uint256 constant BLOCK_LEN = 64;
    uint32 constant OUT_LEN = 32;
    uint32 constant CHUNK_LEN = 1024;

    // Flag constants
    uint32 constant CHUNK_START = 1 << 0;
    uint32 constant CHUNK_END = 1 << 1;
    uint32 constant PARENT = 1 << 2;
    uint32 constant ROOT = 1 << 3;
    uint32 constant KEYED_HASH = 1 << 4;
    uint32 constant DERIVE_KEY_CONTEXT = 1 << 5;
    uint32 constant DERIVE_KEY_MATERIAL = 1 << 6;

    // Product of a ChunkState before deriving chain value
    struct Output {
        uint32[8] input_chaining_value;
        uint32[16] block_words;
        uint64 counter;
        uint256 block_len;
        uint32 flags;
    }

    struct ChunkState {
        uint32[8] chaining_value;
        uint64 chunk_counter;
        // Has a max size of BLOCK_LEN
        bytes block_bytes;
        uint256 block_len;
        uint256 blocks_compressed;
        uint32 flags;
    }

    // An incremental hasher that can accept any number of writes.
    struct Hasher {
        ChunkState chunk_state;
        uint32[8] key_words;
        uint32[8][54] cv_stack; // Space for 54 subtree chaining values:
        uint8 cv_stack_len;     // 2^54 * CHUNK_LEN = 2^64
        uint32 flags;
    }

    // INTERNAL FUNCTIONS

    // This should remain constant but solidity doesn't support declaring it
    // uint8[16] MSG_PERMUTATION = [2, 6, 3, 10, 7, 0, 4, 13, 1, 11, 12, 5, 9, 14, 15, 8];
    // uint32[8] IV = [
    //     0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19
    // ];
    function _MSG_PERMUTATION() internal pure returns (uint8[16] memory) {
        return [2, 6, 3, 10, 7, 0, 4, 13, 1, 11, 12, 5, 9, 14, 15, 8];
    }

    function _IV() internal pure returns (uint32[8] memory) {
        return [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19];
    }

    // Mixing function G
    function _g(
        uint32[16] memory state,
        uint32 a,
        uint32 b,
        uint32 c,
        uint32 d,
        uint32 mx,
        uint32 my
    ) internal pure {
        unchecked {
            state[a] = state[a] + state[b] + mx;
            state[d] = _rotr(state[d] ^ state[a], 16);
            state[c] = state[c] + state[d];
            state[b] = _rotr(state[b] ^ state[c], 12);
            state[a] = state[a] + state[b] + my;
            state[d] = _rotr(state[d] ^ state[a], 8);
            state[c] = state[c] + state[d];
            state[b] = _rotr(state[b] ^ state[c], 7);
        }
    }

    function _round(uint32[16] memory state, uint32[16] memory m) internal pure {
        // Mix the columns.
        _g(state, 0, 4, 8, 12, m[0], m[1]);
        _g(state, 1, 5, 9, 13, m[2], m[3]);
        _g(state, 2, 6, 10, 14, m[4], m[5]);
        _g(state, 3, 7, 11, 15, m[6], m[7]);

        // Mix the diagonals.
        _g(state, 0, 5, 10, 15, m[8], m[9]);
        _g(state, 1, 6, 11, 12, m[10], m[11]);
        _g(state, 2, 7, 8, 13, m[12], m[13]);
        _g(state, 3, 4, 9, 14, m[14], m[15]);
    }

    function _permute(uint32[16] memory m) internal pure {
        uint8[16] memory MSG_PERMUTATION = _MSG_PERMUTATION();
        uint32[16] memory permuted;

        for (uint256 i = 0; i < 16; ++i) {
            permuted[i] = m[MSG_PERMUTATION[i]];
        }

        for (uint256 i = 0; i < 16; ++i) {
            m[i] = permuted[i];
        }
    }

    function _compress(
        uint32[8] memory chaining_value,
        uint32[16] memory block_words_ref,
        uint64 counter,
        uint256 block_len,
        uint32 flags
    ) internal pure returns (uint32[16] memory) {
        uint32[8] memory IV = _IV();
        uint32[16] memory block_words;
        for (uint256 i = 0; i < 16; ++i) {
            block_words[i] = block_words_ref[i];
        }

        uint32[16] memory state = [
            chaining_value[0],
            chaining_value[1],
            chaining_value[2],
            chaining_value[3],
            chaining_value[4],
            chaining_value[5],
            chaining_value[6],
            chaining_value[7],
            IV[0],
            IV[1],
            IV[2],
            IV[3],
            uint32(counter),
            uint32(counter >> 32),
            ///////////////////////////////
            uint32(block_len),
            flags
        ];


        _round(state, block_words); // round 1
        _permute(block_words);
        _round(state, block_words); // round 2
        _permute(block_words);
        _round(state, block_words); // round 3
        _permute(block_words);
        _round(state, block_words); // round 4
        _permute(block_words);
        _round(state, block_words); // round 5
        _permute(block_words);
        _round(state, block_words); // round 6
        _permute(block_words);
        _round(state, block_words); // round 7

        for (uint256 i = 0; i < 8; ++i) {
            state[i] ^= state[i + 8];
            state[i + 8] ^= chaining_value[i];
        }

        return state;
    }

    function _rotr(uint32 x, uint8 n) internal pure returns (uint32) {
        bytes4 b = bytes4(x);
        return uint32((b >> n) | (b << (32 - n)));
    }

    function _chaining_value(Output memory o) internal pure returns (uint32[8] memory) {
        uint32[16] memory compression_output = _compress(
            o.input_chaining_value,
            o.block_words,
            o.counter,
            o.block_len,
            o.flags
        );

        return _first_8_words(compression_output);
    }

    function _root_output_bytes(
        Output memory self,
        bytes memory out_slice
    ) internal pure {
        //uint32 output_block_counter = 0;
        // Take 64-byte chunks at a time from out_slice
        //for (uint32 i = 0; i < out_slice.length; i += 2 * OUT_LEN) {
        uint32[16] memory words = _compress(
            self.input_chaining_value,
            self.block_words,
            0,
            //output_block_counter,
            self.block_len,
            self.flags | ROOT
        );

        // Load compressed words into out_slice (4 bytes at a time)
        // The output length might not be a multiple of 4.
        //for (uint32 j = 0; j < words.length && out_slice.length > j*4; j++) {
        //for (uint32 j = 0; j < words.length; j++) {
        for (uint32 j = 0; j < 8; j++) {
            // Load word at j into out_slice as little endian
            _load_uint32_to_le_bytes(words[j], out_slice, j*4);
        }

            //output_block_counter += 1;
        //}
    }

    function _load_uint32_to_le_bytes(
        uint32 n,
        bytes memory buf,
        uint32 offset
    ) internal pure {
        for (uint256 i = 0; i < 4; ++i) {
            buf[offset+i] = bytes1(uint8(n / (2 ** (i*8))));
        }
    }

    function _uint32_to_le_bytes(uint32 n) internal pure returns (bytes4) {
        bytes4 buf;
        for (uint256 i = 0; i < 4; ++i) {
            assembly {
                let cc := add(buf, 0x20)
                let buf_idx := add(cc, sub(3, i))
                let n_idx := add(n, i)
                mstore8(buf_idx, n_idx)
            }
        }

        return buf;
    }


    function _le_bytes_get_uint32(bytes memory _bytes, uint256 _start) internal pure returns (uint32) {
        require(_bytes.length >= _start + 4, "le_bytes_get_uint32_outOfBounds");
        uint32 tempUint;

        for (uint256 i = 0; i < 4; ++i) {
            //tempUint += uint32(uint8(_bytes[i]) * (2 ** (8*i)));
            tempUint += uint32(bytes4(_bytes[3-i+_start]) >> (8 * i));
        }
        /*
        assembly {
            // TODO why is this 0x4 in the bytes library???
            //tempUint := mload(add(add(_bytes, 0x4), _start))

            // Load 32 bytes from array (u256)
            tempUint := mload(add(add(_bytes, 0x20), _start))
            // Keep just the first 4 bytes (u32)
            //tempUint := xor(tempUint, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000)
            tempUint := xor(tempUint, 0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
        }
        */

        return tempUint;
    }

    function _words_from_little_endian_bytes8(
        bytes memory data_bytes,
        uint32[8] memory words
    ) internal pure {
        require(data_bytes.length <= 4*8,
                "Data bytes is too long to convert to 8 4-byte words");

        for (uint256 i = 0; i < data_bytes.length/4; ++i) {
            words[i] = _le_bytes_get_uint32(data_bytes, i*4);
        }
    }

    function _words_from_little_endian_bytes(
        bytes memory data_bytes,
        uint32[16] memory words
    ) internal pure {
        require(data_bytes.length <= 64 && data_bytes.length%4 == 0,
                "Data bytes is too long to convert to 16 4-byte words");

        for (uint256 i = 0; i < data_bytes.length/4; ++i) {
            words[i] = _le_bytes_get_uint32(data_bytes, i*4);
        }
    }


    // TODO I wish this didn't require a copy to convert array sizes
    function _first_8_words(uint32[16] memory words) internal pure returns (uint32[8] memory) {
        // TODO there must be a way to do this without copying
        // How to take a slice of a memory array?
        uint32[8] memory first_8;
        for (uint256 i = 0; i < 8; ++i) {
            first_8[i] = words[i];
        }

        return first_8;
    }


    //
    // Chunk state functions
    //

    function _new_chunkstate(
        uint32[8] memory key_words,
        uint64 chunk_counter,
        uint32 flags
    ) internal pure returns (ChunkState memory) {
        bytes memory block_bytes = new bytes(BLOCK_LEN);
        return ChunkState({
            chaining_value: key_words,
            chunk_counter: chunk_counter,
            block_bytes: block_bytes,
            block_len: 0,
            blocks_compressed: 0,
            flags: flags
        });
    }

    function _len(ChunkState memory chunk) internal pure returns (uint256) {
        return BLOCK_LEN * chunk.blocks_compressed + chunk.block_len;
    }

    function _start_flag(ChunkState memory chunk) internal pure returns (uint32) {
        if (chunk.blocks_compressed == 0) {
            return CHUNK_START;
        } else {
            return 0;
        }
    }

    // Returns a new input offset
    function _update_chunkstate(
        ChunkState memory chunk,
        bytes memory input
    ) internal pure {//returns (uint32) {
        uint256 input_offset = 0;
        while (input_offset < input.length) {
            // If the block buffer is full, compress it and clear it. More
            // input is coming, so this compression is not CHUNK_END.
            if (chunk.block_len == BLOCK_LEN) {
                uint32[16] memory block_words;
                _words_from_little_endian_bytes(chunk.block_bytes, block_words);
                chunk.chaining_value = _first_8_words(_compress(
                    chunk.chaining_value,
                    block_words,
                    chunk.chunk_counter,
                    BLOCK_LEN,
                    chunk.flags | _start_flag(chunk)
                ));
                chunk.blocks_compressed += 1;
                // TODO probably cheaper to zero-out byte array than to reallocate
                chunk.block_bytes = new bytes(BLOCK_LEN);
                chunk.block_len = 0;
            }

            // Take enough to fill a block [min(want, input.length)]
            uint256 want = BLOCK_LEN - chunk.block_len;
            uint256 take = _min(want, input.length - input_offset);

            // Copy bytes from input to chunk block
            //chunk.block_bytes[self.block_len as usize..][..take].copy_from_slice(&input[..take]);
            for (uint256 i = 0; i < take; ++i) {
                // TODO recheck this logic
                chunk.block_bytes[i+chunk.block_len] = input[input_offset+i];
            }
            /*
            bytes memory block_ref = chunk.block_bytes;
            uint32 blen = chunk.block_len;
            assembly {
                let block_addr := add(add(block_ref, 0x20), blen)
                let input_addr := add(add(input.offset, 0x20), input_offset)
                memorycopy(block_addr, input_addr, take)
            }
            */

            chunk.block_len += take;
            input_offset += take;
        }
    }

    function _min(uint256 x, uint256 y) internal pure returns (uint256) {
        if (x < y) {
            return x;
        } else {
            return y;
        }
    }

    function _output(ChunkState memory chunk) internal pure returns (Output memory) {
        uint32[16] memory block_words;
        _words_from_little_endian_bytes(chunk.block_bytes, block_words);

        return Output({
            input_chaining_value: chunk.chaining_value,
            block_words: block_words,
            counter: chunk.chunk_counter,
            block_len: chunk.block_len,
            flags: chunk.flags | _start_flag(chunk) | CHUNK_END
        });
    }

    //
    // Parent functions
    //

    function _parent_output(
        uint32[8] memory left_child_cv,
        uint32[8] memory right_child_cv,
        uint32[8] memory key_words,
        uint32 flags
    ) internal pure returns (Output memory) {
        uint32[16] memory block_words;

        for (uint256 i = 0; i < 8; ++i) {
            block_words[i] = left_child_cv[i];
        }

        for (uint256 i = 8; i < 16; ++i) {
            block_words[i] = right_child_cv[i - 8];
        }

        return Output({
            input_chaining_value: key_words,
            block_words: block_words,
            counter: 0,           // Always 0 for parent nodes.
            block_len: BLOCK_LEN, // Always BLOCK_LEN (64) for parent nodes.
            flags: PARENT | flags
        });
    }

    function _parent_cv(
        uint32[8] memory left_child_cv,
        uint32[8] memory right_child_cv,
        uint32[8] memory key_words,
        uint32 flags
    ) internal pure returns (uint32[8] memory) {
        return _chaining_value(_parent_output(left_child_cv, right_child_cv, key_words, flags));
    }


    //
    // Hasher functions
    //

    function _new_hasher_internal(
        uint32[8] memory key_words, uint32 flags
    ) internal pure returns (Hasher memory) {
        uint32[8][54] memory cv_stack;
        return Hasher({
            chunk_state: _new_chunkstate(key_words, 0, flags),
            key_words: key_words,
            cv_stack: cv_stack,
            cv_stack_len: 0,
            flags: flags
        });
    }

    /// Construct a new `Hasher` for the regular hash function.
    function new_hasher() internal pure returns (Hasher memory) {
        uint32[8] memory IV = _IV();
        return _new_hasher_internal(IV, 0);
    }

    /// Construct a new `Hasher` for the keyed hash function.
    function new_keyed(bytes memory key) internal pure returns (Hasher memory) {
        uint32[8] memory key_words;
        bytes memory key_mem = key;
        _words_from_little_endian_bytes8(key_mem, key_words);
        return _new_hasher_internal(key_words, KEYED_HASH);
    }

    // Construct a new `Hasher` for the key derivation function. The context
    // string should be hardcoded, globally unique, and application-specific
    function new_derive_key(bytes memory context) internal pure returns (Hasher memory) {
        uint32[8] memory IV = _IV();
        Hasher memory context_hasher = _new_hasher_internal(IV, DERIVE_KEY_CONTEXT);
        update_hasher(context_hasher, context);

        bytes memory context_key = new bytes(256);
        _finalize_internal(context_hasher, context_key);

        uint32[8] memory context_key_words;
        _words_from_little_endian_bytes8(context_key, context_key_words);

        return _new_hasher_internal(context_key_words, DERIVE_KEY_MATERIAL);
    }

    function _push_stack(Hasher memory self, uint32[8] memory cv) internal pure {
        self.cv_stack[self.cv_stack_len] = cv;
        self.cv_stack_len += 1;
    }

    function _pop_stack(Hasher memory self) internal pure returns (uint32[8] memory) {
        self.cv_stack_len -= 1;
        return self.cv_stack[self.cv_stack_len];
    }

    function _add_chunk_chaining_value(
        Hasher memory self,
        uint32[8] memory new_cv,
        uint64 total_chunks
    ) internal pure {
        while (total_chunks & 1 == 0) {
            new_cv = _parent_cv(_pop_stack(self), new_cv, self.key_words, self.flags);
            total_chunks >>= 1;
        }

        _push_stack(self, new_cv);
    }

    function _slice(
        bytes memory data,
        uint256 start,
        uint256 end
    ) internal pure returns (bytes memory) {
        uint256 dataSliceLength = end - start;
        bytes memory dataSlice = new bytes(dataSliceLength);

        for (uint256 i = 0; i < dataSliceLength; ++i) {
            dataSlice[i] = data[start + i];
        }

        return dataSlice;
    }

    // Add input to the hash state. This can be called any number of times.
    function update_hasher(
        Hasher memory self, bytes memory input
    ) internal pure returns (Hasher memory) {
        uint256 input_offset = 0;

        while (input_offset < input.length) {
            // If the current chunk is complete, finalize it and reset the
            // chunk state. More input is coming, so this chunk is not ROOT.
                if (_len(self.chunk_state) == CHUNK_LEN) {
                uint32[8] memory chunk_cv = _chaining_value(_output(self.chunk_state));
                uint64 total_chunks = self.chunk_state.chunk_counter + 1;

                _add_chunk_chaining_value(self, chunk_cv, total_chunks);

                self.chunk_state = _new_chunkstate(self.key_words, total_chunks, self.flags);
            }

            // Compress input bytes into the current chunk state.
            uint256 want = CHUNK_LEN - _len(self.chunk_state);
            uint256 take = _min(want, uint32(input.length - input_offset));

            // Update chunk state
            bytes memory input_slice = _slice(input, input_offset, take + input_offset);
            _update_chunkstate(self.chunk_state, input_slice);

            input_offset += take;
        }

        return self;
    }

    function finalize(Hasher memory self) internal pure returns (bytes memory) {
        bytes memory output = new bytes(32);

        _finalize_internal(self, output);

        return output;
    }

    function _finalize_internal(
        Hasher memory self, bytes memory out_slice
    ) internal pure {
        // Starting with the Output from the current chunk, compute all the
        // parent chaining values along the right edge of the tree, until we
        // have the root Output.
        Output memory output = _output(self.chunk_state);
        uint32 parent_nodes_remaining = self.cv_stack_len;

        while (parent_nodes_remaining > 0) {
            parent_nodes_remaining -= 1;

            output = _parent_output(
                self.cv_stack[parent_nodes_remaining],
                _chaining_value(output),
                self.key_words,
                self.flags
            );
        }
        _root_output_bytes(output, out_slice);
    }

    function sliceBytes(bytes memory message, uint64 length) internal pure returns (bytes memory) {
        require(length <= message.length, "Length exceeds message length");
        
        // Overwrite the length field of the bytes to crop the message
        assembly {
            mstore(message, length)
        }
        
        return message;
    }

    function hash(
        bytes memory message,
        uint32 length
    ) external pure returns (bytes memory) {
        Hasher memory hasher = new_hasher();
        update_hasher(hasher, message);

        return sliceBytes(finalize(hasher), length);
    }
}