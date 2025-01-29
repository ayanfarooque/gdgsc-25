const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    dob: { type: Date, required: true },
    grade: { type: String, required: true },
    growthPoints: { type: Number, default: 0 },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    teachers: [{
        teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
        teacherName: { type: String },
        subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" }
    }]
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
