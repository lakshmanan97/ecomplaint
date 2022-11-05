const express = require('express')

const router = express.Router()
const {
  checkAuthenticated,
  checkNotAuthenticated
} = require('../middleware/auth')

const HomePageController = require('../controllers/HomePageController')
const UserController = require('../controllers/UserController')

// get index page
router.get('/', checkNotAuthenticated, HomePageController.homePage)

router.get('/compage', checkAuthenticated, HomePageController.comPage)

router.get(
  '/createaccount',
  checkNotAuthenticated,
  UserController.CreateAccount
)

router.get(
  '/filterDashboard',
  checkAuthenticated,
  HomePageController.filterDashboard
)

module.exports = router
