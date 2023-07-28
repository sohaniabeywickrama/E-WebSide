import mongoose from "mongoose";

const connectDB = async () => {
  /** connect mongo database */
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb Database ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error in MongoDb ${error}`);
  }
};

export default connectDB;
