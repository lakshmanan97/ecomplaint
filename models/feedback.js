const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String
  },
  feedback: {
    type: String,
    minlength: 3,
    maxlength: 5000
  }
})

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports.Feedback = Feedback
