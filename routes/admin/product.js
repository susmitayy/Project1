const { Router } = require('express')
const express = require('express')
const route = express.Router()


//Controller
const productController = require('./../../controller/admin/product')

//GET
route.get('/products', productController.getProducts)
route.get('/add-product', productController.getAddProduct)
route.get('/edit-product/:id', productController.getEditProduct)
route.get('/delete-product/:id', productController.getDeleteProduct)

//POST
route.post('/add-product', productController.postAddProduct)
route.post('/edit-product/:id', productController.postEditProduct)

module.exports = route