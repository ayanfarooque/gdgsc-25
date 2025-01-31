const express = require('express')
const {createSubject,getAllSubjects,getSubjectById,updatesubject,deleteSubject} = require('../models/Subject.js')

const {authTeacher} = require('../middleware/authTeacher.js')

const router = express.Router();

router.post("/create-subject", authTeacher, createSubject);  
router.get("/get-subjects", getAllSubjects);              
router.get("/:id", getSubjectById);           
router.put("/:id", authTeacher, updateSubject); 
router.delete("/:id", authTeacher, deleteSubject); 

module.exports = router;