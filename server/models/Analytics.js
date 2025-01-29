const analyticsSchema = new mongoose.Schema({
    studentId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true 
    },
    studyHours: { 
        type: Number,
        default: 0
    },
    scores: [{
        subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
        subjectName: { type: String },
        marks: [{
            testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
            testMarks: { type: Number }
        }]
    }],
    growthPoints: [{
        subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
        subjectPoints: { type: Number }
    }]
}, { timestamps: true });

module.exports = mongoose.model("Analytics", analyticsSchema);
