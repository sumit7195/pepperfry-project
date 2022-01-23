require("dotenv").config();


const mongoose = require('mongoose')
module.exports = () => {
  
// console.log(process.env)  

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w1a4o.mongodb.net/pepperfryDB?retryWrites=true&w=majority`)     
  
  

}


//require('dotenv').config() const mongoose = require('mongoose') module.exports = () => { mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w1a4o.mongodb.net/pepperfryDB?retryWrites=true&w=majority`) } 