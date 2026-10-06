import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, unique: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 6, maxlength: 1024, select: false },
  
}, { timestamps: true });

export const UserModel = mongoose.model("user", userSchema);
