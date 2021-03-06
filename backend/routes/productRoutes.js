// First we import express then define the express router.   
import express from 'express'
const router = express.Router()

// all npm packages have to imported to file you want to use it in
import asyncHandler from 'express-async-handler'

// Product Model
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public 

router.get(
  '/', 
  asyncHandler(async (req,res) => {
  const products = await Product.find({})
  
  res.json(products)

}))

// @desc Fetch single product
// @route GET /api/product:id
// @access Public 

router.get(
  '/:id', 
  asyncHandler(async (req,res) => {
  const product = await Product.findById(req.params.id)
  if(product){
    res.json(product)
  }else {
    res.status(404).json({message: 'Product not found'})
  }
}))

export default router
