const { Feedback } = require('../models/feedback')

exports.viewStatusPage = async (req, res) => {
  try {
    res.render('status/status.ejs')
  } catch (err) {
    console.log(err)
  }
}
exports.addFeedback = async (req, res) => {
  try {
    const complaint = new Feedback(req.body)
    const newComplaint = await complaint.save()
    await req.flash('success_msg', `feedback sent succesfully `)

    res.redirect('/compage')
  } catch (err) {
    console.log(err)
  }
}
