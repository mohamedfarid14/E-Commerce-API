const User = require('../../models/userModel');

exports.Loginhandler = async (req,res) =>{

   const {email , password} = req.body;

   if (!email || !password){

      return res.status(406).json({

       error:' the user not found',
       description :' please enter your mail and password '


       });


       };

    try {

       // confirm the user login 
        const  user = await User.findUser(email,password);

       // generate the authintication token 
        const token = await user.generateAuthToken();

        res.status(202).json({
           
        UserLogin: user,
        
        token

       });
        
        
    } catch (error) {
   
      res.status(404).json({
   
          error:' the user not found',
          description :' please enter the correct email and password  '
   
   
          });
   
   
          }

         
        
    };