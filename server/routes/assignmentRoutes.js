const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignmentController.js");
const upload = require("../middleware/multer.js");

router.post("/upload", upload.single("file"), assignmentController.uploadAssignment);

router.get("/previous/:studentid", assignmentController.getpreviousassignments);

router.get("/single/:assignmentId", assignmentController.getsingleassignment);

module.exports = router;
