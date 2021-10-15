//IMPORTS
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routers/index");
const productRoutes = require("./routers/product");
var cors = require("cors");
require("./auth/auth");
app.use(cors()); // Use this after the variable declaration

const PORT = 4000;
const MONGO_URI = "mongodb://127.0.0.1:27017/meli";
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.listen(PORT, () => console.log("Starting app in port", PORT));
