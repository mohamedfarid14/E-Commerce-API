const Product = require('../../models/productModel');

exports.updateProduct = async (req,res)=>{

    const updates= Object.keys(req.body);
    const allowedupdates = ['name','description','price','stock'];
    const isValidupdate = updates.every((update)=>{

          return allowedupdates.includes(update);

    }); 

    if ( !isValidupdate){

        return res.status(406).json({error:'invalid updates'});
    }


try {
    
    const product = await Product.findOne({_id:req.params.id})
     
     if (!product){

        return res.status(404).json({
            error : " Can't find the product "
        })
     }

    updates.forEach((update)=>product[update]=req.body[update]);

    await product.save();

    res.status(202).json({
        product 
    
    });  



} catch (error) {
    
    res.status(500).json({

        error:" Can't update the product there is something wrong "
    });
    

}




};