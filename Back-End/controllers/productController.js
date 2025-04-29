import { json } from 'express';
import Product from '../models/productModel.js'; // Correct import for Product model

// Function to add a product to the database
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Check if all images are provided
        if (!req.files || !req.files.image1 || !req.files.image2 || !req.files.image3 || !req.files.image4) {
            return res.status(400).json({ success: false, message: "All images are required" });
        }

        // Assign images from the request files
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        // Filter out undefined values
        const images = [image1, image2, image3, image4].filter((image) => image !== undefined);

        // Upload images to Cloudinary
        let imageUrls = await Promise.all(images.map(async (item) => { 
            let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
            return result.secure_url;
        }));

        // Create product data to save to the database
        const productData = new Product({
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes), // Ensure sizes are parsed correctly
            bestseller: bestseller === "true" ? true : false,
            images: imageUrls,
            date: Date.now()
        });

        // Save product to the database
        await productData.save();

        res.json({ success: true, message: "Product added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function to get all products from the database
const getAllProducts = async (req, res) => {
    try {
        // Retrieve all products
        const products = await Product.find({});

        if (products.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No products found",
                products: []
            });
        }

        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            products
        });

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

// Function to get a single product by id from the database
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // Use Product model
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Function to remove a product from the database
const removeProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id); // Use Product model
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product removed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export { addProduct, getAllProducts, getProductById, removeProduct };
