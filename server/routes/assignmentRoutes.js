const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignment.controller");
const upload = require("../middleware/multer");

router.post("/upload", upload.single("file"), assignmentController.uploadAssignment);

router.get("/previous/:studentid", assignmentController.getPreviousAssignments);

router.get("/single/:assignmentId", assignmentController.getSingleAssignment);

module.exports = router;
