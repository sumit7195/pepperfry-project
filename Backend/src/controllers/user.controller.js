const User = require('../models/user.model')
const router = require('express').Router();
const { body, validationResult } = require('express-validator')


router.get('', async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('',
body('name')
    .notEmpty()
  .withMessage('Name cannot be empty!'),
body('email')
    .isEmail()
.withMessage('Not  a valid Email!'),
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).send(errors.array())
    }
    // if (req.body.role == undefined) req.body.role = ['customer'];
    // else if (req.body.role.length == 0) req.body.role.push('customer'); 
  try {
    const user = await User.create(req.body);
    res.status(201).send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router;
