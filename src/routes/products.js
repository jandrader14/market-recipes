const express = require('express');
const router = express.Router();
const Product = require('../models/Product');



// Create a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ mensaje: "Producto registrado", producto: newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar producto" });
  }
});

// Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

module.exports = router;