const _ = require('lodash')
const { Complaint, validateComplaint } = require('../models/complaint')

/**
 * @route POST /complaints/add
 * @description add complaint by user
 * @type RequestHandler
 */
exports.viewComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.find()

    res.render('complaints/add.ejs', {
      complaint
    })
  } catch (err) {
    console.log(err)
  }
}

exports.addComplaint = async (req, res) => {
  const { citizenship, description } = req.body
  const { error } = validateComplaint(req.body)
  if (error) {
    res.render('index.ejs', {
      errors: error.details[0].message,
      citizenship,
      description
    })
  }

  try {
    const complaint = new Complaint(
      _.pick(req.body, ['citizenship', 'category', 'description'])
    )
    const newComplaint = await complaint.save()
    await req.flash(
      'success_msg',
      `Complaint sent succesfully ! Copy the Reference ID below: ${newComplaint._id}`
    )

    res.redirect('/compage')
  } catch (err) {
    console.log(err)
  }
}
