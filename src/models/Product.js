//Define the structure of the product data that will be stored in the database.

const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);