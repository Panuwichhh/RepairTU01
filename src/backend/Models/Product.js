import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    detail:{
        type:String
    },
    location: {
        type:String
    },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
