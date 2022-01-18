const User = require('../models/user.model')
const router = require('express').Router();

router.get('', async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router;
