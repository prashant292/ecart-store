import mongoose from "mongoose";

const product_schema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const products = mongoose.model('product',product_schema);
export default products;