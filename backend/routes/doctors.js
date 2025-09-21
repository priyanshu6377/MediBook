const express = require("express");
const Doctor = require("../models/Doctor");

const router = express.Router();

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Add doctor
router.post("/", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
