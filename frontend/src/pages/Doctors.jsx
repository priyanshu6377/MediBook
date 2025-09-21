import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react"; // rating ke liye

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rakesh Sharma",
      specialization: "Cardiologist",
      image: "https://img.icons8.com/color/96/000000/doctor-male.png",
      experience: "10+ years",
      rating: 4,
    },
    {
      id: 2,
      name: "Dr. Priya Singh",
      specialization: "Dermatologist",
      image: "https://img.icons8.com/color/96/000000/doctor-female.png",
      experience: "7+ years",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Aman Verma",
      specialization: "Neurologist",
      image: "https://img.icons8.com/color/96/000000/doctor-male.png",
      experience: "12+ years",
      rating: 4,
    },
  ];

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">
        👨‍⚕️ Our Expert Doctors
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Meet highly experienced and certified doctors. Book your consultation with just one click.
      </p>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="🔍 Search doctor by name or specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 border rounded-full shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-200"
              />
              <h2 className="text-xl font-bold text-gray-800">{doc.name}</h2>
              <p className="text-sm text-blue-600 font-semibold mb-2">
                {doc.specialization}
              </p>
              <p className="text-gray-500 mb-2">🩺 {doc.experience}</p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < doc.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Book Button */}
              <button
                onClick={() =>
                  navigate(`/appointment?doctor=${encodeURIComponent(doc.name)}`)
                }
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition"
              >
                Book Appointment
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            ❌ No doctors found.
          </p>
        )}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-12 rounded-2xl shadow-lg max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose MediBook?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <img
              src="https://img.icons8.com/color/96/verified-badge.png"
              alt="Verified"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">✅ Verified Doctors</h3>
            <p className="text-gray-500">
              All doctors are certified and trusted for quality healthcare.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <img
              src="https://img.icons8.com/color/96/treatment-plan.png"
              alt="Booking"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">📅 Easy Booking</h3>
            <p className="text-gray-500">
              Schedule your appointments within seconds anytime.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center hover:shadow-md transition">
            <img
              src="https://img.icons8.com/color/96/headset.png"
              alt="Support"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">📞 24/7 Support</h3>
            <p className="text-gray-500">
              Get instant help from our team whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
