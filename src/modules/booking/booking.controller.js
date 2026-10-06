import { Router } from "express";
import { createBooking } from "./booking.service.js";

const router = Router();

router.post("/create-booking", async (req, res) => {
    
        let data = await createBooking(req.body);
        
        res.json(data);
});


router.get("/my-bookings/:userId", async (req, res) => {
    let { userId } = req.params;
    let data = await GetMyBookings(userId);
    res.json(data);
});


router.post("/update-booking/:bookingId", async (req, res) => {
    let { bookingId } = req.params;
    let data = await updateBooking(bookingId, req.body);
    res.json(data);
});


router.delete("/delete-booking/:bookingId", async (req, res) => {
    let { bookingId } = req.params;
    let data = await deleteBooking(bookingId);
    res.json(data);
}); 

router.post("/update-booking-status/:bookingId", async (req, res) => {
    let { bookingId } = req.params;
    let { status } = req.body;
    let data = await updateBookingStatus(bookingId, status);
    res.json(data);
});


export default router;
