import { calendar } from "../data/calendar";

export default function Calendar() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://wallpapers.com/images/hd/formula-1-desktop-tnmnne2sdk6c6awl.jpg)",
      }}
    >
      <div className="bg-black/70 min-h-screen p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          2026 F1 Race Calendar 🏁
        </h1>

        <div className="max-w-5xl mx-auto space-y-4">
          {calendar.map((event, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur rounded-xl p-5 shadow-lg hover:scale-[1.02] transition"
            >
              {event.type === "TESTING" ? (
                <>
                  <span className="text-sm bg-red-600 text-white px-3 py-1 rounded-full">
                    TESTING
                  </span>
                  <h2 className="text-xl font-bold mt-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600">
                    {event.location} • {event.date}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-500">
                      ROUND {event.round}
                    </span>
                    <span className="text-sm bg-green-600 text-white px-3 py-1 rounded-full">
                      UPCOMING
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mt-2">
                    {event.country}
                  </h2>
                  <p className="text-gray-700">
                    {event.title}
                  </p>
                  <p className="text-gray-500 mt-1">
                    {event.date}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
