# Test2

Node.js, Express, and MongoDB API for users and bookings.

## Run locally

1. Install Node.js and start MongoDB.
2. Run `npm install`.
3. Copy `.env.example` to `.env.dev` and adjust the settings.
4. Run `npm run start:dev`.

## Routes

- `GET /health-check`
- `POST /auth/signup`
- `POST /auth/signin`
- `POST /booking/create-booking`

Signup accepts `userName`, `email`, `password`, and `confirmPass`.
Signin accepts `email` and `password`.
Booking creation accepts `userId`, `title`, and `bookingDate`.

Signin checks credentials but does not create an authentication token or session.
Booking creation validates the supplied user ID; authentication is not implemented yet.
