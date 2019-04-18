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
goog.exportSymbol('proto.proto.ContractCallTransactionBody', null, global);

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
proto.proto.ContractCallTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ContractCallTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ContractCallTransactionBody.displayName = 'proto.proto.ContractCallTransactionBody';
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
proto.proto.ContractCallTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ContractCallTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ContractCallTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCallTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f),
    gas: jspb.Message.getFieldWithDefault(msg, 2, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    functionparameters: msg.getFunctionparameters_asB64()
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
 * @return {!proto.proto.ContractCallTransactionBody}
 */
proto.proto.ContractCallTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ContractCallTransactionBody;
  return proto.proto.ContractCallTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ContractCallTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ContractCallTransactionBody}
 */
proto.proto.ContractCallTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGas(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFunctionparameters(value);
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
proto.proto.ContractCallTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ContractCallTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ContractCallTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ContractCallTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
  f = message.getGas();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFunctionparameters_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional ContractID contractID = 1;
 * @return {?proto.proto.ContractID}
 */
proto.proto.ContractCallTransactionBody.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 1));
};


/** @param {?proto.proto.ContractID|undefined} value */
proto.proto.ContractCallTransactionBody.prototype.setContractid = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ContractCallTransactionBody.prototype.clearContractid = function() {
  this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ContractCallTransactionBody.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 gas = 2;
 * @return {number}
 */
proto.proto.ContractCallTransactionBody.prototype.getGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ContractCallTransactionBody.prototype.setGas = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 amount = 3;
 * @return {number}
 */
proto.proto.ContractCallTransactionBody.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ContractCallTransactionBody.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes functionParameters = 4;
 * @return {!(string|Uint8Array)}
 */
proto.proto.ContractCallTransactionBody.prototype.getFunctionparameters = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes functionParameters = 4;
 * This is a type-conversion wrapper around `getFunctionparameters()`
 * @return {string}
 */
proto.proto.ContractCallTransactionBody.prototype.getFunctionparameters_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFunctionparameters()));
};


/**
 * optional bytes functionParameters = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFunctionparameters()`
 * @return {!Uint8Array}
 */
proto.proto.ContractCallTransactionBody.prototype.getFunctionparameters_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFunctionparameters()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.ContractCallTransactionBody.prototype.setFunctionparameters = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


goog.object.extend(exports, proto.proto);
