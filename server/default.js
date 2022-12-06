import { products } from "./contants/data.js"
import Product from "./model/product-schema.js"
// import { getProducts } from "./controller/product-controller.js";
const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;