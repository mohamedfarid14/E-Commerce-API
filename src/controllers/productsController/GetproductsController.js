const Product = require('../../models/productModel');

exports.getProduct = async (req,res)=>{


    const id = req.params.id;

    try {
        
      const targetProduct = await Product.findById({ _id: id });
    
      if(!targetProduct){
    
        return res.status(404).json({
    
            error : ' product not found '
    
        });
    
      };
      
        res.status(202).json({
    
            request: " get a specific product ",
            status: "Success",
            Product: targetProduct   
        });
    
    } catch (error) {
      
      res.status(406).json({
    
       error:" Something wrong Can't find the product "
    
      });
    
    }


};



exports.getallProduct = async (req,res)=>{

  try {
      
    const Products = await Product.find({});
  

      res.status(202).json({
  
          request: " get all products ",
          Products 
      });
  
  } catch (error) {
    
    res.status(406).json({
  
     error:" Something wrong Can't find the products "
  
    });
  
  }


};