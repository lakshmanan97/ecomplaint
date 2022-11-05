const express = require('express')

const router = express.Router()
const {
  checkNotAuthenticated,
  checkAuthenticated
} = require('../middleware/auth')
const statusController = require('../controllers/StatusController')

// view feedback Page
router.get('/view', checkAuthenticated, statusController.viewStatusPage)

router.post('/view', checkAuthenticated, statusController.addFeedback)

module.exports = router
