const express = require("express")
const eventController = require('../controllers/eventController.js')
const {authStudent} = require('../middleware/authStudent.js')
const {authTeacher} = require('../middleware/authTeacher.js')

router.get("/", authStudent, eventController.getEvents);

router.post("/create", authTeacher, eventController.createEvent);

router.put("/:eventId", authTeacher, eventController.updateEvent);

router.delete("/:eventId", authTeacher, eventController.deleteEvent);

module.exports = router;