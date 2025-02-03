const express = require('express');
const router = express.Router()
const {getTestScores} = require ('../controllers/testResultController');

router.get('/test-scores/:studentId',getTestScores)

module.exports = router;