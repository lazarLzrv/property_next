import mongoose from "mongoose";
let connected = false;
const dataBaseUrl = process.env.MONGODB_URI;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if (connected) {
        console.log("Already connected.");
        return;
    }

    try {
        await mongoose.connect(dataBaseUrl);
        connected = true;
    } catch (error) {
        console.error("Error: ", error);
    }
};

export default connectDB;
