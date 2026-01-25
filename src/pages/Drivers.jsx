import {drivers} from "../data/drivers";
import {teams} from "../data/teams";

export default function Driver(){
   return (
    <div className="p-4 min-h-screen bg-cover bg-center relative"
    style={{
        backgroundImage:"url(https://images.pexels.com/photos/29276537/pexels-photo-29276537.jpeg)"
    }}
    >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-6 text-white text-center">F1 Drivers</h1>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6">
                {drivers.map((driver) => {
                    const team = teams.find((t) => t.id === driver.teamId);

                    return(
                        <li
                        key={driver.id}
                        className="border rounded-md p-4 shadow-md hover:shadow-xl transition bg-black/80 text-white">
                            {
                                <img 
                                src={driver.photo}
                                alt={driver.name}
                                className="w-full h-60 object-cover rounded-md mb-3"/>
                            }
                            <h1 className="font-bold text-black text-center flex justify-center text-white">{driver.name} </h1>
                            <p>
                                <strong>Team:</strong>{" "}
                                <span className="font-bold" style={{color:team?.color}}>{team?.teamName} </span>
                            </p>

                            <p>
                                <strong>Number:</strong>{driver.number}
                            </p>
                            <p>
                                <strong>Nationality</strong>{driver.nationality}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
   )
}