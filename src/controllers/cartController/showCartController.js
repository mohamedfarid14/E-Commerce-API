const Cart = require('../../models/cartModel');

exports.ShowCart = async (req,res)=>{

 const id = req.user._id;

try {

 const UserCart = await Cart.findOne({owner:id});
 
if (UserCart){

//const Cart = await UserCart.populate('Products.ProductID').execPopulate();

const allproducts = UserCart.Products.map((productObj)=>{

const productdetails = {};

 productdetails.product = productObj.ProductID ;
 productdetails.totalpriceproduct = productObj.Totalpriceproduct;
 productdetails.quantity = productObj.quantity ;
 

 return productdetails


});

let totalprice = 0 

for (let i = 0 ; i<allproducts.length;i++){

totalprice+=allproducts[i].totalpriceproduct;

}

UserCart.Totalprice = totalprice;

await UserCart.save();

res.status(201).json({UserCart})


 } else {

    return res.status(201).json({

      message:" No items in Cart to Show "
      
    })

 }


} catch (error) {
    
   console.log(error.message)

res.status(500).json({
   error : ' something went wrong '
})


}

};

