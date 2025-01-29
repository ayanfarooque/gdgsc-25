const testSchema = new mongoose.Schema({
    testId: { type: String, required: true, unique: true },
    subjectName: { type: String, required: true },
    marks: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Test", testSchema);
