const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signin =async (req,res)=>{

    try{
            const {username,email,password,phone,location} =req.body;
            const user = await UserModel.findOne({email});
            if(user)
            {
                return res.status(409)
                    .json({message:'user is already exist,you can login',success:false});
            }
            const userModel = new UserModel({username,email,password,phone,location });
            userModel.password = await bcrypt.hash(password,10);
            await userModel.save();
            res.status(201)
                .json({
                    message: "sigup sucessful",
                    success: true
                })
    }
    catch(err){
        res.status(500)
        .json({
            message: err,
            success: true
        })
    }
}

const login =async (req,res)=>{
    try{
            const {email,password} =req.body;
            const user = await UserModel.findOne({email});
            const Errms ='Auth Failed email or password is wrong';
            if(!user)
            {
                return res.status(403)
                    .json({message: Errms,success:false});
            }
            const isPassEqual = await bcrypt.compare(password,user.password);
            if(!isPassEqual)
            {
                return res.status(403)
                .json({message: Errms,success:false});
            }
//creating of jwt token//
            const jwtToken = jwt.sign
            ({email:user.email,_id: user._id},
                process.env.JWT_SECRET,
                {expiresIn:'24h'}
            )


            res.status(200)
                .json({
                    message: "Login  sucessful",
                    success: true,
                    jwtToken,
                    email,
                    username : user.username
                })
    }
    catch(err){
        res.status(500)
        .json({
            message: err,
            sucess: true
        })
    }
}

    module.exports =
    {
        signin,
        login

    }