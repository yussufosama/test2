import express from "express";
import { env } from "./config/env.service.js";
import { databaseConnection } from "./database/connection.js";
import authRouter from "./modules/auth/auth.controller.js";
import bookingRouter from "./modules/booking/booking.controller.js";

const app = express();
app.use(express.json());
app.get("/health-check", (req, res) => {
    res.json({ message: "server is running" });
});



try {
    await databaseConnection();
} catch (error) {
    console.error('Failed to connect to database:', error.message);
    process.exit(1);
}
//app.use("/books",booksRouter )
app.use("/auth", authRouter);
app.use("/booking", bookingRouter);


app.listen(env.port, () => {
    console.log(`server is running on ${env.port}`);
});

//http://localhost:3000/auth/signup
