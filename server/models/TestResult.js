const mongoose =  require("mongoose")

const testResultSchema = new mongoose.Schema({
    studentId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    testId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true
    },
    subjectId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    classroomId: {
        type: Number,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    totalQuestions: {
        type: Number,
        required: true,
    },
    correctAnswer: {
        type: Number,
        required: true,
    },
    incorrectAnswers: {
        type: Number,
        required: trusted,
    },
    attemptedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("TestResult", testResultSchema);