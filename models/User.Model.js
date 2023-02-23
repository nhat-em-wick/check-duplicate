const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  User_Code:  {
    type: String,
    unique: true
  },
  User_Name: {
    type: String
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  time: {
    type: Date
  }
});

module.exports = mongoose.model('users', userSchema)