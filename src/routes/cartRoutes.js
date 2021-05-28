const express = require('express');
const AuthController = require('../middleware/AuthController');
const addtoCartController = require('../controllers/cartController/addtoCartController');
const GetCartController = require('../controllers/cartController/showCartController');
const deleteController = require('../controllers/cartController/deleteController');

const router = new express.Router;


router.post('/addorder/:id',[AuthController.Auth,AuthController.restictTo('admin','user')],addtoCartController.addproduct);

router.get('/showcart',[AuthController.Auth,AuthController.restictTo('admin','user')],GetCartController.ShowCart);

router.delete('/removeitem/all',[AuthController.Auth,AuthController.restictTo('admin','user')],deleteController.deleteAll);

router.delete('/removeitem/:id',[AuthController.Auth,AuthController.restictTo('admin','user')],deleteController.deleteItem);



module.exports= router;