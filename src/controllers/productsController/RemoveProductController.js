const Product = require('../../models/productModel');

exports.removeProduct = async (req,res)=>{

const id = req.params.id;


try {
    
  const removedProduct = await Product.findByIdAndDelete({ _id: id });

  if(!removedProduct){

    return res.status(404).json({

        error : 'product not found'

    });

  }
    res.status(202).json({

        request: "Delete a product",
        status: "Success"

    });

} catch (error) {
  
  res.status(406).json({

   error: " Something wrong Can't remove the product "

  });

}

};


exports.removeallproducts = async (req,res)=>{

try {
  
  const result =  await Product.deleteMany({});

   if(result.deletedCount===0){

     return res.status(404).json({

      error:' no products to delete '
    });

   };

   res.status(202).json({

    request: "Delete all products ",
    status: "Success"

});


} catch (error) {
  
  res.status(500).json({

    error:" Something wrong Can't remove the product "
  });

}


};


