const mongoose = require("mongoose");

const assignmentChatSchema = new mongoose.Schema({
    chatId: { type: String, required: true, unique: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    classroomId: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom", required: true },
    responses: [{
        responseId: { type: String, required: true },
        timeStamp: { type: Date, default: Date.now },
        prompt: { type: String, required: true },
        output: { type: String, required: true },
        fileUrl: { type: String } 
    }],
    aiScore: { type: Number, default: null }, 
    feedback: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("AssignmentChat", assignmentChatSchema);
