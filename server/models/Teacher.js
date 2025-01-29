const teacherSchema = new mongoose.Schema({
    teacherId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String },
    dob: { type: Date, required: true },
    subjects: [{
        subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
        subjectName: { type: String }
    }],
    students: [{
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        studyHours: { type: Number, default: 0 },
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
    }]
}, { timestamps: true });

module.exports = mongoose.model("Teacher", teacherSchema);
