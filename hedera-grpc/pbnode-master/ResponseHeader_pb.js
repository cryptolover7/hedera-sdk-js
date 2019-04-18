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

var TransactionResponse_pb = require('./TransactionResponse_pb.js');
goog.object.extend(proto, TransactionResponse_pb);
var QueryHeader_pb = require('./QueryHeader_pb.js');
goog.object.extend(proto, QueryHeader_pb);
var ResponseCode_pb = require('./ResponseCode_pb.js');
goog.object.extend(proto, ResponseCode_pb);
goog.exportSymbol('proto.proto.ResponseHeader', null, global);

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
proto.proto.ResponseHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ResponseHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ResponseHeader.displayName = 'proto.proto.ResponseHeader';
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
proto.proto.ResponseHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ResponseHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ResponseHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ResponseHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodetransactionprecheckcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    responsetype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cost: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stateproof: msg.getStateproof_asB64()
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
 * @return {!proto.proto.ResponseHeader}
 */
proto.proto.ResponseHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ResponseHeader;
  return proto.proto.ResponseHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ResponseHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ResponseHeader}
 */
proto.proto.ResponseHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ResponseCodeEnum} */ (reader.readEnum());
      msg.setNodetransactionprecheckcode(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCost(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStateproof(value);
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
proto.proto.ResponseHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ResponseHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ResponseHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ResponseHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodetransactionprecheckcode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCost();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStateproof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional ResponseCodeEnum nodeTransactionPrecheckCode = 1;
 * @return {!proto.proto.ResponseCodeEnum}
 */
proto.proto.ResponseHeader.prototype.getNodetransactionprecheckcode = function() {
  return /** @type {!proto.proto.ResponseCodeEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.proto.ResponseCodeEnum} value */
proto.proto.ResponseHeader.prototype.setNodetransactionprecheckcode = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ResponseType responseType = 2;
 * @return {!proto.proto.ResponseType}
 */
proto.proto.ResponseHeader.prototype.getResponsetype = function() {
  return /** @type {!proto.proto.ResponseType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.proto.ResponseType} value */
proto.proto.ResponseHeader.prototype.setResponsetype = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 cost = 3;
 * @return {number}
 */
proto.proto.ResponseHeader.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ResponseHeader.prototype.setCost = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes stateProof = 4;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ResponseHeader.prototype.getStateproof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes stateProof = 4;
 * This is a type-conversion wrapper around `getStateproof()`
 * @return {string}
 */
proto.proto.ResponseHeader.prototype.getStateproof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStateproof()));
};


/**
 * optional bytes stateProof = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStateproof()`
 * @return {!Uint8Array}
 */
proto.proto.ResponseHeader.prototype.getStateproof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStateproof()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ResponseHeader.prototype.setStateproof = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


goog.object.extend(exports, proto.proto);
