const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/usersController')

router.get('/users', usersController.list)
router.post('/users', usersController.create)


module.exports = router