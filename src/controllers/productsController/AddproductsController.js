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
 
            message:"successfully added product ",
            product:{

            ...product.toObject()


            }
            


        });
    
    
    } catch(error) {

        console.log(error.message)
     res.status(500).json({

        error : ' Something Went Wrong '
     });

    }



};