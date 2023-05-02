/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum MsgContentType {
  TXT = 0,
  IMG = 1,
  EMOJI = 2,
  VOICE = 3,
  VIDEO = 4,
  LOCATION = 5,
  PACKET = 6,
  FILE = 7,
  UNRECOGNIZED = -1,
}

export function msgContentTypeFromJSON(object: any): MsgContentType {
  switch (object) {
    case 0:
    case "TXT":
      return MsgContentType.TXT;
    case 1:
    case "IMG":
      return MsgContentType.IMG;
    case 2:
    case "EMOJI":
      return MsgContentType.EMOJI;
    case 3:
    case "VOICE":
      return MsgContentType.VOICE;
    case 4:
    case "VIDEO":
      return MsgContentType.VIDEO;
    case 5:
    case "LOCATION":
      return MsgContentType.LOCATION;
    case 6:
    case "PACKET":
      return MsgContentType.PACKET;
    case 7:
    case "FILE":
      return MsgContentType.FILE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgContentType.UNRECOGNIZED;
  }
}

export function msgContentTypeToJSON(object: MsgContentType): string {
  switch (object) {
    case MsgContentType.TXT:
      return "TXT";
    case MsgContentType.IMG:
      return "IMG";
    case MsgContentType.EMOJI:
      return "EMOJI";
    case MsgContentType.VOICE:
      return "VOICE";
    case MsgContentType.VIDEO:
      return "VIDEO";
    case MsgContentType.LOCATION:
      return "LOCATION";
    case MsgContentType.PACKET:
      return "PACKET";
    case MsgContentType.FILE:
      return "FILE";
    case MsgContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MsgType {
  HAND_SHAKE = 0,
  HEART_BEAT = 1,
  SERVERS_REFRESHED = 2,
  USER_FORCE_OFFLINE = 3,
  CLIENT_STATUS_SWITCHED = 4,
  PULL_OFFLINE_MSG = 5,
  OFFER_OFFLINE_MSG = 6,
  ACK_OFFLINE_MSG_RECEIVED = 7,
  ACK_MSG_FROM_SERVER_RECEIVED = 8,
  ACK_MSG_FROM_CLIENT_RECEIVED = 9,
  SINGLE_CHAT = 10,
  GROUP_CHAT = 11,
  OTHER = 12,
  UNRECOGNIZED = -1,
}

export function msgTypeFromJSON(object: any): MsgType {
  switch (object) {
    case 0:
    case "HAND_SHAKE":
      return MsgType.HAND_SHAKE;
    case 1:
    case "HEART_BEAT":
      return MsgType.HEART_BEAT;
    case 2:
    case "SERVERS_REFRESHED":
      return MsgType.SERVERS_REFRESHED;
    case 3:
    case "USER_FORCE_OFFLINE":
      return MsgType.USER_FORCE_OFFLINE;
    case 4:
    case "CLIENT_STATUS_SWITCHED":
      return MsgType.CLIENT_STATUS_SWITCHED;
    case 5:
    case "PULL_OFFLINE_MSG":
      return MsgType.PULL_OFFLINE_MSG;
    case 6:
    case "OFFER_OFFLINE_MSG":
      return MsgType.OFFER_OFFLINE_MSG;
    case 7:
    case "ACK_OFFLINE_MSG_RECEIVED":
      return MsgType.ACK_OFFLINE_MSG_RECEIVED;
    case 8:
    case "ACK_MSG_FROM_SERVER_RECEIVED":
      return MsgType.ACK_MSG_FROM_SERVER_RECEIVED;
    case 9:
    case "ACK_MSG_FROM_CLIENT_RECEIVED":
      return MsgType.ACK_MSG_FROM_CLIENT_RECEIVED;
    case 10:
    case "SINGLE_CHAT":
      return MsgType.SINGLE_CHAT;
    case 11:
    case "GROUP_CHAT":
      return MsgType.GROUP_CHAT;
    case 12:
    case "OTHER":
      return MsgType.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgType.UNRECOGNIZED;
  }
}

export function msgTypeToJSON(object: MsgType): string {
  switch (object) {
    case MsgType.HAND_SHAKE:
      return "HAND_SHAKE";
    case MsgType.HEART_BEAT:
      return "HEART_BEAT";
    case MsgType.SERVERS_REFRESHED:
      return "SERVERS_REFRESHED";
    case MsgType.USER_FORCE_OFFLINE:
      return "USER_FORCE_OFFLINE";
    case MsgType.CLIENT_STATUS_SWITCHED:
      return "CLIENT_STATUS_SWITCHED";
    case MsgType.PULL_OFFLINE_MSG:
      return "PULL_OFFLINE_MSG";
    case MsgType.OFFER_OFFLINE_MSG:
      return "OFFER_OFFLINE_MSG";
    case MsgType.ACK_OFFLINE_MSG_RECEIVED:
      return "ACK_OFFLINE_MSG_RECEIVED";
    case MsgType.ACK_MSG_FROM_SERVER_RECEIVED:
      return "ACK_MSG_FROM_SERVER_RECEIVED";
    case MsgType.ACK_MSG_FROM_CLIENT_RECEIVED:
      return "ACK_MSG_FROM_CLIENT_RECEIVED";
    case MsgType.SINGLE_CHAT:
      return "SINGLE_CHAT";
    case MsgType.GROUP_CHAT:
      return "GROUP_CHAT";
    case MsgType.OTHER:
      return "OTHER";
    case MsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Msg {
  head: Head | undefined;
  body: string;
}

export interface Head {
  msgId: string;
  msgType: MsgType;
  msgContentType: MsgContentType;
  fromId: string;
  toId: string;
  timestamp: number;
  status: number;
  extend: string;
}

function createBaseMsg(): Msg {
  return { head: undefined, body: "" };
}

export const Msg = {
  encode(message: Msg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.head !== undefined) {
      Head.encode(message.head, writer.uint32(10).fork()).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Msg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.head = Head.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.body = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Msg {
    return {
      head: isSet(object.head) ? Head.fromJSON(object.head) : undefined,
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: Msg): unknown {
    const obj: any = {};
    message.head !== undefined && (obj.head = message.head ? Head.toJSON(message.head) : undefined);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  create<I extends Exact<DeepPartial<Msg>, I>>(base?: I): Msg {
    return Msg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Msg>, I>>(object: I): Msg {
    const message = createBaseMsg();
    message.head = (object.head !== undefined && object.head !== null) ? Head.fromPartial(object.head) : undefined;
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseHead(): Head {
  return { msgId: "", msgType: 0, msgContentType: 0, fromId: "", toId: "", timestamp: 0, status: 0, extend: "" };
}

export const Head = {
  encode(message: Head, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgId !== "") {
      writer.uint32(10).string(message.msgId);
    }
    if (message.msgType !== 0) {
      writer.uint32(16).int32(message.msgType);
    }
    if (message.msgContentType !== 0) {
      writer.uint32(24).int32(message.msgContentType);
    }
    if (message.fromId !== "") {
      writer.uint32(34).string(message.fromId);
    }
    if (message.toId !== "") {
      writer.uint32(42).string(message.toId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(49).fixed64(message.timestamp);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.extend !== "") {
      writer.uint32(66).string(message.extend);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Head {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHead();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.msgId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.msgType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.msgContentType = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.fromId = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.toId = reader.string();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.timestamp = longToNumber(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.extend = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Head {
    return {
      msgId: isSet(object.msgId) ? String(object.msgId) : "",
      msgType: isSet(object.msgType) ? msgTypeFromJSON(object.msgType) : 0,
      msgContentType: isSet(object.msgContentType) ? msgContentTypeFromJSON(object.msgContentType) : 0,
      fromId: isSet(object.fromId) ? String(object.fromId) : "",
      toId: isSet(object.toId) ? String(object.toId) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
      extend: isSet(object.extend) ? String(object.extend) : "",
    };
  },

  toJSON(message: Head): unknown {
    const obj: any = {};
    message.msgId !== undefined && (obj.msgId = message.msgId);
    message.msgType !== undefined && (obj.msgType = msgTypeToJSON(message.msgType));
    message.msgContentType !== undefined && (obj.msgContentType = msgContentTypeToJSON(message.msgContentType));
    message.fromId !== undefined && (obj.fromId = message.fromId);
    message.toId !== undefined && (obj.toId = message.toId);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.extend !== undefined && (obj.extend = message.extend);
    return obj;
  },

  create<I extends Exact<DeepPartial<Head>, I>>(base?: I): Head {
    return Head.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Head>, I>>(object: I): Head {
    const message = createBaseHead();
    message.msgId = object.msgId ?? "";
    message.msgType = object.msgType ?? 0;
    message.msgContentType = object.msgContentType ?? 0;
    message.fromId = object.fromId ?? "";
    message.toId = object.toId ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.status = object.status ?? 0;
    message.extend = object.extend ?? "";
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
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
