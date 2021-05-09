const Product = require('../../models/productModel');

exports.AddProducts = async (req,res)=>{

const {name,description,price,stock} = req.body;

if (!name||!description||!price||!stock){

    return res.status(406).json({

        error : ' please fill the required field to add product '
    });
}

const product = new Product(req.body);

    try {
      
        await product.save();
    
        res.json({
 
            request:"add product",
            status:"success",
            product:{

                ...product.toObject()

            }
            


        });
    
    
    } catch(error) {

     res.status(500).json({

        error : ' there is something wrong'
     });

    }



};