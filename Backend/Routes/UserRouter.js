
const express = require('express');
const router = express.Router();
const { register, verifyEmail } = require('../Routes/Users');

router.post('/register', register);
router.get('/verify/:token', verifyEmail);

module.exports = router;