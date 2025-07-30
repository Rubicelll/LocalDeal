const express = require('express')
const router  = express.Router()
const categoryController = require('../controllers/categoryController')

// fetch all categories
router.get('/', categoryController.getAllCategories)
router.get('/popular', categoryController.getPopularCategories)
router.get('/top', categoryController.getTopCategories)
router.post('/create', categoryController.createCategory)

module.exports = router