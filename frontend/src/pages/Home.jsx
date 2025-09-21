import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen">
      {/* Hero Section */}
      <div className="pt-28 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Book Your Doctor Anytime, Anywhere 🩺
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          MediBook helps you connect with trusted doctors and book your
          appointments instantly. Healthcare made simple, reliable and
          convenient for everyone.
        </p>

        <div className="space-x-4">
          <Link
            to="/doctors"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Find Doctors
          </Link>
          <Link
            to="/appointment"   // ✅ changed here (was /appointments before)
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Book Appointment
          </Link>
        </div>

        <img
          src="https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1661.jpg"
          alt="Doctor Illustration"
          className="mt-12 w-2/3 md:w-1/3 rounded-xl shadow-lg"
        />
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose MediBook?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">✔ Easy Appointments</h3>
            <p className="text-gray-600">
              Book your doctor in just a few clicks with our hassle-free platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">✔ Trusted Doctors</h3>
            <p className="text-gray-600">
              Connect with experienced and verified healthcare professionals near you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">✔ 24/7 Support</h3>
            <p className="text-gray-600">
              Get medical support anytime, anywhere – day or night.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6">
            <span className="text-4xl">🔍</span>
            <h3 className="text-xl font-semibold mt-4 mb-2">1. Search</h3>
            <p className="text-gray-600">Find doctors by specialization, name, or location.</p>
          </div>
          <div className="p-6">
            <span className="text-4xl">📅</span>
            <h3 className="text-xl font-semibold mt-4 mb-2">2. Book</h3>
            <p className="text-gray-600">Choose a suitable time slot and confirm your booking.</p>
          </div>
          <div className="p-6">
            <span className="text-4xl">💬</span>
            <h3 className="text-xl font-semibold mt-4 mb-2">3. Consult</h3>
            <p className="text-gray-600">Visit the clinic or consult online as per your preference.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Patients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600">
              “Booking an appointment was so simple. I consulted with a specialist within minutes!”
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">- Arvind Singh</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600">
              “MediBook saved me so much time. Highly recommend for busy people like me.”
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">- Manish Kumar</h4>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© 2025 MediBook. All rights reserved.</p>
      </footer>
    </div>
  );
}
