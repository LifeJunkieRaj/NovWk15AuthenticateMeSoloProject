// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter= require("./events.js");
const groupsRouter= require("./groups.js");
const imageRouter= require("./images.js");

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use("/events", eventsRouter);
router.use("/groups", groupsRouter);
router.use("/images", imageRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


module.exports = router;