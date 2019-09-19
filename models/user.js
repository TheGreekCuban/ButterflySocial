const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    minlength: 6,
    maxlength: 15,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 15,
    required: true
  },
  streams: {
    type: Schema.Types.ObjectId,
    ref: "Stream"
  },
  messages: {
    type: Schema.Types.ObjectId,
    ref: "Message"
  }
});
userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema);

module.exports = User;
