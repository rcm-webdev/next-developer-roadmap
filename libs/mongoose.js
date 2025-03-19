import mongoose from "mongoose";
import User from "@/models/User";
import Boards from "@/models/Boards";

async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error("Mongoose error" + e.message);
  }
}

export default connectMongo;
