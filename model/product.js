const mongoose = require('mongoose')

const schema = mongoose.Schema

const productSchema = new schema({
    name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema)