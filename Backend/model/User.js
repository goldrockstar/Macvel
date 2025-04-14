const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, },
  lastName: { type: String,  },
  dateofbirth: { type: Date,  },
  age: { type: Number },
  gender: { type: String,enum: ['male', 'female']},
  email: { type: String, },
  phone: { type: String},
  address : { type: String},
  course : { type: String , enum: ['Full Stack Development', 'Data Science', 'Machine Learning',], },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  verificationToken: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;