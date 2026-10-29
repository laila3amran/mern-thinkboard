
import mongoose from "mongoose";
import { setServers } from "node:dns";

export const connectDB = async () => {
  try {
    setServers(["8.8.8.8", "8.8.4.4"]);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Error Connecting to MONGODB", error);
    process.exit(1); // it means Exit with failure and if i had exit(0) which means success 
  }
};
