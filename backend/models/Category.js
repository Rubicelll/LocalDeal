const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
  slug: { type: String, required: true },
  icon: { type: String, required: true, default: 'alert-circle-sharp'}, // icon name available on ionicos package
  additionalDetails: { type: mongoose.Schema.Types.Mixed }, // Object with additional details that we need for products on this category example({color: "String", size: "String", peso: "Number"})
  isTop: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', categorySchema);
