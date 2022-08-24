//for data source
const Product = require('./../../model/product')

exports.getAddProduct = (req, res) => {
    res.render('admin/add_product')
}

exports.getEditProduct = (req, res) => {
    res.render('admin/edit_product')
}

exports.getProducts = (req, res) => {
    Product.find()
    .then(result => {
        res.render('admin/products', {
            data: result
        })
    })
    .catch(err => {
        console.log(err)
    })  
}

exports.postAddProduct = (req, res) => {
    console.log(req.body)
    Product.create({...req.body})
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
}