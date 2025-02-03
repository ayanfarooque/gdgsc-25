const Assignment = require('../models/Assignment.js')
const { gradeassignment } = require('../services/mlService.js')


//student can upload assignment in client assignment chat body 

exports.uploadAssignment = async (req,res) => {
    try {
        const {studentid,subjectid,teacherid} = req.body;
        const file = req.file.path;

        const aigrade = await gradeassignment(file);

        const assignment = new Assignment({
            studentid,
            subjectid,
            teacherid,
            file,
            grade: aigrade
        });

        await assignment.save();

        res.status(201).json({success: true, assignment})
    } catch (error) {
        console.log('error occured during uploading the assignment',error.message);
        res.status(500).json({success:false,message: "error in uploading assignments"})
    }
}

exports.getpreviousassignments = async (req,res) => {
    try {
        const {studentid} = req.params;
        const assigments = await assignment.find({studentid}).sort({uploadedAt: -1});
        res.status(200).json({success: true,assigments})
    } catch (error) {
        console.log('error in getting all previous assingments',error.message);
        res.status(500).json({success:false,message: "error occured in getting all previous assignments"})
    }
}

exports.getsingleassignment = async(req,res) => {
    try {
        const {assigmentId} = req.params;
        const assignment = await assignment.findById(assigmentId)

        if(!assignment){
            return res.status(404).json({success:false,message: "assignment not found"})
        }

        res.status(200).json({success: true,assignment})
    } catch (error) {
        console.log('error in getting  assingment',error.message);
        res.status(500).json({success:false,message: "error occured in getting assignment"})
    }
}