const express = require("express")
require("dotenv").config()
const app = express();
const path = require("path");
require("./db/conn")
const port = process.env.PORT || 5000
app.use(require(path.join(__dirname,"/router/auth.js")))
app.use(express.json())



// console.log(path.join(__dirname,"/router/auth.js"))

app.listen(port ,"localhost", ()=>{
    console.log(`port listening at ${port}`)
})
