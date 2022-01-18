const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  offer: { type: Number, required: false },
  images: [{ type: String, required: true }],
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  Dimensions:{ type: String, required: true },
  dims:[{ type: Number, required: true }],
  Weight:{ type: Number, required: true },
  Colour:{ type: String, required: true },
  Warranty:{ type: String, required: true },
  Assembly:{ type: String, required: true },
  Primary_Material:{ type: String, required: true },
  Room_Type:{ type: String, required: true },
  Seating_Height:{ type: Number, required: true },  
})

module.exports = mongoose.model('products', productSchema);
