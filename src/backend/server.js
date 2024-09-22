import express from 'express';
import connectDB from './db.js';

const app = express();
const port = process.env.PORT || 5000;

// เชื่อมต่อกับ MongoDB
connectDB();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
