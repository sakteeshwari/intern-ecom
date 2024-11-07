// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, // Store the URL to the image in MongoDB
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
