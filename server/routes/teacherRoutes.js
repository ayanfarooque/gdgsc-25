const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

router.post("/register", teacherController.registerTeacher);
router.get("/:teacherId", teacherController.getTeacherDetails);

module.exports = router;
