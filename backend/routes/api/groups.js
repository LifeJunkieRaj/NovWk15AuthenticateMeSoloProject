const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();
const model= require("../../db/models");

router.get("/", asyncHandler(async (req, res)=>{

    const groupsData= await model.Group.findAll({limit:10});// may need includes
    res.send(groupsData);
    
}))

module.exports =router;