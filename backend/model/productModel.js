const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number, 
    default: 0
  },
  discountedPrice: {
    type: Number
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  images: [
    {
      type: String, 
      required: true
    }
  ],
  stock: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
productSchema.pre('save', function (next) {
  if (this.discount > 0) {
    this.discountedPrice = this.price - (this.price * this.discount / 100);
  } else {
    this.discountedPrice = this.price;
  }
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
