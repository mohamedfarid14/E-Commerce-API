const Cart = require('../../models/cartModel');
//const Product= require('../../models/productModel');

exports.ShowCart = async (req,res)=>{

 const id = req.user._id;

try {

 const UserCart = await Cart.findOne({owner:id});
 
if (UserCart){

const Cart = await UserCart.populate('Products.ProductID').execPopulate();

const allproducts = Cart.Products.map((productObj)=>{

const productdetails = {};

 productdetails.product = productObj.ProductID ;
 productdetails.totalpriceproducts = productObj.Totalpriceproducts ;
 productdetails.quantity = productObj.quantity ;

 return productdetails


});

res.status(201).json({

 allproducts

})


 } else {

    return res.status(201).json({

      message:" No items in Cart to Show "
    })

 }


} catch (error) {
    

res.status(500).json({
   error : ' something went wrong '
})


}

};

