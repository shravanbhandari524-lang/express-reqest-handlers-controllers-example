import mongoose from "mongoose";
const connectMonoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongo");
  } catch (err) {
    throw err;
  }
};
export default connectMonoDB;
