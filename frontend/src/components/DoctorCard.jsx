export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{doctor.name}</h3>
      <p className="text-gray-500">{doctor.specialization}</p>
      <p className="text-sm text-gray-400 mt-1">{doctor.experience}</p>

      {/* Rating Stars */}
      <div className="flex justify-center text-yellow-400 mt-2 mb-4">
        {"⭐".repeat(doctor.rating)}{"☆".repeat(5 - doctor.rating)}
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Book Appointment
      </button>
    </div>
  );
}
