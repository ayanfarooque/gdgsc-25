const mongoose = require('mongoose')

const notification = new mongoose.Schema({
    notificationId: {type: String},
    notificationTime: {type: Date,default: Date.now()},
    notificationContent: {type: String,required: true},
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    teacherId: {type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
})

module.exports = mongoose.model("Notification", notification);