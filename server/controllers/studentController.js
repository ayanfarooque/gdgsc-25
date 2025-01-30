const Student = require('../models/Student')

// exports.addStudent = async (req,res) => {
//     try {
//         const {name,address,dob,grade,subjects} = req.body;

//         const student = new Student({
//             name,
//             address,
//             dob,
//             grade,
//             subjects
//         })

//         res.status(201).json({success:true,student})
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// }

exports.getStudentDetails = async (req,res) => {
    try {
        const {studentId} = req.params;
        const student = await Student.findById(studentId)

        if(!student){
            res.status(404).json({
                success: false,
                message:"Student not Found"
            })
        }
        res.status(200).json({success:true,student})
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}