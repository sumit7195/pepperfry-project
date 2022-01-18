const Product = require('../models/product.model')
const router = require('express').Router();
const authenticate=require('../middlewares/authenticate')
const authorise = require('../middlewares/authorise')

//get all the products
router.get('',authenticate,authorise('seeProducts'), async (req, res) => {
  try {
    let products = 0;
    if (req.majorRole == 'seller') {
      products = await Product.find({brand:req.loggedUser._id}).populate(
        {
          path: 'brand',
          select: { name: 1 }
        }
      );
    } else { 
      products = await Product.find().populate(
        {
          path: 'brand',
          select: { name: 1 }
        }
      );

    }
    res.status(201).send(products)
  } catch (e) {
    res.status(500).send(e)
  }
})

//create product
router.post('', authenticate,authorise('postProducts'),async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router;
