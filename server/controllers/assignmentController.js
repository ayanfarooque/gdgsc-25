const Assignment = require('../models/Assignment.js')
const SubmitAssignment = require('../models/SubmitAssignment.js');
const { gradeassignment } = require('../services/mlService.js')


//student can upload assignment in client assignment chat body 

exports.uploadAssignment = async (req,res) => {
    try {
        const {studentid,subjectid,teacherid,assignmentId} = req.body;
        const file = req.file.path;

        const aigrade = await gradeassignment(file);

        const assignment = new Assignment({
            assignmentId,
            studentid,
            subjectid,
            teacherid,
            fileUrl: file,
            aiScore: aigrade,
            status: "Pending"
        });

        await assignment.save();

        res.status(201).json({success: true, assignment})
    } catch (error) {
        console.log('error occured during uploading the assignment',error.message);
        res.status(500).json({success:false,message: "error in uploading assignments"})
    }
}

exports.getpreviousassignments = async (req, res) => {
    try {
        const { studentid } = req.params;
        const assignments = await SubmitAssignment.find({ studentId: studentid })
            .sort({ createdAt: -1 })
            .populate("assignmentId", "title dueDate");

        res.status(200).json({ success: true, assignments });
    } catch (error) {
        console.error("Error fetching previous assignments:", error.message);
        res.status(500).json({ success: false, message: "Error fetching assignments" });
    }
};

exports.getsingleassignment = async (req, res) => {
    try {
        const { assignmentId } = req.params;
        const assignment = await SubmitAssignment.findById(assignmentId).populate("assignmentId");

        if (!assignment) {
            return res.status(404).json({ success: false, message: "Assignment not found" });
        }

        res.status(200).json({ success: true, assignment });
    } catch (error) {
        console.error("Error fetching assignment:", error.message);
        res.status(500).json({ success: false, message: "Error fetching assignment" });
    }
};