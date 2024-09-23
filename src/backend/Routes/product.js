import express from 'express';
import Product from '../Models/Product.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// API POST สำหรับสร้างผลิตภัณฑ์ใหม่
router.post('/add', async (req, res) => {
    try {
        const { detail, location } = req.body; // ดึงข้อมูลจาก body ของ request
        const newProduct = new Product({ detail, location }); // สร้างผลิตภัณฑ์ใหม่
        await newProduct.save(); // บันทึกลงในฐานข้อมูล
        res.status(201).json(newProduct); // ส่งข้อมูลผลิตภัณฑ์ที่ถูกสร้างกลับไป
    } catch (err) {
        res.status(400).json({ error: err.message }); // ส่งข้อผิดพลาดหากมี
    }
});

export default router;
