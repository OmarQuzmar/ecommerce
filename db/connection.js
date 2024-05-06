import mongoose, { Mongoose } from "mongoose";
const connectDB = async () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("connectDB");
    })
    .catch((err) => {
      console.log(`error to connect db ${err}`);
      console.log("hello");
    });
};
export default connectDB;
