const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const Eauthentivation =(req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth) 
    {
        return res.status(401)
            .json({message:"unauthorized , JWT token is Require"});
    }
    try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err)
    {
        return res.status(401)
            .json({message:"unauthorized , JWT token is wrong or expried"});
    }
}

module.exports = Eauthentivation;