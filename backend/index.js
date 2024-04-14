const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes")
require('dotenv').config();

const app = express();
const port = 2000;

app.use(cors({
    origin: "*"
}))

const mongodbURL = process.env.MONGO_DB_URL
mongoose.connect(mongodbURL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongodb connection error"));

db.once("open", ()=>{
    console.log("Connected to database successfully !")
})

app.use(express.json());
app.use(productRouter);
app.use(cartRouter);

app.listen (port, '0.0.0.0', ()=>{
    console.log(`Server running on ${port}`);
})
