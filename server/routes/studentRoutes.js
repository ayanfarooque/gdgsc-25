const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const authController =  require('../controllers/authController')
const {authStudent} = require("../middleware/authStudent")
router.post("/register", authController.studentsSignUp);
router.post("/login", authController.studentLogin);

router.get("/:studentId",authStudent, studentController.getStudentDetails);

module.exports = router;
