const express = require('express')
const router = express.Router()

const {createNews,getResource,updateResources,deleteResources,getAllNews} = require('../controllers/newsController')

router.post('/create-news',createNews)

router.get('/news',getAllNews)
router.get('/news/:newsId',getnewsbyID)
router.put('/news/:newsId',updateNews)
router.delete('/news/:newsId',deleteNews)

module.exports = router;