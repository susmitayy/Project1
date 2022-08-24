const express = require('express')
const router = express.Router()

//Controller file access
const indexController = require('./../controller/index')


//Get Request
router.get('/', indexController.getIndex )


module.exports = router