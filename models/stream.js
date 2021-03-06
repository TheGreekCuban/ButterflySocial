const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const streamSchema = new Schema({
  streamName: {
    type: String,
    required: true,
    minlength: 4,
    unique: true
  },
  streamDescription: {
    type: String,
    required: true,
    minlength: 4,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  isSubscribed: {
    type: Boolean,
    default: false
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }]
});

const Stream = mongoose.model("Stream", streamSchema);

module.exports = Stream;
