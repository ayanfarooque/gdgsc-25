const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/register", studentController.registerStudent);
router.get("/:studentId", studentController.getStudentDetails);

module.exports = router;
