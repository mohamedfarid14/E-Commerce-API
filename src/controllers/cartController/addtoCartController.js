const Cart = require('../../models/cartModel');
const Product= require('../../models/productModel');


exports.addproduct = async (req,res)=>{

    const id = req.params.id;
    const {quantity} = req.body;
    const owner = req.user._id;

    try {
      
        let cart = await Cart.findOne({owner});
       
        if (cart) {
         
          // check if product exist in products collection 
        const foundproduct = await Product.findById(id);
       
          if (!foundproduct) {
      
              return res.status(404).json({
      
                  error : ' product not found '
              });
          
          };
          
         const ProductsIds = cart.Products.map((prodObj)=>{

               return prodObj.ProductID
         });
         
         if (ProductsIds.includes(foundproduct._id)){
         
          return res.status(406).json({
      
            message: ' product already exists in your cart  '
        });
    

         };
        
         if (quantity>foundproduct.stock){
 
          return res.status(406).json({
      
            message: ' Sorry there is no allowed pieces from this product , try later   '
        });

         }

         // add new item to cart 
        const product = {

           ProductID:foundproduct._id,
           quantity,
           Totalpriceproducts: foundproduct.price*quantity 

           };
          cart.owner = req.user._id;
          cart.Products.push(product);

          cart = await cart.save();
            
        return res.status(201).json({

          request:" add item to cart ",
          status :" successfully added to Cart "

        });

        } else {
  
      const newCart = await Cart.create({owner});
    
    
        return res.status(201).send(newCart);

        }

      } catch (error) {

        res.status(500).send("Something went wrong");

      }
    


};
