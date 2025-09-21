const express = require("express");
const Appointment = require("../models/Appointment");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Book appointment
router.post("/", auth, async (req, res) => {
  try {
    const { doctor, date } = req.body;
    const appointment = new Appointment({
      doctor,
      patient: req.user,
      date
    });

    await appointment.save();
    res.json(appointment);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Get patient appointments
router.get("/", auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user }).populate("doctor");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
