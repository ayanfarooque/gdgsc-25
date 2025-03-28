const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    teacher: { 
        type:mongoose.Schema.Types.ObjectId,
         ref: "Teacher",
         required: true
        },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment"
    }]
})

module.exports = mongoose.model("Classroom", classroomSchema);