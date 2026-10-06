import mongoose from "mongoose";
import { BookingModel } from "../../database/bookingmodel.js";
import { UserModel } from "../../database/usermodel.js";

export const createBooking = async (body) => {
    let { title, bookingDate, userId } = body || {};

    let userData = await UserModel.findById(userId);
    if (!userData) {
        return { error: "User not found" };
    }
    let booking = await BookingModel.create({
        userId,
        title,
        bookingDate
    });
    return booking; 
};


export const GetMyBookings = async (userId) => {
    let userData = await UserModel.findById(userId);
    if (!userData) {
        return { error: "User not found" };
    }
    let bookings = await BookingModel.find({ userId });
    return bookings;
};


export const updateBooking = async (bookingId, body) => {
    let bookingData = await BookingModel.findById(bookingId); 
    if (!bookingData) {
        return { error: "Booking not found" };
    }
    let updatedBooking = await BookingModel.findByIdAndUpdate(bookingId, body, { new: true });
    return updatedBooking;
}      


export const deleteBooking = async (bookingId) => {
    let bookingData = await BookingModel.findById(bookingId);
    if (!bookingData) {
        return { error: "Booking not found" };
    }
    await BookingModel.findByIdAndDelete(bookingId);
    return { message: "Booking deleted successfully" };
};

export const updateBookingStatus = async (bookingId, status) => {
    let bookingData = await BookingModel.findById(bookingId);
    if (!bookingData) {
        return { error: "Booking not found" };
    }
    bookingData.status = status;
    await bookingData.save();
    return bookingData;
};