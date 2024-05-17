const UserModel = require("../models/userModel");
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {
    try {
        const saltRounds = 10;
        const { email, password } = req.body;

        bcrypt.hash(password, saltRounds, async(err, hash)=>{
                if (err){
                    console.log(err)
                }
                let newUser = new UserModel({
            
                    email: email,
                    password: hash
                });
                newUser = await newUser.save(); // save the product in the database
                res.status(201).json(newUser);
            });
        // let newUser = new UserModel({
            
        //     email: email,
        //     password: password
        // });
        // newUser = await newUser.save(); // save the product in the database
        // res.status(201).json(newUser);
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
};

exports.findUser = async (req, res) => {
    try{   
        const {email} = req.query;     
        const existingUser = await UserModel.findOne({email: email})
        res.status(200).json(existingUser);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.checkUserpassword = async (req, res) =>{
    try{       
        const {password, hashedPass} = req.body;
        // console.log(password)
        bcrypt.compare(password, hashedPass, (err, data) => {
            //if error than throw error
            if (err) throw err
            if (data) {
                // console.log(data)
                return res.status(200).json(data)
                // return res.status(200).json({ msg: "Login success" })
            } else {
                return res.status(200).json(data)
            }

        })
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}




exports.deleteUser = async(req,res) =>{                   // delete the database of a product
    try{
        //await CartModel.findByIdAndDelete(req.params.id);
        await UserModel.deleteMany({});
        res.status(200).json({message: "user deleted successfully!"});

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

