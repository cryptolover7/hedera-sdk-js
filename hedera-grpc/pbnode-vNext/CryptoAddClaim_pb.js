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
var Duration_pb = require('./Duration_pb.js');
goog.object.extend(proto, Duration_pb);
goog.exportSymbol('proto.proto.Claim', null, global);
goog.exportSymbol('proto.proto.CryptoAddClaimTransactionBody', null, global);
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
proto.proto.Claim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Claim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Claim.displayName = 'proto.proto.Claim';
}
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
proto.proto.CryptoAddClaimTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CryptoAddClaimTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CryptoAddClaimTransactionBody.displayName = 'proto.proto.CryptoAddClaimTransactionBody';
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
proto.proto.Claim.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Claim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Claim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Claim.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: (f = msg.getAccountid()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    hash: msg.getHash_asB64(),
    keys: (f = msg.getKeys()) && BasicTypes_pb.KeyList.toObject(includeInstance, f),
    claimexpiration: (f = msg.getClaimexpiration()) && Duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.proto.Claim}
 */
proto.proto.Claim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Claim;
  return proto.proto.Claim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Claim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Claim}
 */
proto.proto.Claim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 3:
      var value = new BasicTypes_pb.KeyList;
      reader.readMessage(value,BasicTypes_pb.KeyList.deserializeBinaryFromReader);
      msg.setKeys(value);
      break;
    case 4:
      var value = new Duration_pb.Duration;
      reader.readMessage(value,Duration_pb.Duration.deserializeBinaryFromReader);
      msg.setClaimexpiration(value);
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
proto.proto.Claim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Claim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Claim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Claim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
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
  f = message.getClaimexpiration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      Duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountID accountID = 1;
 * @return {?proto.proto.AccountID}
 */
proto.proto.Claim.prototype.getAccountid = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 1));
};


/** @param {?proto.proto.AccountID|undefined} value */
proto.proto.Claim.prototype.setAccountid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.Claim.prototype.clearAccountid = function() {
  this.setAccountid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Claim.prototype.hasAccountid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.proto.Claim.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes hash = 2;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.proto.Claim.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.proto.Claim.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.Claim.prototype.setHash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional KeyList keys = 3;
 * @return {?proto.proto.KeyList}
 */
proto.proto.Claim.prototype.getKeys = function() {
  return /** @type{?proto.proto.KeyList} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.KeyList, 3));
};


/** @param {?proto.proto.KeyList|undefined} value */
proto.proto.Claim.prototype.setKeys = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.Claim.prototype.clearKeys = function() {
  this.setKeys(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Claim.prototype.hasKeys = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Duration claimExpiration = 4;
 * @return {?proto.proto.Duration}
 */
proto.proto.Claim.prototype.getClaimexpiration = function() {
  return /** @type{?proto.proto.Duration} */ (
    jspb.Message.getWrapperField(this, Duration_pb.Duration, 4));
};


/** @param {?proto.proto.Duration|undefined} value */
proto.proto.Claim.prototype.setClaimexpiration = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.Claim.prototype.clearClaimexpiration = function() {
  this.setClaimexpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Claim.prototype.hasClaimexpiration = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.proto.CryptoAddClaimTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoAddClaimTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoAddClaimTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoAddClaimTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    claim: (f = msg.getClaim()) && proto.proto.Claim.toObject(includeInstance, f)
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
 * @return {!proto.proto.CryptoAddClaimTransactionBody}
 */
proto.proto.CryptoAddClaimTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoAddClaimTransactionBody;
  return proto.proto.CryptoAddClaimTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoAddClaimTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoAddClaimTransactionBody}
 */
proto.proto.CryptoAddClaimTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Claim;
      reader.readMessage(value,proto.proto.Claim.deserializeBinaryFromReader);
      msg.setClaim(value);
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
proto.proto.CryptoAddClaimTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoAddClaimTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoAddClaimTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoAddClaimTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClaim();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Claim.serializeBinaryToWriter
    );
  }
};


/**
 * optional Claim claim = 1;
 * @return {?proto.proto.Claim}
 */
proto.proto.CryptoAddClaimTransactionBody.prototype.getClaim = function() {
  return /** @type{?proto.proto.Claim} */ (
    jspb.Message.getWrapperField(this, proto.proto.Claim, 1));
};


/** @param {?proto.proto.Claim|undefined} value */
proto.proto.CryptoAddClaimTransactionBody.prototype.setClaim = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.CryptoAddClaimTransactionBody.prototype.clearClaim = function() {
  this.setClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoAddClaimTransactionBody.prototype.hasClaim = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.proto);
