const express = require("express")
const controller = require("../controllers/messageControllers")
const router = express.Router()
router.get("/", controller.getMessages)
router.post("/", controller.saveNewMessage)
module.exports = router;