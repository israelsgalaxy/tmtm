const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  // i am not saving password because i piggyback on google sso, moodle or cuportal for login
  displayName: String,
  createdAt: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);