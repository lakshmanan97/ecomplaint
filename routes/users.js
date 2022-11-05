const express = require('express')

const router = express.Router()
const {
  checkAuthenticated,
  checkNotAuthenticated
} = require('../middleware/auth')
const UserController = require('../controllers/UserController')

const AdminController = require('../controllers/AdminController')

// login form
router.get('/login', checkNotAuthenticated, UserController.loginPage)

router.post('/register', checkNotAuthenticated, AdminController.registerUser)

// Login submit
router.post('/login', checkNotAuthenticated, UserController.loginUser)

//  logout User
router.get('/logout', checkAuthenticated, UserController.logOutUser)

module.exports = router
