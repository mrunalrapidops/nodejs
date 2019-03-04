const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } =require('../Configuration');
signToken = user => {
 return JWT.sign( {
        iss:'patadia',
        sub:user.id,
        iat : new Date().getTime(),
        exp:new Date().setDate(new Date().getDate()+1)
    },JWT_SECRET);
 
}
module.exports={
    signUp: async (req,res,next) => {
        // Emial & password
       // console.log('signup() call');
       // take data
       const { email,password } = req.value.body;/*OR const email = req.value.body.email;const password = req.value.body.password; */
       //user with same email [Already Exist ]
        const foundUser = await User.findOne({ email });
        if (foundUser){
           return res.status(403).json({ error:'Error account already Exist'});
        }
        
        const newUser = new User({ email,password });
        await newUser.save();
       //responce with token 
        const token = signToken(newUser);

        //res.json({ user :'created' });
        res.status(200).json({token }) 
    },
    signIn: async (req,res,next) => {
        // genrate Token

        //console.log('signin() call');
    },
    secret:async (req,res,next) => {
        console.log('secret call => your secret');
    }
}