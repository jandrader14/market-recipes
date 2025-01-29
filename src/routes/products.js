const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Crear un nuevo producto
router.post('/', async (req, res) => {
  const { name, quantity, category, price, description } = req.body;

  const newProduct = new Product({ name, quantity, category, price, description });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;