const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();
const path= require('path');

const fs= require("fs");

const images= __dirname+"/images/";
router.get("/:name", asyncHandler(async (req, res)=>{
    let filePath= images+req.params.name;
    res.sendFile(path.resolve(filePath));
    
}))

module.exports =router;