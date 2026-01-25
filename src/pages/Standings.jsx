
import { standings } from "../data/standings";
import { drivers } from "../data/drivers";
import { teams } from "../data/teams";

export default function Standings() {
  return (
    <div className="p-6"
    style={{backgroundImage:"url(https://wallpapers.com/images/hd/formula-1-desktop-tnmnne2sdk6c6awl.jpg)"}}>
      <h1 className="text-3xl font-bold text-center mb-6 text-white">F1 Standings</h1>
      <div className="flex flex-col gap-4">
        {standings.map((entry) => {
          // Find driver and team
          const driver = drivers.find((d) => d.id === entry.driverId);
          if (!driver) return null; // skip if driver not found

          const team = teams.find((t) => t.id === driver.teamId);
          if (!team) return null; // skip if team not found

          return (
            <div
              key={entry.driverId}
              className="flex items-center justify-between border-2 rounded-lg p-4 shadow-md bg-black/90 text-white"
              style={{ borderColor: team.color }}
            >
              {/* Position */}
              <div className="w-8 text-lg font-bold">{entry.position}</div>

              {/* Driver Info */}
              <div className="flex items-center gap-4">
                <img
                  src={driver.photo}
                  alt={driver.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-lg" style={{ color: team.color }}>
                    {driver.name}
                  </h2>
                  <p className="text-sm">{team.teamName}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                <div>
                  <p className="text-sm font-semibold">Points</p>
                  <p>{entry.points}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Wins</p>
                  <p>{entry.wins}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
