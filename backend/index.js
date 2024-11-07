const port=4000;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt=require("jsonwebtoken")
const multer=require("multer")
const path=require("path")


const app = express();
app.use(cors());
app.use(express.json());

// database connection with mongodb
mongoose.connect("mongodb+srv://sakthi:123@cluster0.oic6s.mongodb.net/ecom")

app.get("/",(req,res)=>{
    res.send("Express app is running")
})

// image storage engine
const storage=multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})


// creating upload endpoint for images
app.post("/upload",upload.single("product"),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port,()=>{
    console.log("Server Started....."+port)
})


