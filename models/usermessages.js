const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
    {
        "user" : {type : String},
        "message" : {type : String}
    }
)


module.exports = mongoose.model("usermessage", messageSchema);