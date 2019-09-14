const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  streams: {
    type: Schema.Types.ObjectId,
    ref: "Stream"
  },
  messages: {
    type: Schema.Types.ObjectId,
    ref: "Message"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
