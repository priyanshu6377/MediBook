import { useEffect, useState } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  // Delete appointment
  const handleDelete = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  // Start editing
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(appointments[index]);
  };

  // Save edited data
  const handleSave = () => {
    const updated = [...appointments];
    updated[editingIndex] = editForm;
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setEditingIndex(null);
  };

  // Handle edit form change
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-8 pt-24 pb-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        My Booked Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-600">
          No appointments booked yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appointments.map((appt, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition"
            >
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={editForm.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    name="doctor"
                    value={editForm.doctor}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="date"
                    name="date"
                    value={editForm.date}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="time"
                    name="time"
                    value={editForm.time}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <textarea
                    name="reason"
                    value={editForm.reason}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {appt.name}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">📧 Email:</span> {appt.email}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">📞 Phone:</span> {appt.phone}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">👨‍⚕️ Doctor:</span>{" "}
                    {appt.doctor}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">📅 Date:</span> {appt.date}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">⏰ Time:</span> {appt.time}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">📝 Reason:</span>{" "}
                    {appt.reason}
                  </p>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
