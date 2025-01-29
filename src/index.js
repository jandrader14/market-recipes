const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productsRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});