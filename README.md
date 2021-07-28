# E-Commerce
E-commerce RESTful API project made with Express and Mongodb using MVC architecture
# Deploy 
heroku link : https://ff-ecommerce-api.herokuapp.com/
# Documentation
API documentation can be found here [Docs]( https://documenter.getpostman.com/view/15994946/TzXzCc5U)
# Installation
To running the api on your local machine
#

```
clone the repo 
git clone https://github.com/mohamedfarid14/E-Commerce.git

```
```
install dependencies
npm install 

```
```
Setting up your variable environment
create .env file in the root of your project with this keys 
MONGODB_URL= your database connection string 
STRIPE_SECRET_KEY=your publishable key (you can get it by signup in stripe.com then dashboard , its to get right response from checkout endpoint )
PORT=3000
JWT_SECRET=jwtsignature
```
```
run command 
node src/server.js

```

