const mongoose = require('mongoose')

const assignassginment = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
    },
    classroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classroom",
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    attachments: [{
        type: String
    }]
},{ timestamps: true })

module.exports = mongoose.model("Assignment", assignassginment);