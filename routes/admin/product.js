const { Router } = require('express')
const express = require('express')
const route = express.Router()


//Controller
const productController = require('./../../controller/admin/product')

//GET
route.get('/products', productController.getProducts)
route.get('/add-product', productController.getAddProduct)
route.get('/edit-product', productController.getEditProduct)

//POST
route.post('/add-product', productController.postAddProduct)

module.exports = route