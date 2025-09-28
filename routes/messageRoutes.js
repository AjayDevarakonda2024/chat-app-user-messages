const express = require("express")
const controller = require("../controllers/messageControllers")
const router = express.Router()
router.get("/", controller.getMessages)
router.get("/:id", controller.getMessagesById)
router.post("/", controller.saveNewMessage)
router.put("/:id", controller.updateMessage)
router.delete("/:id", controller.deleteMessage)
module.exports = router;