const express = require("express")
const router = express.Router()
const notificationController = require('../controllers/notificationController.js')

router.post('/create-notification',notificationController.createNotification)
router.post('/all-notifications',notificationController.getAllNotifications)
router.get('/notification/student/:studentId',notificationController.getNotificationsByStudent)
router.get('/notification/teacher/:teacherId',notificationController.getNotificationsByTeacher)
router.delete('/notificaion/delete/:notificationId',notificationController.deleteNotification)

module.exports = router;