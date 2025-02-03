const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    dob: { type: Date, required: true },
    grade: { type: String, required: true },
    growthPoints: { type: Number, default: 0 },
    gaurdianName: {type: String},
    subjects: [{
        subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
        subjectName: { type: String } // Added subject name for better data management
    }],
    isWeakStudent: {type: Boolean,default: false},

    teachers: [{
        teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
        teacherName: {type: String,required: true},
        subjectId: {type:mongoose.Schema.Types.ObjectId,ref: "Subject",required: true}
    }],

    testScores: [{
        subjectId: {type: mongoose.Schema.Types.ObjectId,ref: "Subject",required: true},
        subjectName: {type: String, required:true},
        date: {type: Date,default: Date.now},
        score: {type: Number,required: true},
        total: {type: Number,required: true}
    }],

    badges: [{
        type: String
    }],
}, { timestamps: true });

studentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model("Student", studentSchema);


// const studentSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     address: { type: String },
//     dob: { type: Date, required: true },
//     grade: { type: String, required: true },
//     growthPoints: { type: Number, default: 0 },
//     subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
//     teachers: [{
//         teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
//         teacherName: { type: String },
//         subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" }
//     }]
// }, { timestamps: true });

// module.exports = mongoose.model("Student", studentSchema);
