const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  supplier: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true  
  },
  product_location: {
    type: String,
    required: true  
  }
}, 
{
  timestamps: true
}
); 

productsSchema.index({ title: "text", description: "text", supplier: "text", price: "text", product_location: "text" });

module.exports = mongoose.model('Products', productsSchema)