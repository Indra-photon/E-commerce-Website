// Data modelling of the product 
// import mongoose from 'mongoose';

const mongoose = require('mongoose');

//Creating the scheme for each model for product
const productSchema = mongoose.Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    imgURL: {type: String, required: true}
})

/*const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
});*/

const ProductModel = mongoose.model("Product", productSchema); //Creating the model from schema

/*const UserModel = mongoose.model("User", userSchema);*/

module.exports = ProductModel;
/*module.exports = CartModel;*/
/*module.exports = UserModel;*/

