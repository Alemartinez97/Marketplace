//IMPORTS
const express = require("express");
const app = express();
const productRoutes = require("./routers/product");
var cors = require("cors");
app.use(cors()); // Use this after the variable declaration

const PORT = 4000;
app.use(express.json());
app.use(productRoutes);

module.exports = app;