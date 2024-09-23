import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    detail: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
