const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const port = 3000


//Connecting DB
mongoose.connect("mongodb://localhost:27017/Hunchha_Class");

app.set('view engine', 'ejs')
app.set('views', 'view')

// parse requests of content-type - application/json
app.use(express.json());
 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));


//Setting static folder
app.use(express.static(path.join(__dirname, "public")));

//Accessing router file
const indexRouter = require('./routes/index')
const productRouter = require('./routes/admin/product')


//Using routes
app.use(indexRouter)
app.use('/admin', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})