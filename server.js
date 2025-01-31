const express = require("express");
const conectionDB = require("./config/db");
const productosRoutes = require("./routes/products");
require("dotenv").config();

const app = express();
conectionDB();

app.use(express.json()); // Permite recibir JSON en las peticiones
app.use("/api/productos", productosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
