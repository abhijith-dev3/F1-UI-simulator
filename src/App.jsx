import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Driver from "./pages/Drivers";
import Teams from "./pages/Teams";
import Calendar from "./pages/Calendar";
import Standings from "./pages/Standings"

export default function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/drivers" element={<Driver />}/>
      <Route path="/teams" element={<Teams />}/>
      <Route path="/calender" element={<Calendar />}/>
      <Route path="/standings" element={<Standings />} />
    </Routes>
    </>
  )
}