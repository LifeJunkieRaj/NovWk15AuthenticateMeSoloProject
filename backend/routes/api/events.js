const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Event, Group } = require("../../db/models/");

router.get("/", asyncHandler(async (req, res)=>{

    const eventsData= await Event.findAll({limit:10, include:Group});// may need includes
    res.send(eventsData);
    
}))

module.exports =router;