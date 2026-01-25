import {teams} from "../data/teams";

export default function Teams() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-6"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/52/b8/d3/52b8d319b6716b1ae51d7c66285c5bcc.jpg)"
      }}
    >
      <div className="max-w-7xl mx-auto bg-black/70 rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          F1 Teams 2026 🏎️
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div
              key={team.id}
              className="rounded-xl p-6 shadow-lg hover:scale-105 transition"
              style={{backgroundColor:team.color}}
            >
              {/* Team Name */}
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                {team.teamName}
              </h2>

              {/* Car Image */}
              <img
                src={team.carImage}
                alt={`${team.teamName} car`}
                className="w-full h-32 object-contain mb-4"
              />

              {/* Drivers */}
              <div className="text-center">
                {team.drivers.map((driver) => (
                  <p key={driver.name} className="text-white font-medium">
                    {driver.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
