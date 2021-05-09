const express = require('express');
require('./db/dbConnection');
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes');


const app = express();
const port = process.env.PORT || 3000 ;
app.use(express.json());

app.use(cartRoutes);
app.use(productsRoutes);
app.use(userRoutes);




app.listen(port,()=>{

console.log(' Express Server run on port ' + port);

});
