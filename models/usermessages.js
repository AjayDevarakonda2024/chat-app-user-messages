const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
    {
        "user" : {type : String},
        "message" : {type : String},
        "likes" : {type : Number, default: 0}
    }
)


module.exports = mongoose.model("usermessage", messageSchema);