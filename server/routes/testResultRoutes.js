const express = require("express");
const router = express.Router();
const { getTestScore } = require("../controllers/testResultController"); // Ensure this import is correct

if (!getTestScore) {
  throw new Error("getTestResults function is not defined or incorrectly imported.");
}

router.get("/test-results", getTestScore);

module.exports = router;
