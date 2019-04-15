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
goog.exportSymbol('proto.proto.CryptoDeleteClaimTransactionBody', null, global);
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
proto.proto.CryptoDeleteClaimTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.CryptoDeleteClaimTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CryptoDeleteClaimTransactionBody.displayName = 'proto.proto.CryptoDeleteClaimTransactionBody';
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
proto.proto.CryptoDeleteClaimTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CryptoDeleteClaimTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CryptoDeleteClaimTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoDeleteClaimTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountidtodeletefrom: (f = msg.getAccountidtodeletefrom()) && BasicTypes_pb.AccountID.toObject(includeInstance, f),
    hashtodelete: msg.getHashtodelete_asB64()
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
 * @return {!proto.proto.CryptoDeleteClaimTransactionBody}
 */
proto.proto.CryptoDeleteClaimTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CryptoDeleteClaimTransactionBody;
  return proto.proto.CryptoDeleteClaimTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CryptoDeleteClaimTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CryptoDeleteClaimTransactionBody}
 */
proto.proto.CryptoDeleteClaimTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new BasicTypes_pb.AccountID;
      reader.readMessage(value,BasicTypes_pb.AccountID.deserializeBinaryFromReader);
      msg.setAccountidtodeletefrom(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHashtodelete(value);
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
proto.proto.CryptoDeleteClaimTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CryptoDeleteClaimTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CryptoDeleteClaimTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CryptoDeleteClaimTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountidtodeletefrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getHashtodelete_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional AccountID accountIDToDeleteFrom = 2;
 * @return {?proto.proto.AccountID}
 */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.getAccountidtodeletefrom = function() {
  return /** @type{?proto.proto.AccountID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.AccountID, 2));
};


/** @param {?proto.proto.AccountID|undefined} value */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.setAccountidtodeletefrom = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.clearAccountidtodeletefrom = function() {
  this.setAccountidtodeletefrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.hasAccountidtodeletefrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes hashToDelete = 3;
 * @return {!(string|Uint8Array)}
 */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.getHashtodelete = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes hashToDelete = 3;
 * This is a type-conversion wrapper around `getHashtodelete()`
 * @return {string}
 */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.getHashtodelete_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHashtodelete()));
};


/**
 * optional bytes hashToDelete = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHashtodelete()`
 * @return {!Uint8Array}
 */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.getHashtodelete_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHashtodelete()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.CryptoDeleteClaimTransactionBody.prototype.setHashtodelete = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


goog.object.extend(exports, proto.proto);
