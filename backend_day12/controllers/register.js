const User = require('../models/mongo');
const bcrypt = require('bcrypt');
const saltRounds= 10;
const saltRounds=10;
const register = async (req,res) => {
    const {email,password } = req.body;
    try{
        const alreadyExists = await User.findOne({ where: {email}});
        if(alreadyExists){
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password,salt);

     const newUser = new User({ email: email.toLowerCase(), password: hash, fullName: "Swechchha" });
        const SavedUser = await newUser.save();
        res.ststus(201).send(savedUser);
    } catch(err) {
        console.error(err);
        res.status(500).send("something went wrong");
    }

           }
module.exports = register;
