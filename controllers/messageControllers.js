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

exports.getMessagesById = async (req, res)=>{
    try{
        const msg = await usermessage.find({"_id": req.params.id})
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

exports.updateMessage = async (req, res) => {
    try{
        let updated = await usermessage.findOneAndUpdate({"_id": req.params.id}, req.body, { new: true, runValidators: true });
        if(!updated){
            res.status(400).json({"message" : "message not updated !!"})
        }
        else{
            res.status(200).json({"message" : "message updated successfully !!"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}