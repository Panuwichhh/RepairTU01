import express from 'express';
import Product from '../Models/Product.js';

const productrouter = express.Router();


productrouter.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// API POST สำหรับสร้างผลิตภัณฑ์ใหม่
productrouter.post('/upload', async (req, res) => {
    console.log(req.body)
    try {
        const { details,issue , location } = req.body;
        const newProduct = new Product({ details, issue , location });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error('Error saving product:', err);
        res.status(400).json({ error: err.message });
    }
});

export default productrouter;
