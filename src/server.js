require('dotenv').config()
const express = require('express');
require('./db/dbConnection');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(cors())
const port = process.env.PORT || 3000 ;
app.use(express.json());


app.use(express.static(__dirname + '/paymentview'));


app.use(cartRoutes);
app.use(productsRoutes);
app.use(userRoutes);


app.listen(port,()=>{

console.log(' Server run on port ' + port);

});
