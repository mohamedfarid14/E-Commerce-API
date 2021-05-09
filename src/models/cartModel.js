const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
   
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
    },
    
    Products: [{
        ProductID: {type: mongoose.Schema.Types.ObjectId,required:true,ref: 'Product'},
        quantity: {type: Number, min: [1, 'Quantity can not be less then 1']},
        Totalpriceproducts: {type: Number, required:true,default: 0}
    }]
},{
    timestamps: true
});


const Cart = mongoose.model('Cart',CartSchema);

module.exports = Cart;



