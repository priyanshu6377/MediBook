import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Appointment() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const selectedDoctor = params.get("doctor") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: selectedDoctor,
    date: "",
    time: "",
    reason: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const updatedAppointments = [...existingAppointments, formData];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setSuccess(true);

    setTimeout(() => {
      navigate("/appointments");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl mt-16">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Book an Appointment
        </h1>

        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6 text-center">
            ✅ Appointment booked successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className="w-full p-3 border rounded-lg"
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Rakesh Sharma">Dr. Rakesh Sharma</option>
            <option value="Dr. Priya Singh">Dr. Priya Singh</option>
            <option value="Dr. Aman Verma">Dr. Aman Verma</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="reason"
            placeholder="Describe your problem..."
            value={formData.reason}
            onChange={handleChange}
            required
            rows="3"
            className="w-full p-3 border rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
