const express = require('express');
const AuthController = require('../middleware/AuthController');
const AddProductController = require('../controllers/productsController/AddproductsController');
const RemoveProductController = require('../controllers/productsController/RemoveProductController');
const GetproductController = require('../controllers/productsController/GetproductsController')
const UpdateProductController = require('../controllers/productsController/updateproductController')
const router = new express.Router;




router.post('/addproduct',[AuthController.Auth,AuthController.restictTo('admin')],AddProductController.AddProducts);

router.delete('/removeproduct/:id',[AuthController.Auth,AuthController.restictTo('admin')],RemoveProductController.removeProduct);

router.delete('/removeproducts/allproducts',[AuthController.Auth,AuthController.restictTo('admin')],RemoveProductController.removeallproducts);

router.get('/product/:id',[AuthController.Auth,AuthController.restictTo('admin','user')],GetproductController.getProduct);

router.get('/products/allproducts',[AuthController.Auth,AuthController.restictTo('admin','user')],GetproductController.getallProduct);

router.patch('/products/update/:id',[AuthController.Auth,AuthController.restictTo('admin')],UpdateProductController.updateProduct);




module.exports=router;