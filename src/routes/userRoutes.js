const express = require('express');
const AuthController = require('../middleware/AuthController');
const SignupController = require('../controllers/userController/signupController');
const LoginController = require('../controllers/userController/loginController');
const logoutController = require('../controllers/userController/logoutController')
const ProfileController = require('../controllers/userController/profileController')
const paymentController = require('../controllers/cartController/paymentController')
const router = new express.Router;

router.post('/signup',SignupController.Signuphandler);

router.post('/login',LoginController.Loginhandler);

router.get('/users/me',[AuthController.Auth,AuthController.restictTo('admin','user')],ProfileController.Userprofile);

router.get('/users/allusers',[AuthController.Auth,AuthController.restictTo('admin')],ProfileController.allUsers);

router.post('/logout',[AuthController.Auth,AuthController.restictTo('admin','user')],logoutController.logout);

router.post('/logoutAll',[AuthController.Auth,AuthController.restictTo('admin','user')],logoutController.logoutall);

router.post('/create-checkout-session/:id',[AuthController.Auth,AuthController.restictTo('user')],paymentController.checkout);


module.exports=router;



