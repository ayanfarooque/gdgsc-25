const express = require('express')
const router = express.Router()

const {createResources,getresourcesbyID,updateresources,deleteresources,getAllResources} = require('../controllers/resourceController.js')

router.post('/createResources',createResources)

router.get('/resources',getAllResources)
router.get('/resources/:resourcesId',getresourcesbyID)
router.put('/resources/:resourcesId',updateresources)
router.delete('/resources/:resourcesId',deleteresources)

module.exports = router;