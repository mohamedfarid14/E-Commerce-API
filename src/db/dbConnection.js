const mongoose = require('mongoose');

// connect to MongoDB 
try {
    
    mongoose.connect(process.env.MONGODB_URL,{
    
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false

});
    
} catch (error) {
    
    console.log('database error connection ');
}
