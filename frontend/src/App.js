import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 
import Doctors from "./pages/Doctors";
import Appointment from "./pages/appointment"; // form wala page
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments"; // booked appointments wala page

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} /> 
        <Route path="/appointments" element={<Appointments />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
