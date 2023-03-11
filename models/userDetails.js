const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  email: String, // the only field not coming from the user
  destination: {
    type: [Number],
    default: undefined
  },
  departureDate: Date,
  telegramUserName: String,
  isFlight: Boolean, // i do not create a seperate field for flight time. instead i will superimpose flight time on departure date 
  hasRide: Boolean,
  rideFee: mongoose.Schema.Types.Decimal128 // i think currencies should use decimal type 
})

module.exports = mongoose.model('UserDetails', userDetailsSchema);