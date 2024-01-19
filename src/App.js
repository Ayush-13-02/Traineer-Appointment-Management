import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ScheduleAppointment from "./pages/ScheduleAppointment";
import AppointmentCalender from "./pages/AppointmentCalender";
import AllAppointments from "./pages/AllAppointments";
function App() {

  return (
    <div className="max-w-screen  w-full flex flex-col items-center m-0 p-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<ScheduleAppointment />} />
          <Route path="/calender" element={<AppointmentCalender />} />
          <Route path="/appointments" element={<AllAppointments />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
