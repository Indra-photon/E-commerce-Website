const CartModel = require('../models/cartModel')

exports.createCart = async (req, res) =>{              //Function to create a product in the database
    try{     
    const{title, price, quantity} = req.body;
    let newCart = new CartModel ({
        title: title,
        price: price,
        quantity: quantity
    })
    newCart = await newCart.save(); // save the product in database
    res.status(201).json(newCart);

    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.allCart = async(req,res) =>{                  // Fetching data from database
    try{
       const carts = await CartModel.find({});
       res.status(200).json(carts);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.deleteCart = async(req,res) =>{                   // delete the database of a product
    try{
        //await CartModel.findByIdAndDelete(req.params.id);
        await CartModel.deleteMany({});
        res.status(200).json({message: "cart deleted successfully!"});

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.deleteCartsingleitem = async(req,res) =>{                   // delete the database of a product
    try{
        await CartModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Product deleted successfully!"});

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}