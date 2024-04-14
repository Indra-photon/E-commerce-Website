const CartModel = require("../models/productModel");
const ProductModel = require("../models/productModel");

//Create a product in database

exports.createProduct = async (req, res) =>{              //Function to create a product in the database
    try{     
    const{title, description, price, imgURL} = req.body;
    let newProduct = new ProductModel ({
        title: title,
        description: description,
        price: price,
        imgURL: imgURL
    })
    newProduct = await newProduct.save(); // save the product in database
    res.status(201).json(newProduct);

    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.allProduct = async(req,res) =>{                  // Fetching data from database
    try{
       const products = await ProductModel.find({});
       res.status(200).json(products);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateProduct = async(req,res) =>{                   // update the database of a product
    try{
        const{title, description, price, imgURL} = req.body;
        let updatedProduct = new ProductModel ({
            title: title,
            description: description,
            price: price,
            imgURL: imgURL,
            _id: req.params.id,
        });
        updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, updatedProduct);
        res.status(200).json(updatedProduct);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}


exports.deleteProduct = async(req,res) =>{                   // delete the database of a product
    try{
        await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Product deleted successfully!"});

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.singleProduct = async(req,res) =>{                   // find a product
    try{
        const product = await ProductModel.findById(req.params.id);
        res.status(200).json(product);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

/*exports.createCart = async (req, res) => {
    try {
        const { title, price } = req.body;
        let newCart = new CartModel({
            title: title,
            price: price
        });
        newUser = await newCart.save(); // save the product in the database
        res.status(201).json(newCart);
    } catch (err) {
        res.status(500).json({ message: err.message });
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



/*exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        let newUser = new UserModel({
            name: name,
            email: email
        });
        newUser = await newUser.save(); // save the product in the database
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.allUser = async(req,res) =>{                  // Fetching data from database
    try{
       const users = await UserModel.find({});
       res.status(200).json(users);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateUser = async(req,res) =>{                   // update the database of a user
    try{
        const{name, email} = req.body;
        let updatedUser = new UserModel ({
            name: name,
            email: email,
            _id: req.params.id,
        });
        updatedUser = await UserModel.findByIdAndUpdate(req.params.id, updatedUser);
        res.status(200).json(updatedUser);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}*/