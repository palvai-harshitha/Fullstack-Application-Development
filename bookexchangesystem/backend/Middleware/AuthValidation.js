const Joi = require('joi');


//creating server side validation for signin page//
const signinValidation =(req, res, next)=>
{
    const schema = Joi.object({
        username :Joi.string().min(3).max(100).required(),
        email :Joi.string().email().required(),
        password :Joi.string().min(4).max(100).required(),
        phone :Joi.string().min(10).max(12).required(),
        location :Joi.string().min(3).max(500).required(),
    });
    const{error} =schema.validate(req.body);
    if(error)
    {
        return res.status(400)
            .json({message:"Bad Request",error})
    }
    next();
}
const LoginValidation =(req, res, next)=>
    {
        const schema = Joi.object({
            
            email :Joi.string().email().required(),
            password :Joi.string().min(4).max(100).required(),
        });
        const{error} =schema.validate(req.body);
        if(error)
        {
            return res.status(400)
                .json({message:"Bad Request",error})
        }
        next();
    }

    module.exports = {
        signinValidation,
        LoginValidation
    }