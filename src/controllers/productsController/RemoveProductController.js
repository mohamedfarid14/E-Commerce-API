const Product = require('../../models/productModel');

exports.removeProduct = async (req,res)=>{

const id = req.params.id;


try {
    
  const removedProduct = await Product.findByIdAndDelete({ _id: id });

  if(!removedProduct){

    return res.status(404).json({

        error : 'Product Not Found'

    });

  }
    res.status(202).json({

       message:"Product Successfully Removed "
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

      error:" There is No Products To Delete "
    });

   };

   res.status(202).json({

  message:" All Products Successfully Removed "

});


} catch (error) {
  
  res.status(500).json({

    error:" Something wrong Can't remove the product "
  });

}


};


