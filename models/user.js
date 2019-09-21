const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    minlength: 4,
    maxlength: 100,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 100,
    required: true
  },
  date: { 
    type: Date, default: Date.now
   },
  // set these foreign keys up as arrays so they can handle multiple objects
  streams: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stream"
    }
  ],
  messages: [{
      type: Schema.Types.ObjectId,
      ref: "Message"
    }
  ]
});
userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema);

module.exports = User;
