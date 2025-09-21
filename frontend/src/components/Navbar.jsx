import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MediBook
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/doctors" className="text-gray-700 hover:text-blue-600">
            Doctors
          </Link>
          <Link to="/appointments" className="text-gray-700 hover:text-blue-600">
            Appointments
          </Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
