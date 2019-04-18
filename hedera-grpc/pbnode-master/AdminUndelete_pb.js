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
goog.exportSymbol('proto.proto.AdminUndeleteTransactionBody', null, global);

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
proto.proto.AdminUndeleteTransactionBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.AdminUndeleteTransactionBody.oneofGroups_);
};
goog.inherits(proto.proto.AdminUndeleteTransactionBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.AdminUndeleteTransactionBody.displayName = 'proto.proto.AdminUndeleteTransactionBody';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.AdminUndeleteTransactionBody.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.proto.AdminUndeleteTransactionBody.IdCase = {
  ID_NOT_SET: 0,
  FILEID: 1,
  CONTRACTID: 2
};

/**
 * @return {proto.proto.AdminUndeleteTransactionBody.IdCase}
 */
proto.proto.AdminUndeleteTransactionBody.prototype.getIdCase = function() {
  return /** @type {proto.proto.AdminUndeleteTransactionBody.IdCase} */(jspb.Message.computeOneofCase(this, proto.proto.AdminUndeleteTransactionBody.oneofGroups_[0]));
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
proto.proto.AdminUndeleteTransactionBody.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AdminUndeleteTransactionBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AdminUndeleteTransactionBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AdminUndeleteTransactionBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileid: (f = msg.getFileid()) && BasicTypes_pb.FileID.toObject(includeInstance, f),
    contractid: (f = msg.getContractid()) && BasicTypes_pb.ContractID.toObject(includeInstance, f)
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
 * @return {!proto.proto.AdminUndeleteTransactionBody}
 */
proto.proto.AdminUndeleteTransactionBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AdminUndeleteTransactionBody;
  return proto.proto.AdminUndeleteTransactionBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AdminUndeleteTransactionBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AdminUndeleteTransactionBody}
 */
proto.proto.AdminUndeleteTransactionBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new BasicTypes_pb.FileID;
      reader.readMessage(value,BasicTypes_pb.FileID.deserializeBinaryFromReader);
      msg.setFileid(value);
      break;
    case 2:
      var value = new BasicTypes_pb.ContractID;
      reader.readMessage(value,BasicTypes_pb.ContractID.deserializeBinaryFromReader);
      msg.setContractid(value);
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
proto.proto.AdminUndeleteTransactionBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AdminUndeleteTransactionBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AdminUndeleteTransactionBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AdminUndeleteTransactionBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      BasicTypes_pb.FileID.serializeBinaryToWriter
    );
  }
  f = message.getContractid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.ContractID.serializeBinaryToWriter
    );
  }
};


/**
 * optional FileID fileID = 1;
 * @return {?proto.proto.FileID}
 */
proto.proto.AdminUndeleteTransactionBody.prototype.getFileid = function() {
  return /** @type{?proto.proto.FileID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.FileID, 1));
};


/** @param {?proto.proto.FileID|undefined} value */
proto.proto.AdminUndeleteTransactionBody.prototype.setFileid = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.proto.AdminUndeleteTransactionBody.oneofGroups_[0], value);
};


proto.proto.AdminUndeleteTransactionBody.prototype.clearFileid = function() {
  this.setFileid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AdminUndeleteTransactionBody.prototype.hasFileid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContractID contractID = 2;
 * @return {?proto.proto.ContractID}
 */
proto.proto.AdminUndeleteTransactionBody.prototype.getContractid = function() {
  return /** @type{?proto.proto.ContractID} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.ContractID, 2));
};


/** @param {?proto.proto.ContractID|undefined} value */
proto.proto.AdminUndeleteTransactionBody.prototype.setContractid = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.proto.AdminUndeleteTransactionBody.oneofGroups_[0], value);
};


proto.proto.AdminUndeleteTransactionBody.prototype.clearContractid = function() {
  this.setContractid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.AdminUndeleteTransactionBody.prototype.hasContractid = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.proto);
