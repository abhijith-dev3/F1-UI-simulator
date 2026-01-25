import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/c1/56/b3/c156b31318ee7143e42ede239d143178.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/70 flex flex-col items-center justify-center text-center p-6">
        {/* HERO */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          F1 RaceHub 🏎️<span className=" text-white/30 italic text-sm">by abhi</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
          Follow drivers, teams, race calendar and season standings — all in one place.
        </p>

        {/* NAV CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          <HomeCard title="Drivers" link="/drivers" />
          <HomeCard title="Teams" link="/teams" />
          <HomeCard title="Calendar" link="/calender" />
          <HomeCard title="Standings" link="/standings" />
        </div>
      </div>
    </div>
  );
}

function HomeCard({ title, link }) {
  return (
    <Link
      to={link}
      className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg hover:scale-105 transition font-bold text-xl"
    >
      {title}
    </Link>
  );
}
