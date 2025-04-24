import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`MongoDB connection error: ${err}`);
        });

        await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (err) {
        console.error(`Failed to connect to MongoDB: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
