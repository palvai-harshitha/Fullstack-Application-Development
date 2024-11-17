const { signin, login } = require('../Controllers/AuthController');
const { signinValidation, LoginValidation } = require('../Middleware/AuthValidation');

//loading the router lib//
const router = require('express').Router();
//creating a simple login post route//
router.post('/login',LoginValidation,login);
//creating a simple signin route//
router.post('/signin',signinValidation,signin);

//exporting all the routers//
module.exports  = router;