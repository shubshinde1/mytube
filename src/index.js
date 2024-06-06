import dotenv from "dotenv";
import connectDB from "./db/index.js ";

dotenv.config({ path: "./env" });

connectDB();

// <--this is IFFE(imediate invoke function expression) Function to excute function when index file loaded -->

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("Error: ", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App Is Listening On Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error:", error);
//     throw error;
//   }
// })();
