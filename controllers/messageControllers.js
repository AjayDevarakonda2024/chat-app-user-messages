const usermessage = require("../models/usermessages")
const multer = require("multer");
const path = require("path");

// ------------------ IMAGE STORAGE CONFIG ------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // store images inside /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // rename file
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});

// ------------------ EXPORT MULTER MIDDLEWARE ------------------
exports.uploadMiddleware = upload.single("post");

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
        const postUrl = req.file ? `/uploads/${req.file.filename}` : "";
        const newMessage = new usermessage({...req.body, post: postUrl});
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

exports.deleteMessage = async (req, res) => {
    try{
        let deleted = await usermessage.findOneAndDelete({"_id": req.params.id});
        if(!deleted){
            res.status(400).json({"message" : "message not deleted !!"})
        }
        else{
            res.status(200).json({"message" : "message deleted successfully !!"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}