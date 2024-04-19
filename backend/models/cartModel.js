const mongoose = require('mongoose')


const cartSchema = mongoose.Schema({
    title: {type: String, required: true},
    price: {type: String, required: true},
    quantity: {type: Number, required: true}

})

const CartModel = mongoose.model("Cart", cartSchema)

module.exports = CartModel;