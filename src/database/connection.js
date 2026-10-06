import mongoose from "mongoose"
import { env } from "../config/env.service.js";

export const databaseConnection = () => {

 return mongoose.connect(env.databaseURI, { serverSelectionTimeoutMS: 5000 }).then(() => {
    console.log("Database connected successfully");
  }).catch((error) => {
    throw error;
  });

}
