const express = require("express")
const controller = require("../controllers/messageControllers")
const router = express.Router()
router.get("/", controller.getMessages)
router.post("/", controller.saveNewMessage)
router.put("/:id", controller.updateMessage)
module.exports = router;