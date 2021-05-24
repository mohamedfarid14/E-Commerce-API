const { deleteOne } = require('../../models/cartModel');
const Cart = require('../../models/cartModel');
const Product= require('../../models/productModel');

exports.deleteAll = async (req,res) => {

    const id = req.user._id;

try {
    
    const UserCart = await Cart.findOne({owner:id});
   
    if (UserCart){

        await Cart.findOneAndDelete({owner:id});
        
        return  res.status(200).json({

        message : " All products successfully Removed "

        });

    } else {

        
        res.status(404).json({

            message:" your Cart is empty "
            
            });

    }
    

} catch (error) {
    
res.status(404).json({

message:" Something went wrong "

});

}

    
};


exports.deleteItem = async (req,res) => {


    const id = req.user._id;

    const ProductID = req.params.id

 

    try {
        
        const UserCart = await Cart.findOne({owner:id});

        if (UserCart){ 

           const cart = await UserCart.populate('Products.ProductID').execPopulate();
            
           const ids = cart.Products.map((prodObj)=>{

             return prodObj.ProductID._id

           });

         if (ids.includes(ProductID)===false){

            return res.status(404).json({

                message:" Product already deleted  "
            })
         }
           const allproducts = cart.Products.filter((productObj)=>{
                    
              if ( ProductID != productObj.ProductID._id)

              return productObj

            }
                
            );

            await Cart.findOneAndUpdate({owner:id}, { $set: { Products: allproducts } });

            return  res.status(200).json({ message:" Your Product Successfully deleted " });
    
        } else {
    
            
          return res.status(404).json({
    
                message:" your Cart is empty "
                
                });
    
        }
        
    
    } catch (error) {
        
    res.status(404).json({
    
    message:" Something wenrong "
    
    });
    
    };
    
        
    };
