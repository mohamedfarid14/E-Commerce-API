const User = require('../../models/userModel');
const validator = require('validator');

exports.Signuphandler = async (req, res) => {

const  user = new User(req.body);

    try {

        await user.save();

        // generate the authintication token
        const token = await user.generateAuthToken();

        res.status(202).json({
           
           User: user,
           token

        });

    } catch (error) {
    
  const { name, email, password } = req.body;

    if(!name||!email||!password){

       return res.status(406).json({
          
        error:' Un Valid Sign up ',
        description:'Please fill the required fields '
     
         });
     };

     if(password.length < 7 || password.length > 15 || password.includes('password')){

      return  res.status(406).send({
      
         error:' unvalid sign up ',
         description:'Please enter a valid password > 7 and < 15 char and dose not contain(password) word'
 
        });
     };
     
     if(!validator.isEmail(email)){

      return res.status(406).json({
     
        error:' unvalid sign up ',
        description:'Please enter a valid email'

       });
    };

    const userExists = await User.findOne({email});

     if(userExists){
 
       return res.status(406).json({
      
         error:' unvalid sign up ',
         description:' email address already exist'
 
        });
     };
   
     if(name!=String){

      return res.status(406).json({
     
         error:' Un Valid Sign up ',
         description:'Please enter a valid name'
 
        });
    };

    

   }

};
