
// checks if logged in user is allowed access as per role

require('dotenv').config()

module.exports = function (action) {
 return (req, res, next) => {
  //admin can view and post both users and products
  //seller can view only his products and post only
  // customer can view only y
  if (req.loggedUser.role.includes('admin')) req.majorRole = 'admin';
  else if (req.loggedUser.role.includes('seller')) req.majorRole = 'seller';
  else if (req.loggedUser.role.includes('customer')) req.majorRole = 'customer';
   if (action == 'postProducts') {
     if (req.majorRole == 'customer') return res.status(403).send('Forbidden Area!');
     else if (req.majorRole == 'seller' && req.body.brand != req.loggedUser._id) return res.status(403).send('Seller id mismatch!');
   }else if (action == 'viewAllUsers') { 
    if (req.majorRole == 'customer'||req.majorRole == 'seller') return res.status(403).send('Only Admin Can Enter!');
   }
    
   next()
  
  }
  
}