const Product = require('../models/product.model')
const router = require('express').Router();
//get all the products
router.get('', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).send(products)
  } catch (e) {
    res.status(500).send(e)
  }
})

//create product
router.post('', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router;
