const User = require('../../models/userModel')

exports.Userprofile = async (req,res)=>{


try {
    
  const user = await User.findOne({'tokens.token':req.token})

  res.status(202).json({user});


} catch (error) {
    
   res.status(500).json({

    error:' User Not Found '
     
   });
}


};

exports.allUsers = async (req,res)=>{

    try {
        
        users = await User.find({});
    
        res.status(202).json({users});
    
    } catch (error) {
    
        res.status(404).json({
    
    
            error:' Not Found Users '
             
           });
        
    }
    
    
    
    };