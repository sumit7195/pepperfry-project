require("dotenv").config();
const express = require('express')
const app = express();
const {body,validationResult}=require('express-validator')
const userController=require('./controllers/user.controller')
const productController=require('./controllers/product.controller')
const {registerController,loginController}=require('./controllers/auth.controller')
app.use(express.json())

const path = require("path");

const bodyParser = require("body-parser");
console.log(__dirname)

app.set('view engine','ejs')
app.use(express.static(__dirname, + "./public" ));


//app.use(express.static("./public"));

const checkAuthenticated = require("./middlewares/googleAuth");
 
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(bodyParser.urlencoded({extended:false}))

app.post('/register',
body('name')
.notEmpty()
.withMessage('Name cannot be empty!'),
body('email')
.isEmail()
    .withMessage('Not  a valid Email!'),
    body('password')
    .notEmpty()
    .withMessage('Password cannot be empty!'), 
   body('mobile')
   .isLength({ min: 10, max:10 })  ,registerController)

app.post('/login',
body('email')
.isEmail()
    .withMessage('Not  a valid Email!'),
    body('password')
    .notEmpty()
    .withMessage('Password cannot be empty!'),
  loginController)


app.use('/users', userController);
app.use('/products', productController);

app.get('/register', (req,res)=>{
  res.render('register');
  res.redirect('login');
})

app.get('/product_landing', (req,res)=>{
  res.render('product_landing')
})

app.get('/cart', (req,res)=>{
  res.render('cart')
})

const User = require("./models/user.model");



app.get('/register', async (req,res,next)=>{
    res.render('register' );
    
  
})


app.get('/payment', async (req,res,next)=>{
  res.render('payment' );
  

})



app.get('/login',async (req,res)=>{
  res.render('login');
  res.redirect("/");
})





app.get('/', async (req,res)=>{

   let username = JSON.stringify({name: 'profile'})
    res.render('home', {'user': username});
})

module.exports = app;
const start = require("./server");
const { kMaxLength } = require("buffer");
start();