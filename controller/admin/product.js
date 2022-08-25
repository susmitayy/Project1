//for data source
const Product = require('./../../model/product')

exports.getAddProduct = (req, res) => {
    res.render('admin/add_product')
}

exports.getEditProduct = (req, res) => {
    console.log(req.params.id)
    Product.findById(req.params.id)
    .then(result => {
        res.render('admin/edit_product', {
            data: result
        })
    })
    .catch(err => {

    })
    
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
       res.redirect('/')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getDeleteProduct = (req, res) => { 
    Product.findByIdAndDelete(req.params.id)
    .then(result => {
        res.redirect('/admin/products')
    })
    .catch(err => {
        console.log(err)
    })
}

exports.postEditProduct = (req, res) => {
  
    Product.findByIdAndUpdate(req.params.id, {...req.body})
    .then(result => {
        res.redirect('/admin/products')
    })
    .catch(err => {
        console.log(err)
    })
}