import booking = require("./models/booking")
const express = require('express')
const app = express.app()
app.use(express.json())

let bookings: booking.Booking[] = []

app.post('/bookings', (req, res) => {
    const { courtId, startTime, players} = req.body

    if (courtId < 1 || courtId > 4) {
        return res.status(400).json({error: "Invalid court ID."})
    }

    if (players.length > 4) {
        return res.status(400).json("Court fully booked.")
    }

    const isOccupied = bookings.find(booking => 
        booking.courtId === courtId &&
        booking.startTime === startTime &&
        booking.status !== booking.
    )

    if (isOccupied) return res.status(409).json("Court already booked.")

    const newBooking: booking.Booking = {
        id: `bk-${Date.now()}`,
        courtId,
        startTime,
        players,
        status: 
    }

    bookings.push(newBooking)

    res.status(201).json(newBooking)
})