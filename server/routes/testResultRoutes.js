const express = require("express");
const router = express.Router();
const { getAllTestScores } = require("../controllers/testResultController"); // Ensure this import is correct

if (!getAllTestScores) {
  throw new Error("getTestResults function is not defined or incorrectly imported.");
}

router.get("/test-results", getAllTestScores);

module.exports = router;
