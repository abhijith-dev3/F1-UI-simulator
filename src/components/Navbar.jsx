import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-black text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-bold" : "text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/drivers"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-bold" : "text-white"
        }
      >
        Drivers
      </NavLink>

      <NavLink
        to="/teams"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-bold" : "text-white"
        }
      >
        Teams
      </NavLink>

      <NavLink
        to="/calender"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-bold" : "text-white"
        }
      >
        Calender
      </NavLink>

      <NavLink to="/standings"
      className={({isActive}) =>
      isActive? "text-red-500 font-bold" : "text-white"}>Standings</NavLink>

    </nav>
  );
}
