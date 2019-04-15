/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var Timestamp_pb = require('./Timestamp_pb.js');
goog.object.extend(proto, Timestamp_pb);
goog.exportSymbol('proto.proto.FileCreateTransactionBody', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.FileCreateTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.FileCreateTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.FileCreateTransactionBody.displayName = 'proto.proto.FileCreateTransactionBody';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.FileCreateTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.FileCreateTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.FileCreateTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileCreateTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    expirationtime: (f = msg.getExpirationtime()) && Timestamp_pb.Timestamp.toObject(includeInstance, f),
    keys: (f = msg.getKeys()) && BasicTypes_pb.KeyList.toObject(includeInstance, f),
    contents: msg.getContents_asB64(),
    shardid: (f = msg.getShardid()) && BasicTypes_pb.ShardID.toObject(includeInstance, f),
    realmid: (f = msg.getRealmid()) && BasicTypes_pb.RealmID.toObject(includeInstance, f),
    newrealmadminkey: (f = msg.getNewrealmadminkey()) && BasicTypes_pb.Key.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.FileCreateTransactionBody}
 */
proto.proto.FileCreateTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.FileCreateTransactionBody;
  return proto.proto.FileCreateTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.FileCreateTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.FileCreateTransactionBody}
 */
proto.proto.FileCreateTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new Timestamp_pb.Timestamp;
      reader.readMessage(value,Timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationtime(value);
      break;
    case 3:
      var value = new BasicTypes_pb.KeyList;
      reader.readMessage(value,BasicTypes_pb.KeyList.deserializeBinaryFromReader);
      msg.setKeys(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContents(value);
      break;
    case 5:
      var value = new BasicTypes_pb.ShardID;
      reader.readMessage(value,BasicTypes_pb.ShardID.deserializeBinaryFromReader);
      msg.setShardid(value);
      break;
    case 6:
      var value = new BasicTypes_pb.RealmID;
      reader.readMessage(value,BasicTypes_pb.RealmID.deserializeBinaryFromReader);
      msg.setRealmid(value);
      break;
    case 7:
      var value = new BasicTypes_pb.Key;
      reader.readMessage(value,BasicTypes_pb.Key.deserializeBinaryFromReader);
      msg.setNewrealmadminkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.FileCreateTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.FileCreateTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.FileCreateTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.FileCreateTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpirationtime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      Timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getKeys();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.KeyList.serializeBinaryToWriter
    );
  }
  f = message.getContents_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getShardid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      BasicTypes_pb.ShardID.serializeBinaryToWriter
    );
  }
  f = message.getRealmid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      BasicTypes_pb.RealmID.serializeBinaryToWriter
    );
  }
  f = message.getNewrealmadminkey();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      BasicTypes_pb.Key.serializeBinaryToWriter
    );
  }
};


/**
 * optional Timestamp expirationTime = 2;
 * @return {?proto.proto.Timestamp}
 */
proto.proto.FileCreateTransactionBody.prototype.getExpirationtime = function() {
  return /** @type{?proto.proto.Timestamp} */ (
    jspb.Message.getWrapperField(this, Timestamp_pb.Timestamp, 2));
};


/** @param {?proto.proto.Timestamp|undefined} value */
proto.proto.FileCreateTransactionBody.prototype.setExpirationtime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.FileCreateTransactionBody.prototype.clearExpirationtime = function() {
  this.setExpirationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileCreateTransactionBody.prototype.hasExpirationtime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional KeyList keys = 3;
 * @return {?proto.proto.KeyList}
 */
proto.proto.FileCreateTransactionBody.prototype.getKeys = function() {
  return /** @type{?proto.proto.KeyList} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.KeyList, 3));
};


/** @param {?proto.proto.KeyList|undefined} value */
proto.proto.FileCreateTransactionBody.prototype.setKeys = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.FileCreateTransactionBody.prototype.clearKeys = function() {
  this.setKeys(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileCreateTransactionBody.prototype.hasKeys = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes contents = 4;
 * @return {string}
 */
proto.proto.FileCreateTransactionBody.prototype.getContents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes contents = 4;
 * This is a type-conversion wrapper around `getContents()`
 * @return {string}
 */
proto.proto.FileCreateTransactionBody.prototype.getContents_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContents()));
};


/**
 * optional bytes contents = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContents()`
 * @return {!Uint8Array}
 */
proto.proto.FileCreateTransactionBody.prototype.getContents_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContents()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.FileCreateTransactionBody.prototype.setContents = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional ShardID shardID = 5;
 * @return {?proto.proto.ShardID}
 */
proto.proto.FileCreateTransactionBody.prototype.getShardid = function() {
  return /** @type{?proto.proto.ShardID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ShardID, 5));
};


/** @param {?proto.proto.ShardID|undefined} value */
proto.proto.FileCreateTransactionBody.prototype.setShardid = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.FileCreateTransactionBody.prototype.clearShardid = function() {
  this.setShardid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileCreateTransactionBody.prototype.hasShardid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RealmID realmID = 6;
 * @return {?proto.proto.RealmID}
 */
proto.proto.FileCreateTransactionBody.prototype.getRealmid = function() {
  return /** @type{?proto.proto.RealmID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.RealmID, 6));
};


/** @param {?proto.proto.RealmID|undefined} value */
proto.proto.FileCreateTransactionBody.prototype.setRealmid = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.FileCreateTransactionBody.prototype.clearRealmid = function() {
  this.setRealmid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileCreateTransactionBody.prototype.hasRealmid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Key newRealmAdminKey = 7;
 * @return {?proto.proto.Key}
 */
proto.proto.FileCreateTransactionBody.prototype.getNewrealmadminkey = function() {
  return /** @type{?proto.proto.Key} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.Key, 7));
};


/** @param {?proto.proto.Key|undefined} value */
proto.proto.FileCreateTransactionBody.prototype.setNewrealmadminkey = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.FileCreateTransactionBody.prototype.clearNewrealmadminkey = function() {
  this.setNewrealmadminkey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.FileCreateTransactionBody.prototype.hasNewrealmadminkey = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.proto);
