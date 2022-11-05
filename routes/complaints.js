const express = require('express')

const router = express.Router()
const {
  checkNotAuthenticated,
  checkAuthenticated
} = require('../middleware/auth')
const ComplaintController = require('../controllers/ComplaintController')

// Add new complaint by users

//get complaint page
router.get('/complaints/view', ComplaintController.viewComplaint)

router.post('/complaints/add', ComplaintController.addComplaint)

module.exports = router
