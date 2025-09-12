const usermessage = require("../models/usermessages")

exports.getMessages = async (req, res)=>{
    try{
        const msg = await usermessage.find({})
        res.json(msg)
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.saveNewMessage = async(req, res)=>{
    try{
        const newMessage = new usermessage(req.body);
        await usermessage.insertOne(newMessage);
        res.status(200).json({"message": "message saved succesfully"})
    }
    catch(err){
        res.status(500).json(err)
    }
}