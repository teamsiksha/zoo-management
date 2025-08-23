import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import AdminPortal from "./pages/AdminPortal";
import NotFound from "./pages/NotFound";
import TicketBooking from "./components/custom/TicketBooking";
import MyTickets from "./components/custom/MyTickets";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/portal/admin" element={<AdminPortal />} />
      <Route path="/book-ticket" element={<TicketBooking />} />
      <Route path="/my-tickets" element={<MyTickets />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default App
