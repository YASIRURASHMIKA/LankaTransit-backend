import mongoose from "mongoose";

const connectDB = async () => {
    console.log("Connecting to MongoDB...");

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("MongoDB connected successfully");
        console.log(`MongoDB host: ${connection.connection.host}`);

    } catch (error) {
        console.error("MongoDB connection failed!");
        console.error(error);
    }
};

export default connectDB;