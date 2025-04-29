import express from 'express';
import { addProduct, getAllProducts, getProductById, removeProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

productRouter.post('/add', upload.fields([{name:'image1', maxCount:1},{name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]) ,addProduct); // Add a new product
productRouter.get('/list', getAllProducts); // Get all products
productRouter.get('/:id', getProductById); // Get a single product by ID
productRouter.delete('/:id', removeProduct); // Remove a product by ID  

export default productRouter;
