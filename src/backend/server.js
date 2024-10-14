import express from 'express';
import connectDB from './db.js';
import productrouter from './Routes/product.js';
const authRoutes = require('./Routes/auth.js');

import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

// เชื่อมต่อกับ MongoDB
connectDB();

app.use(cors());

// ใช้ express.json() เพื่อรับข้อมูล JSON
app.use(express.json());

// ใช้ router สำหรับผลิตภัณฑ์
app.use('/api', productrouter);

// Route สำหรับการ Login และ Register
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});