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
      
                message : " Product Not Found "
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
          
           Product: foundproduct,
           ProductID:foundproduct._id,
           quantity,
           Totalpriceproduct:foundproduct.price*quantity 

           };
        
           let totalprice = product.Totalpriceproduct

           for (let i = 0 ; i<cart.Products.length;i++){
           
           totalprice+=cart.Products[i].Totalpriceproduct;
           
           }

          cart.Totalprice = totalprice;

          cart.owner = req.user._id;

          cart.Products.push(product);

          cart = await cart.save();
            
        return res.status(201).json({

         message :" Successfully added to Cart "

        });

        } else {
  
      const newCart = await Cart.create({owner});
  
        return res.status(201).send(newCart);

        }

      } catch (error) {

        res.status(500).send("Something went wrong");

      }
    


};
