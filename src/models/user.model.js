const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema({
  name:{type:String,required:true},
  mobile:{type:Number,required:false},
  email:{type:String,required:true},
  password:{type:String,required:false},
  role:[{type:String, default:"customer", required:false}],
  address:{type:String,required:false},
},
{
  timestamps: true,
  versionKey:false
})

userSchema.pre('save', function (next) {
  this.password = bcryptjs.hashSync(this.password, 8);
  
   if (this.role[0]  == "") this.role = ['customer']; 
  next()      
})
  
userSchema.methods.checkPass = function (bodyPass) {
  return bcryptjs.compareSync(bodyPass.toString(), this.password)
  // console.log('asd')  
}

module.exports = mongoose.model('users', userSchema);