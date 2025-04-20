import mongoose from "mongoose";

let isConnected = false;

// function to connect the db
export async function connectDB() {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "chatdb",
        });

        isConnected = true;
    } catch (error) {

        console.error("MongoDB connection error:", error);
    }
}