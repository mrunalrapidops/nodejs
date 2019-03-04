const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./Configuration')
const User = require('./models/user');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
},async(payload,done)=>{
    try{
        //find the user specified in token
         const user = await User.findById(payload.sub);
         if(!user){
             return done(null,false);
         }
        //If user doesn't exists, handle it

        //otherwise, return the user
        done(null,user);
    }
    catch(error){
        done(error,false);
    }
}));