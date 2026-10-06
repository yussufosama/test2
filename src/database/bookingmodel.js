import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
 UserId : String ,
 title: String,
 bookingDate: Date,
status: String,
createdAt: Date

}, { timestamps: true });

export const BookingModel = mongoose.model("booking", bookingSchema);
