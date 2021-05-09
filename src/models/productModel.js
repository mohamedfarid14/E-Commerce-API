const mongoose = require('mongoose');
const validator = require('validator');

const ProductSchema = new mongoose.Schema({

name : {

    type : String,
    required:true,
    trim : true,
    lowercase : true,

},
description : {

    type : String,
    required:true,
    trim : true,
    lowercase : true,

},
price : {

    type:Number,
    required:true
},
stock : {

type:Number,
required:true,
default:1

}



});


const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;  