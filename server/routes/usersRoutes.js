var express = require('express')
var router = express.Router()
var usersController = require('../controllers/usersController.js')
const passport = require('passport')

router.get('/', usersController.verify, usersController.list)
router.delete('/:id', usersController.remove)

router.post('/', usersController.register)
router.post('/login', passport.authenticate('login'), usersController.login)

module.exports = router
