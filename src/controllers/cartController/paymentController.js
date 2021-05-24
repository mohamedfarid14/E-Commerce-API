const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Cart = require('../../models/cartModel')

const DOMAIN = 'http://localhost:3000';

exports.checkout = async (req,res)=>{

    const userid = req.user._id; 
    const cartproductid = req.params.id

   try {
     
 const UserCart = await Cart.findOne({owner:userid});

 const PurchasedProduct = UserCart.Products.find((prodObj)=>{

    const product  = {}

    if (prodObj.ProductID === cartproductid){   
      
      product = prodObj

    }

    return product

})

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: PurchasedProduct.Product.name,
                images: ['https://i.postimg.cc/8kvHVq1L/cart1.jpg'],
              },
              unit_amount: PurchasedProduct.Product.price,
            },
           quantity: PurchasedProduct.quantity,
          },
        ],
        mode: 'payment',
        success_url: `${DOMAIN}/success.html`,
        cancel_url: `${DOMAIN}/cancel.html`,
      });
    
      res.json({ id: session.id });


   } catch (error) {
       

res.status(500).json({

    error : " Something went wrong"
})

   }


}
