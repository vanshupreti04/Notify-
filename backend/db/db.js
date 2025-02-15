import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connect;
