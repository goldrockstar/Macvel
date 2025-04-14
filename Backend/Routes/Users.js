const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/SendEmail');
const User = require('../model/user');

// ✅ Registration Route
router.post('/register', async (req, res) => {
  const { fullName, lastName, dateofbirth, age, gender, email, phone, address, course } = req.body;
  try {
    if (!course || !['Full Stack Development', 'Data Science', 'Machine Learning'].includes(course)) {
      return res.status(400).json({ error: 'Invalid course selected' });
    }
    console.log("Request Body:", req.body);
    const token = crypto.randomBytes(32).toString('hex');
    console.log("Incoming registration:", req.body);
    const newUser = await User.create({
      fullName,
      lastName,
      dateofbirth,
      age,
      gender,
      email,
      phone,
      address,
      course,
      verificationToken: token,
    });

    const link = `http://localhost:5000/api/verify/${token}`;
    await sendEmail(email, 'Verify Email', `Click to verify: ${link}`);

    // ✅ Send email to owner (you)
    const ownerEmail = 'goldthanges.r@gmail.com'; // 🔒 Owner email
    const ownerMessage = `
      <h2>New User Registered</h2>
      <p><strong>Full Name:</strong> ${fullName} ${lastName}</p>
      <p><strong>DOB:</strong> ${dateofbirth}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Course:</strong> ${course}</p>
    `;
    await sendEmail(ownerEmail, '🎉 New Registration Received', ownerMessage);


    res.status(201).json({ message: 'Registration successful. Check your email to verify.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed.' });
  }
});

// ✅ Email Verification Route
router.get('/verify/:token', async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });
    if (!user) return res.status(400).json({ error: 'Invalid token.' });

    user.isVerified = true;
    user.verificationToken = null;
    await user.save();
    res.status(200).json({ message: 'Email verified successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Email verification failed.' });
  }
});

module.exports = router;
