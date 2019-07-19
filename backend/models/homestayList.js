const mongoose = require('mongoose');

const homeStaySchema =  new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  image: String,
  location: String,
  num_bedrooms: Number,
  num_bathrooms: Number,
  maximum_guests: Number
});

const homeStay = mongoose.model('homeStay',homeStaySchema,'data');
module.exports = homeStay;