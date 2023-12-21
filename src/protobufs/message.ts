/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/** Type of hashing scheme used to produce a digest of MessageData */
export enum HashScheme {
  NONE = 0,
  /** BLAKE3 - Default scheme for hashing MessageData */
  BLAKE3 = 1,
}

export function hashSchemeFromJSON(object: any): HashScheme {
  switch (object) {
    case 0:
    case "HASH_SCHEME_NONE":
      return HashScheme.NONE;
    case 1:
    case "HASH_SCHEME_BLAKE3":
      return HashScheme.BLAKE3;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum HashScheme");
  }
}

export function hashSchemeToJSON(object: HashScheme): string {
  switch (object) {
    case HashScheme.NONE:
      return "HASH_SCHEME_NONE";
    case HashScheme.BLAKE3:
      return "HASH_SCHEME_BLAKE3";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum HashScheme");
  }
}

/** Type of signature scheme used to sign the Message hash */
export enum SignatureScheme {
  NONE = 0,
  /** ED25519 - Ed25519 signature (default) */
  ED25519 = 1,
  /** EIP712 - ECDSA signature using EIP-712 scheme */
  EIP712 = 2,
}

export function signatureSchemeFromJSON(object: any): SignatureScheme {
  switch (object) {
    case 0:
    case "SIGNATURE_SCHEME_NONE":
      return SignatureScheme.NONE;
    case 1:
    case "SIGNATURE_SCHEME_ED25519":
      return SignatureScheme.ED25519;
    case 2:
    case "SIGNATURE_SCHEME_EIP712":
      return SignatureScheme.EIP712;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SignatureScheme");
  }
}

export function signatureSchemeToJSON(object: SignatureScheme): string {
  switch (object) {
    case SignatureScheme.NONE:
      return "SIGNATURE_SCHEME_NONE";
    case SignatureScheme.ED25519:
      return "SIGNATURE_SCHEME_ED25519";
    case SignatureScheme.EIP712:
      return "SIGNATURE_SCHEME_EIP712";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SignatureScheme");
  }
}

/** Type of the MessageBody */
export enum MessageType {
  NONE = 0,
  /** CAST_ADD - Add a new Cast */
  CAST_ADD = 1,
  /** CAST_REMOVE - Remove an existing Cast */
  CAST_REMOVE = 2,
  /** REACTION_ADD - Add a Reaction to a Cast */
  REACTION_ADD = 3,
  /** REACTION_REMOVE - Remove a Reaction from a Cast */
  REACTION_REMOVE = 4,
  /** LINK_ADD - Add a new Link */
  LINK_ADD = 5,
  /** LINK_REMOVE - Remove an existing Link */
  LINK_REMOVE = 6,
  /** VERIFICATION_ADD_ETH_ADDRESS - Add a Verification of an Ethereum Address */
  VERIFICATION_ADD_ETH_ADDRESS = 7,
  /** VERIFICATION_REMOVE - Remove a Verification */
  VERIFICATION_REMOVE = 8,
  /** DEPRECATED_SIGNER_ADD - Add a new Ed25519 key pair that signs messages for a user */
  DEPRECATED_SIGNER_ADD = 9,
  /** DEPRECATED_SIGNER_REMOVE - Remove an Ed25519 key pair that signs messages for a user */
  DEPRECATED_SIGNER_REMOVE = 10,
  /** USER_DATA_ADD - Add metadata about a user */
  USER_DATA_ADD = 11,
  /** USERNAME_PROOF - Add or replace a username proof */
  USERNAME_PROOF = 12,
}

export function messageTypeFromJSON(object: any): MessageType {
  switch (object) {
    case 0:
    case "MESSAGE_TYPE_NONE":
      return MessageType.NONE;
    case 1:
    case "MESSAGE_TYPE_CAST_ADD":
      return MessageType.CAST_ADD;
    case 2:
    case "MESSAGE_TYPE_CAST_REMOVE":
      return MessageType.CAST_REMOVE;
    case 3:
    case "MESSAGE_TYPE_REACTION_ADD":
      return MessageType.REACTION_ADD;
    case 4:
    case "MESSAGE_TYPE_REACTION_REMOVE":
      return MessageType.REACTION_REMOVE;
    case 5:
    case "MESSAGE_TYPE_LINK_ADD":
      return MessageType.LINK_ADD;
    case 6:
    case "MESSAGE_TYPE_LINK_REMOVE":
      return MessageType.LINK_REMOVE;
    case 7:
    case "MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS":
      return MessageType.VERIFICATION_ADD_ETH_ADDRESS;
    case 8:
    case "MESSAGE_TYPE_VERIFICATION_REMOVE":
      return MessageType.VERIFICATION_REMOVE;
    case 9:
    case "DEPRECATED_MESSAGE_TYPE_SIGNER_ADD":
      return MessageType.DEPRECATED_SIGNER_ADD;
    case 10:
    case "DEPRECATED_MESSAGE_TYPE_SIGNER_REMOVE":
      return MessageType.DEPRECATED_SIGNER_REMOVE;
    case 11:
    case "MESSAGE_TYPE_USER_DATA_ADD":
      return MessageType.USER_DATA_ADD;
    case 12:
    case "MESSAGE_TYPE_USERNAME_PROOF":
      return MessageType.USERNAME_PROOF;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MessageType");
  }
}

export function messageTypeToJSON(object: MessageType): string {
  switch (object) {
    case MessageType.NONE:
      return "MESSAGE_TYPE_NONE";
    case MessageType.CAST_ADD:
      return "MESSAGE_TYPE_CAST_ADD";
    case MessageType.CAST_REMOVE:
      return "MESSAGE_TYPE_CAST_REMOVE";
    case MessageType.REACTION_ADD:
      return "MESSAGE_TYPE_REACTION_ADD";
    case MessageType.REACTION_REMOVE:
      return "MESSAGE_TYPE_REACTION_REMOVE";
    case MessageType.LINK_ADD:
      return "MESSAGE_TYPE_LINK_ADD";
    case MessageType.LINK_REMOVE:
      return "MESSAGE_TYPE_LINK_REMOVE";
    case MessageType.VERIFICATION_ADD_ETH_ADDRESS:
      return "MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS";
    case MessageType.VERIFICATION_REMOVE:
      return "MESSAGE_TYPE_VERIFICATION_REMOVE";
    case MessageType.DEPRECATED_SIGNER_ADD:
      return "DEPRECATED_MESSAGE_TYPE_SIGNER_ADD";
    case MessageType.DEPRECATED_SIGNER_REMOVE:
      return "DEPRECATED_MESSAGE_TYPE_SIGNER_REMOVE";
    case MessageType.USER_DATA_ADD:
      return "MESSAGE_TYPE_USER_DATA_ADD";
    case MessageType.USERNAME_PROOF:
      return "MESSAGE_TYPE_USERNAME_PROOF";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum MessageType");
  }
}

/** Farcaster network the message is intended for */
export enum FarcasterNetwork {
  NONE = 0,
  /** MAINNET - Public primary network */
  MAINNET = 1,
  /** TESTNET - Public test network */
  TESTNET = 2,
  /** DEVNET - Private test network */
  DEVNET = 3,
}

export function farcasterNetworkFromJSON(object: any): FarcasterNetwork {
  switch (object) {
    case 0:
    case "FARCASTER_NETWORK_NONE":
      return FarcasterNetwork.NONE;
    case 1:
    case "FARCASTER_NETWORK_MAINNET":
      return FarcasterNetwork.MAINNET;
    case 2:
    case "FARCASTER_NETWORK_TESTNET":
      return FarcasterNetwork.TESTNET;
    case 3:
    case "FARCASTER_NETWORK_DEVNET":
      return FarcasterNetwork.DEVNET;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FarcasterNetwork");
  }
}

export function farcasterNetworkToJSON(object: FarcasterNetwork): string {
  switch (object) {
    case FarcasterNetwork.NONE:
      return "FARCASTER_NETWORK_NONE";
    case FarcasterNetwork.MAINNET:
      return "FARCASTER_NETWORK_MAINNET";
    case FarcasterNetwork.TESTNET:
      return "FARCASTER_NETWORK_TESTNET";
    case FarcasterNetwork.DEVNET:
      return "FARCASTER_NETWORK_DEVNET";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum FarcasterNetwork");
  }
}

/** Type of UserData */
export enum UserDataType {
  NONE = 0,
  /** PFP - Profile Picture for the user */
  PFP = 1,
  /** DISPLAY - Display Name for the user */
  DISPLAY = 2,
  /** BIO - Bio for the user */
  BIO = 3,
  EMPTY = 4,
  /** URL - URL of the user */
  URL = 5,
  /** USERNAME - Preferred Name for the user */
  USERNAME = 6,
}

export function userDataTypeFromJSON(object: any): UserDataType {
  switch (object) {
    case 0:
    case "USER_DATA_TYPE_NONE":
      return UserDataType.NONE;
    case 1:
    case "USER_DATA_TYPE_PFP":
      return UserDataType.PFP;
    case 2:
    case "USER_DATA_TYPE_DISPLAY":
      return UserDataType.DISPLAY;
    case 3:
    case "USER_DATA_TYPE_BIO":
      return UserDataType.BIO;
    case 4:
    case "EMPTY":
      return UserDataType.EMPTY;
    case 5:
    case "USER_DATA_TYPE_URL":
      return UserDataType.URL;
    case 6:
    case "USER_DATA_TYPE_USERNAME":
      return UserDataType.USERNAME;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum UserDataType");
  }
}

export function userDataTypeToJSON(object: UserDataType): string {
  switch (object) {
    case UserDataType.NONE:
      return "USER_DATA_TYPE_NONE";
    case UserDataType.PFP:
      return "USER_DATA_TYPE_PFP";
    case UserDataType.DISPLAY:
      return "USER_DATA_TYPE_DISPLAY";
    case UserDataType.BIO:
      return "USER_DATA_TYPE_BIO";
    case UserDataType.EMPTY:
      return "EMPTY";
    case UserDataType.URL:
      return "USER_DATA_TYPE_URL";
    case UserDataType.USERNAME:
      return "USER_DATA_TYPE_USERNAME";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum UserDataType");
  }
}

/** Type of Reaction */
export enum ReactionType {
  NONE = 0,
  /** LIKE - Like the target cast */
  LIKE = 1,
  /** RECAST - Share target cast to the user's audience */
  RECAST = 2,
}

export function reactionTypeFromJSON(object: any): ReactionType {
  switch (object) {
    case 0:
    case "REACTION_TYPE_NONE":
      return ReactionType.NONE;
    case 1:
    case "REACTION_TYPE_LIKE":
      return ReactionType.LIKE;
    case 2:
    case "REACTION_TYPE_RECAST":
      return ReactionType.RECAST;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ReactionType");
  }
}

export function reactionTypeToJSON(object: ReactionType): string {
  switch (object) {
    case ReactionType.NONE:
      return "REACTION_TYPE_NONE";
    case ReactionType.LIKE:
      return "REACTION_TYPE_LIKE";
    case ReactionType.RECAST:
      return "REACTION_TYPE_RECAST";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ReactionType");
  }
}

/**
 * A Message is a delta operation on the Farcaster network. The message protobuf is an envelope
 * that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
 */
export interface Message {
  /** Contents of the message */
  data:
    | MessageData
    | undefined;
  /** Hash digest of data */
  hash: Uint8Array;
  /** Hash scheme that produced the hash digest */
  hashScheme: HashScheme;
  /** Signature of the hash  digest */
  signature: Uint8Array;
  /** Signature scheme that produced the signature */
  signatureScheme: SignatureScheme;
  /** Public key or address of the key pair that produced the signature */
  signer: Uint8Array;
  /** MessageData serialized to bytes if using protobuf serialization other than ts-proto */
  dataBytes: Uint8Array;
}

/**
 * A MessageData object contains properties common to all messages and wraps a body object which
 * contains properties specific to the MessageType.
 */
export interface MessageData {
  /** Type of message contained in the body */
  type: MessageType;
  /** Farcaster ID of the user producing the message */
  fid: number;
  /** Farcaster epoch timestamp in seconds */
  timestamp: number;
  /** Farcaster network the message is intended for */
  network: FarcasterNetwork;
  castAddBody:
    | CastAddBody
    | undefined;
  /** CastRemoveBody cast_remove_body = 6; */
  emptyCastRemoveBody: boolean;
  reactionBody: ReactionBody | undefined;
  empty: boolean;
  verificationAddEthAddressBody:
    | VerificationAddEthAddressBody
    | undefined;
  /** VerificationRemoveBody verification_remove_body = 10; */
  emptyVerificationRemoveBody: boolean;
  deprecatedSignerAddBody: boolean;
  userDataBody: UserDataBody | undefined;
  deprecatedSignerRemoveBody: boolean;
  linkBody:
    | LinkBody
    | undefined;
  /** UserNameProof username_proof_body = 15; */
  emptyUsernameProofBody: boolean;
}

/** Adds metadata about a user */
export interface UserDataBody {
  /** Type of metadata */
  type: UserDataType;
  /** Value of the metadata */
  value: string;
}

export interface Embed {
  url: string;
  castId: CastId | undefined;
}

/** Adds a new Cast */
export interface CastAddBody {
  /** URLs to be embedded in the cast */
  embedsDeprecated: string;
  /** Fids mentioned in the cast */
  mentions: number[];
  /** Parent cast of the cast */
  parentCastId:
    | CastId
    | undefined;
  /** Text of the cast */
  text: string;
  /** Positions of the mentions in the text */
  mentionsPositions: number[];
  /** URLs or cast ids to be embedded in the cast */
  embeds: Embed[];
  /** Parent URL */
  parentUrl: string;
}

/** Removes an existing Cast */
export interface CastRemoveBody {
  /** Hash of the cast to remove */
  targetHash: Uint8Array;
}

/** Identifier used to look up a Cast */
export interface CastId {
  /** Fid of the user who created the cast */
  fid: number;
  /** Hash of the cast */
  hash: Uint8Array;
}

/** Adds or removes a Reaction from a Cast */
export interface ReactionBody {
  /** Type of reaction */
  type: ReactionType;
  /** CastId of the Cast to react to */
  targetCastId:
    | CastId
    | undefined;
  /** URL to react to */
  targetUrl: string;
}

/** Adds a Verification of ownership of an Ethereum Address */
export interface VerificationAddEthAddressBody {
  /** Ethereum address being verified */
  address: Uint8Array;
  /** Signature produced by the user's Ethereum address */
  ethSignature: Uint8Array;
  /** Hash of the latest Ethereum block when the signature was produced */
  blockHash: Uint8Array;
  /** Type of verification. 0 = EOA, 1 = contract */
  verificationType: number;
  /** 0 for EOA verifications, 1 or 10 for contract verifications */
  chainId: number;
}

/** Removes a Verification of any type */
export interface VerificationRemoveBody {
  /** Address of the Verification to remove */
  address: Uint8Array;
}

/** Adds or removes a Link */
export interface LinkBody {
  /** Type of link, <= 8 characters */
  type: string;
  /** User-defined timestamp that preserves original timestamp when message.data.timestamp needs to be updated for compaction */
  displayTimestamp: number;
  /** The fid the link relates to */
  targetFid: number;
}

function createBaseMessage(): Message {
  return {
    data: undefined,
    hash: new Uint8Array(),
    hashScheme: 0,
    signature: new Uint8Array(),
    signatureScheme: 0,
    signer: new Uint8Array(),
    dataBytes: new Uint8Array(),
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      MessageData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    if (message.hashScheme !== 0) {
      writer.uint32(24).int32(message.hashScheme);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.signatureScheme !== 0) {
      writer.uint32(40).int32(message.signatureScheme);
    }
    if (message.signer.length !== 0) {
      writer.uint32(50).bytes(message.signer);
    }
    if (message.dataBytes.length !== 0) {
      writer.uint32(58).bytes(message.dataBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.data = MessageData.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.hash = reader.bytes();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.hashScheme = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.signatureScheme = reader.int32() as any;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.signer = reader.bytes();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.dataBytes = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      data: isSet(object.data) ? MessageData.fromJSON(object.data) : undefined,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      hashScheme: isSet(object.hashScheme) ? hashSchemeFromJSON(object.hashScheme) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      signatureScheme: isSet(object.signatureScheme) ? signatureSchemeFromJSON(object.signatureScheme) : 0,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      dataBytes: isSet(object.dataBytes) ? bytesFromBase64(object.dataBytes) : new Uint8Array(),
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? MessageData.toJSON(message.data) : undefined);
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.hashScheme !== undefined && (obj.hashScheme = hashSchemeToJSON(message.hashScheme));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.signatureScheme !== undefined && (obj.signatureScheme = signatureSchemeToJSON(message.signatureScheme));
    message.signer !== undefined &&
      (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.dataBytes !== undefined &&
      (obj.dataBytes = base64FromBytes(message.dataBytes !== undefined ? message.dataBytes : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.data = (object.data !== undefined && object.data !== null)
      ? MessageData.fromPartial(object.data)
      : undefined;
    message.hash = object.hash ?? new Uint8Array();
    message.hashScheme = object.hashScheme ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    message.signatureScheme = object.signatureScheme ?? 0;
    message.signer = object.signer ?? new Uint8Array();
    message.dataBytes = object.dataBytes ?? new Uint8Array();
    return message;
  },
};

function createBaseMessageData(): MessageData {
  return {
    type: 0,
    fid: 0,
    timestamp: 0,
    network: 0,
    castAddBody: undefined,
    emptyCastRemoveBody: false,
    reactionBody: undefined,
    empty: false,
    verificationAddEthAddressBody: undefined,
    emptyVerificationRemoveBody: false,
    deprecatedSignerAddBody: false,
    userDataBody: undefined,
    deprecatedSignerRemoveBody: false,
    linkBody: undefined,
    emptyUsernameProofBody: false,
  };
}

export const MessageData = {
  encode(message: MessageData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.fid !== 0) {
      writer.uint32(16).uint64(message.fid);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    if (message.network !== 0) {
      writer.uint32(32).int32(message.network);
    }
    if (message.castAddBody !== undefined) {
      CastAddBody.encode(message.castAddBody, writer.uint32(42).fork()).ldelim();
    }
    if (message.emptyCastRemoveBody === true) {
      writer.uint32(48).bool(message.emptyCastRemoveBody);
    }
    if (message.reactionBody !== undefined) {
      ReactionBody.encode(message.reactionBody, writer.uint32(58).fork()).ldelim();
    }
    if (message.empty === true) {
      writer.uint32(64).bool(message.empty);
    }
    if (message.verificationAddEthAddressBody !== undefined) {
      VerificationAddEthAddressBody.encode(message.verificationAddEthAddressBody, writer.uint32(74).fork()).ldelim();
    }
    if (message.emptyVerificationRemoveBody === true) {
      writer.uint32(80).bool(message.emptyVerificationRemoveBody);
    }
    if (message.deprecatedSignerAddBody === true) {
      writer.uint32(88).bool(message.deprecatedSignerAddBody);
    }
    if (message.userDataBody !== undefined) {
      UserDataBody.encode(message.userDataBody, writer.uint32(98).fork()).ldelim();
    }
    if (message.deprecatedSignerRemoveBody === true) {
      writer.uint32(104).bool(message.deprecatedSignerRemoveBody);
    }
    if (message.linkBody !== undefined) {
      LinkBody.encode(message.linkBody, writer.uint32(114).fork()).ldelim();
    }
    if (message.emptyUsernameProofBody === true) {
      writer.uint32(120).bool(message.emptyUsernameProofBody);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.fid = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.network = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.castAddBody = CastAddBody.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.emptyCastRemoveBody = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.reactionBody = ReactionBody.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.empty = reader.bool();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.verificationAddEthAddressBody = VerificationAddEthAddressBody.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.emptyVerificationRemoveBody = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.deprecatedSignerAddBody = reader.bool();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.userDataBody = UserDataBody.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.deprecatedSignerRemoveBody = reader.bool();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.linkBody = LinkBody.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.emptyUsernameProofBody = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageData {
    return {
      type: isSet(object.type) ? messageTypeFromJSON(object.type) : 0,
      fid: isSet(object.fid) ? Number(object.fid) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      network: isSet(object.network) ? farcasterNetworkFromJSON(object.network) : 0,
      castAddBody: isSet(object.castAddBody) ? CastAddBody.fromJSON(object.castAddBody) : undefined,
      emptyCastRemoveBody: isSet(object.emptyCastRemoveBody) ? Boolean(object.emptyCastRemoveBody) : false,
      reactionBody: isSet(object.reactionBody) ? ReactionBody.fromJSON(object.reactionBody) : undefined,
      empty: isSet(object.empty) ? Boolean(object.empty) : false,
      verificationAddEthAddressBody: isSet(object.verificationAddEthAddressBody)
        ? VerificationAddEthAddressBody.fromJSON(object.verificationAddEthAddressBody)
        : undefined,
      emptyVerificationRemoveBody: isSet(object.emptyVerificationRemoveBody)
        ? Boolean(object.emptyVerificationRemoveBody)
        : false,
      deprecatedSignerAddBody: isSet(object.deprecatedSignerAddBody) ? Boolean(object.deprecatedSignerAddBody) : false,
      userDataBody: isSet(object.userDataBody) ? UserDataBody.fromJSON(object.userDataBody) : undefined,
      deprecatedSignerRemoveBody: isSet(object.deprecatedSignerRemoveBody)
        ? Boolean(object.deprecatedSignerRemoveBody)
        : false,
      linkBody: isSet(object.linkBody) ? LinkBody.fromJSON(object.linkBody) : undefined,
      emptyUsernameProofBody: isSet(object.emptyUsernameProofBody) ? Boolean(object.emptyUsernameProofBody) : false,
    };
  },

  toJSON(message: MessageData): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = messageTypeToJSON(message.type));
    message.fid !== undefined && (obj.fid = Math.round(message.fid));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.network !== undefined && (obj.network = farcasterNetworkToJSON(message.network));
    message.castAddBody !== undefined &&
      (obj.castAddBody = message.castAddBody ? CastAddBody.toJSON(message.castAddBody) : undefined);
    message.emptyCastRemoveBody !== undefined && (obj.emptyCastRemoveBody = message.emptyCastRemoveBody);
    message.reactionBody !== undefined &&
      (obj.reactionBody = message.reactionBody ? ReactionBody.toJSON(message.reactionBody) : undefined);
    message.empty !== undefined && (obj.empty = message.empty);
    message.verificationAddEthAddressBody !== undefined &&
      (obj.verificationAddEthAddressBody = message.verificationAddEthAddressBody
        ? VerificationAddEthAddressBody.toJSON(message.verificationAddEthAddressBody)
        : undefined);
    message.emptyVerificationRemoveBody !== undefined &&
      (obj.emptyVerificationRemoveBody = message.emptyVerificationRemoveBody);
    message.deprecatedSignerAddBody !== undefined && (obj.deprecatedSignerAddBody = message.deprecatedSignerAddBody);
    message.userDataBody !== undefined &&
      (obj.userDataBody = message.userDataBody ? UserDataBody.toJSON(message.userDataBody) : undefined);
    message.deprecatedSignerRemoveBody !== undefined &&
      (obj.deprecatedSignerRemoveBody = message.deprecatedSignerRemoveBody);
    message.linkBody !== undefined && (obj.linkBody = message.linkBody ? LinkBody.toJSON(message.linkBody) : undefined);
    message.emptyUsernameProofBody !== undefined && (obj.emptyUsernameProofBody = message.emptyUsernameProofBody);
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageData>, I>>(base?: I): MessageData {
    return MessageData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageData>, I>>(object: I): MessageData {
    const message = createBaseMessageData();
    message.type = object.type ?? 0;
    message.fid = object.fid ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.network = object.network ?? 0;
    message.castAddBody = (object.castAddBody !== undefined && object.castAddBody !== null)
      ? CastAddBody.fromPartial(object.castAddBody)
      : undefined;
    message.emptyCastRemoveBody = object.emptyCastRemoveBody ?? false;
    message.reactionBody = (object.reactionBody !== undefined && object.reactionBody !== null)
      ? ReactionBody.fromPartial(object.reactionBody)
      : undefined;
    message.empty = object.empty ?? false;
    message.verificationAddEthAddressBody =
      (object.verificationAddEthAddressBody !== undefined && object.verificationAddEthAddressBody !== null)
        ? VerificationAddEthAddressBody.fromPartial(object.verificationAddEthAddressBody)
        : undefined;
    message.emptyVerificationRemoveBody = object.emptyVerificationRemoveBody ?? false;
    message.deprecatedSignerAddBody = object.deprecatedSignerAddBody ?? false;
    message.userDataBody = (object.userDataBody !== undefined && object.userDataBody !== null)
      ? UserDataBody.fromPartial(object.userDataBody)
      : undefined;
    message.deprecatedSignerRemoveBody = object.deprecatedSignerRemoveBody ?? false;
    message.linkBody = (object.linkBody !== undefined && object.linkBody !== null)
      ? LinkBody.fromPartial(object.linkBody)
      : undefined;
    message.emptyUsernameProofBody = object.emptyUsernameProofBody ?? false;
    return message;
  },
};

function createBaseUserDataBody(): UserDataBody {
  return { type: 0, value: "" };
}

export const UserDataBody = {
  encode(message: UserDataBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDataBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDataBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserDataBody {
    return {
      type: isSet(object.type) ? userDataTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: UserDataBody): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = userDataTypeToJSON(message.type));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserDataBody>, I>>(base?: I): UserDataBody {
    return UserDataBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserDataBody>, I>>(object: I): UserDataBody {
    const message = createBaseUserDataBody();
    message.type = object.type ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEmbed(): Embed {
  return { url: "", castId: undefined };
}

export const Embed = {
  encode(message: Embed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.castId !== undefined) {
      CastId.encode(message.castId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Embed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmbed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.castId = CastId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Embed {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      castId: isSet(object.castId) ? CastId.fromJSON(object.castId) : undefined,
    };
  },

  toJSON(message: Embed): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.castId !== undefined && (obj.castId = message.castId ? CastId.toJSON(message.castId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Embed>, I>>(base?: I): Embed {
    return Embed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Embed>, I>>(object: I): Embed {
    const message = createBaseEmbed();
    message.url = object.url ?? "";
    message.castId = (object.castId !== undefined && object.castId !== null)
      ? CastId.fromPartial(object.castId)
      : undefined;
    return message;
  },
};

function createBaseCastAddBody(): CastAddBody {
  return {
    embedsDeprecated: "",
    mentions: [],
    parentCastId: undefined,
    text: "",
    mentionsPositions: [],
    embeds: [],
    parentUrl: "",
  };
}

export const CastAddBody = {
  encode(message: CastAddBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.embedsDeprecated !== "") {
      writer.uint32(10).string(message.embedsDeprecated);
    }
    writer.uint32(18).fork();
    for (const v of message.mentions) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.parentCastId !== undefined) {
      CastId.encode(message.parentCastId, writer.uint32(26).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    writer.uint32(42).fork();
    for (const v of message.mentionsPositions) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.embeds) {
      Embed.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.parentUrl !== "") {
      writer.uint32(58).string(message.parentUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CastAddBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCastAddBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.embedsDeprecated = reader.string();
          continue;
        case 2:
          if (tag == 16) {
            message.mentions.push(longToNumber(reader.uint64() as Long));
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mentions.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag != 26) {
            break;
          }

          message.parentCastId = CastId.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag == 40) {
            message.mentionsPositions.push(reader.uint32());
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mentionsPositions.push(reader.uint32());
            }

            continue;
          }

          break;
        case 6:
          if (tag != 50) {
            break;
          }

          message.embeds.push(Embed.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.parentUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CastAddBody {
    return {
      embedsDeprecated: isSet(object.embedsDeprecated) ? String(object.embedsDeprecated) : "",
      mentions: Array.isArray(object?.mentions) ? object.mentions.map((e: any) => Number(e)) : [],
      parentCastId: isSet(object.parentCastId) ? CastId.fromJSON(object.parentCastId) : undefined,
      text: isSet(object.text) ? String(object.text) : "",
      mentionsPositions: Array.isArray(object?.mentionsPositions)
        ? object.mentionsPositions.map((e: any) => Number(e))
        : [],
      embeds: Array.isArray(object?.embeds) ? object.embeds.map((e: any) => Embed.fromJSON(e)) : [],
      parentUrl: isSet(object.parentUrl) ? String(object.parentUrl) : "",
    };
  },

  toJSON(message: CastAddBody): unknown {
    const obj: any = {};
    message.embedsDeprecated !== undefined && (obj.embedsDeprecated = message.embedsDeprecated);
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) => Math.round(e));
    } else {
      obj.mentions = [];
    }
    message.parentCastId !== undefined &&
      (obj.parentCastId = message.parentCastId ? CastId.toJSON(message.parentCastId) : undefined);
    message.text !== undefined && (obj.text = message.text);
    if (message.mentionsPositions) {
      obj.mentionsPositions = message.mentionsPositions.map((e) => Math.round(e));
    } else {
      obj.mentionsPositions = [];
    }
    if (message.embeds) {
      obj.embeds = message.embeds.map((e) => e ? Embed.toJSON(e) : undefined);
    } else {
      obj.embeds = [];
    }
    message.parentUrl !== undefined && (obj.parentUrl = message.parentUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CastAddBody>, I>>(base?: I): CastAddBody {
    return CastAddBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CastAddBody>, I>>(object: I): CastAddBody {
    const message = createBaseCastAddBody();
    message.embedsDeprecated = object.embedsDeprecated ?? "";
    message.mentions = object.mentions?.map((e) => e) || [];
    message.parentCastId = (object.parentCastId !== undefined && object.parentCastId !== null)
      ? CastId.fromPartial(object.parentCastId)
      : undefined;
    message.text = object.text ?? "";
    message.mentionsPositions = object.mentionsPositions?.map((e) => e) || [];
    message.embeds = object.embeds?.map((e) => Embed.fromPartial(e)) || [];
    message.parentUrl = object.parentUrl ?? "";
    return message;
  },
};

function createBaseCastRemoveBody(): CastRemoveBody {
  return { targetHash: new Uint8Array() };
}

export const CastRemoveBody = {
  encode(message: CastRemoveBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetHash.length !== 0) {
      writer.uint32(10).bytes(message.targetHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CastRemoveBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCastRemoveBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.targetHash = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CastRemoveBody {
    return { targetHash: isSet(object.targetHash) ? bytesFromBase64(object.targetHash) : new Uint8Array() };
  },

  toJSON(message: CastRemoveBody): unknown {
    const obj: any = {};
    message.targetHash !== undefined &&
      (obj.targetHash = base64FromBytes(message.targetHash !== undefined ? message.targetHash : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<CastRemoveBody>, I>>(base?: I): CastRemoveBody {
    return CastRemoveBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CastRemoveBody>, I>>(object: I): CastRemoveBody {
    const message = createBaseCastRemoveBody();
    message.targetHash = object.targetHash ?? new Uint8Array();
    return message;
  },
};

function createBaseCastId(): CastId {
  return { fid: 0, hash: new Uint8Array() };
}

export const CastId = {
  encode(message: CastId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fid !== 0) {
      writer.uint32(8).uint64(message.fid);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CastId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCastId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fid = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.hash = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CastId {
    return {
      fid: isSet(object.fid) ? Number(object.fid) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
    };
  },

  toJSON(message: CastId): unknown {
    const obj: any = {};
    message.fid !== undefined && (obj.fid = Math.round(message.fid));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<CastId>, I>>(base?: I): CastId {
    return CastId.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CastId>, I>>(object: I): CastId {
    const message = createBaseCastId();
    message.fid = object.fid ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

function createBaseReactionBody(): ReactionBody {
  return { type: 0, targetCastId: undefined, targetUrl: "" };
}

export const ReactionBody = {
  encode(message: ReactionBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.targetCastId !== undefined) {
      CastId.encode(message.targetCastId, writer.uint32(18).fork()).ldelim();
    }
    if (message.targetUrl !== "") {
      writer.uint32(26).string(message.targetUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReactionBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReactionBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.targetCastId = CastId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.targetUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReactionBody {
    return {
      type: isSet(object.type) ? reactionTypeFromJSON(object.type) : 0,
      targetCastId: isSet(object.targetCastId) ? CastId.fromJSON(object.targetCastId) : undefined,
      targetUrl: isSet(object.targetUrl) ? String(object.targetUrl) : "",
    };
  },

  toJSON(message: ReactionBody): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = reactionTypeToJSON(message.type));
    message.targetCastId !== undefined &&
      (obj.targetCastId = message.targetCastId ? CastId.toJSON(message.targetCastId) : undefined);
    message.targetUrl !== undefined && (obj.targetUrl = message.targetUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactionBody>, I>>(base?: I): ReactionBody {
    return ReactionBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactionBody>, I>>(object: I): ReactionBody {
    const message = createBaseReactionBody();
    message.type = object.type ?? 0;
    message.targetCastId = (object.targetCastId !== undefined && object.targetCastId !== null)
      ? CastId.fromPartial(object.targetCastId)
      : undefined;
    message.targetUrl = object.targetUrl ?? "";
    return message;
  },
};

function createBaseVerificationAddEthAddressBody(): VerificationAddEthAddressBody {
  return {
    address: new Uint8Array(),
    ethSignature: new Uint8Array(),
    blockHash: new Uint8Array(),
    verificationType: 0,
    chainId: 0,
  };
}

export const VerificationAddEthAddressBody = {
  encode(message: VerificationAddEthAddressBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.ethSignature.length !== 0) {
      writer.uint32(18).bytes(message.ethSignature);
    }
    if (message.blockHash.length !== 0) {
      writer.uint32(26).bytes(message.blockHash);
    }
    if (message.verificationType !== 0) {
      writer.uint32(32).uint32(message.verificationType);
    }
    if (message.chainId !== 0) {
      writer.uint32(40).uint32(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationAddEthAddressBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationAddEthAddressBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.ethSignature = reader.bytes();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.blockHash = reader.bytes();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.verificationType = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.chainId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationAddEthAddressBody {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      ethSignature: isSet(object.ethSignature) ? bytesFromBase64(object.ethSignature) : new Uint8Array(),
      blockHash: isSet(object.blockHash) ? bytesFromBase64(object.blockHash) : new Uint8Array(),
      verificationType: isSet(object.verificationType) ? Number(object.verificationType) : 0,
      chainId: isSet(object.chainId) ? Number(object.chainId) : 0,
    };
  },

  toJSON(message: VerificationAddEthAddressBody): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.ethSignature !== undefined &&
      (obj.ethSignature = base64FromBytes(
        message.ethSignature !== undefined ? message.ethSignature : new Uint8Array(),
      ));
    message.blockHash !== undefined &&
      (obj.blockHash = base64FromBytes(message.blockHash !== undefined ? message.blockHash : new Uint8Array()));
    message.verificationType !== undefined && (obj.verificationType = Math.round(message.verificationType));
    message.chainId !== undefined && (obj.chainId = Math.round(message.chainId));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationAddEthAddressBody>, I>>(base?: I): VerificationAddEthAddressBody {
    return VerificationAddEthAddressBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerificationAddEthAddressBody>, I>>(
    object: I,
  ): VerificationAddEthAddressBody {
    const message = createBaseVerificationAddEthAddressBody();
    message.address = object.address ?? new Uint8Array();
    message.ethSignature = object.ethSignature ?? new Uint8Array();
    message.blockHash = object.blockHash ?? new Uint8Array();
    message.verificationType = object.verificationType ?? 0;
    message.chainId = object.chainId ?? 0;
    return message;
  },
};

function createBaseVerificationRemoveBody(): VerificationRemoveBody {
  return { address: new Uint8Array() };
}

export const VerificationRemoveBody = {
  encode(message: VerificationRemoveBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationRemoveBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationRemoveBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationRemoveBody {
    return { address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array() };
  },

  toJSON(message: VerificationRemoveBody): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationRemoveBody>, I>>(base?: I): VerificationRemoveBody {
    return VerificationRemoveBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VerificationRemoveBody>, I>>(object: I): VerificationRemoveBody {
    const message = createBaseVerificationRemoveBody();
    message.address = object.address ?? new Uint8Array();
    return message;
  },
};

function createBaseLinkBody(): LinkBody {
  return { type: "", displayTimestamp: 0, targetFid: 0 };
}

export const LinkBody = {
  encode(message: LinkBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.displayTimestamp !== 0) {
      writer.uint32(16).uint32(message.displayTimestamp);
    }
    if (message.targetFid !== 0) {
      writer.uint32(24).uint64(message.targetFid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.displayTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.targetFid = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkBody {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      displayTimestamp: isSet(object.displayTimestamp) ? Number(object.displayTimestamp) : 0,
      targetFid: isSet(object.targetFid) ? Number(object.targetFid) : 0,
    };
  },

  toJSON(message: LinkBody): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.displayTimestamp !== undefined && (obj.displayTimestamp = Math.round(message.displayTimestamp));
    message.targetFid !== undefined && (obj.targetFid = Math.round(message.targetFid));
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkBody>, I>>(base?: I): LinkBody {
    return LinkBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LinkBody>, I>>(object: I): LinkBody {
    const message = createBaseLinkBody();
    message.type = object.type ?? "";
    message.displayTimestamp = object.displayTimestamp ?? 0;
    message.targetFid = object.targetFid ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
