const express = require('express')

const router = express.Router()
const {
  checkNotAuthenticated,
  checkAuthenticated
} = require('../middleware/auth')
const FeedbackController = require('../controllers/FeedbackController')

// view feedback Page
router.get('/view', checkAuthenticated, FeedbackController.viewFeedbackPage)

// Check feedback from user Id
router.post('/view', checkAuthenticated, FeedbackController.checkFeedback)

module.exports = router
