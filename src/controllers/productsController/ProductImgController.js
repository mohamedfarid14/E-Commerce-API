const Product = require('../../models/productModel')


exports.uploadImage = async (req,res)=>{

    try {

        const prod = await Product.findById({_id: req.params.id})

        prod.img = req.file.buffer;
        
        await prod.save();
         
        res.status(200).json({message:" Product Image Uploaded Successfully "})
        
    } catch (error) {
        
        console.log(error.message)
   
    res.status(500).json({

        message :" Something Went Wrong "
    })


    }

    

}




/*

(error,req,res,next)=>{
    
    res.status(400).send({ error : error.message })
    */