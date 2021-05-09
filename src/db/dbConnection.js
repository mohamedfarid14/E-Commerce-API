const mongoose = require('mongoose');

// connect to MongoDB 
try {
    mongoose.connect('mongodb://127.0.0.1:27017/e-commerce-api',{
    
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false

});
    
} catch (error) {
    
    console.log('database error connection ');
}
