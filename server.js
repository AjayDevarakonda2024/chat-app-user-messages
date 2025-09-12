const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())

const conn = require("./config/db")
conn()

const routes = require("./routes/messageRoutes")
app.use("/message", routes)

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Server listening to port no.8000")
})

