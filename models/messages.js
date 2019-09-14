const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    body: {
        type: String,
        required: true,
        minlength: 1
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
