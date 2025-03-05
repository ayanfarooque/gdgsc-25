const TestResult = require('../models/TestResult.js')
const Student = require('../models/Student.js')
const Teacher = require('../models/Teacher.js')

exports.getTestScore = async (req,res) => {
    try {
        const { studentId } = req.params; // Ensure studentId is correctly extracted

        if (!studentId) {
            return res.status(400).json({ message: "Student ID is required" });
        }
        const testScores =  await TestResult.find({studentId})
            .populate("studentId", "name studentId class")  
            .populate("subjectId", "subjectName")           
            .populate("testId", "testName")                 
            .sort({ CreatedAt: -1 });                       

            if(!testScores || testScores.length === 0){
                return res.status(404).json({message: "No test scores found"})
            }

            res.status(200).json(testScores);
    } catch (error) {
        console.error("Error fetching test scores:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}