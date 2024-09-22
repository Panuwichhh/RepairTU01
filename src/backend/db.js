import mongoose from 'mongoose';

// เชื่อมต่อกับ MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Panu:1150@cluster0.ej325.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database');
    } catch (err) {
        console.error('Database connection error:', err);
    }
};

export default connectDB; // ใช้ export default แทน module.exports
