import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import AdminPortal from "./pages/AdminPortal";
import NotFound from "./pages/NotFound";
import TicketBooking from "./components/custom/TicketBooking";
import MyTickets from "./components/custom/MyTickets";
import CreateAnimal from "./pages/CreateAnimal";
import AnimalDashboard from "./pages/AnimalDashboard";
import AnimalUpdate from "./pages/AnimalUpdate";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/portal/admin" element={<AdminPortal />} />
      <Route path="/book-ticket" element={<TicketBooking />} />
      <Route path="/my-tickets" element={<MyTickets />} />
      <Route path="/create/animal" element={<CreateAnimal />} />
      <Route  path="/dashboard/animals" element={<AnimalDashboard />} />
      <Route path="/update/animal" element={<AnimalUpdate/>} />
      {/* /map */}
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default App
