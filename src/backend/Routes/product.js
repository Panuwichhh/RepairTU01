import express from 'express';
import Product from '../Models/Product.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// API POST สำหรับสร้างผลิตภัณฑ์ใหม่
router.post('/add', async (req, res) => {
    console.log(req.body)
    try {
        const { detail, location } = req.body;
        const newProduct = new Product({ detail, location });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error saving product:', err);
        res.status(400).json({ error: err.message });
    }
});

export default router;
