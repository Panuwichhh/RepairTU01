const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authRoutes = express.Router();

// POST /login
router.post('/login', async (req, res) => {
  const { studentId, password } = req.body;

  try {
    // ตรวจสอบว่า User มีอยู่ในระบบหรือไม่
    const user = await User.findOne({ studentId });
    if (!user) {
      return res.status(404).json({ message: 'ID not found.' });
    }

    // ตรวจสอบรหัสผ่าน
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password incorrect.' });
    }

    // สร้าง JWT Token
    const payload = { userId: user._id, studentId: user.studentId };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);

    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred.' });
  }
});

// POST /register
router.post('/register', async (req, res) => {
  const { password, studentId } = req.body;

  try {
    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // สร้างผู้ใช้ใหม่
    const newUser = new User({
      password: hashedPassword,
      studentId,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred.' });
  }
});

export default authRoutes;
