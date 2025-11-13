const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
    {
        "user" : {type : String},
        "message" : {type : String},
        "video": { type: String, default: null },
        "likes" : {type : Number, default: 0},
        "likedBy": {type : [String], default: []},
        "comments": [
            {
                "username": { type: String, required: true },
                "comment": { type: String, required: true },
                "createdAt" : {type: Date, default: Date.now},
                "_id": { type: mongoose.Schema.Types.ObjectId, auto: true }
            }
        ],
        "createdAt" : {type: Date, default: Date.now},
    }
)


module.exports = mongoose.model("usermessage", messageSchema);