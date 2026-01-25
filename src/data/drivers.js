// drivers.js
export const drivers = [
  // --- RED BULL RACING ---
  { id: "max", name: "Max Verstappen", teamId: "red-bull", number: 1, nationality: "Dutch", photo: "https://wallpapercave.com/wp/wp12428764.jpg" },
  { id: "isack", name: "Isack Hadjar", teamId: "red-bull", number: 6, nationality: "French", photo: "https://media.gettyimages.com/id/2164020258/photo/spa-belgium-race-winner-isack-hadjar-of-france-and-campos-racing-celebrates-on-the-podium.jpg?s=612x612&w=0&k=20&c=Ss1OuxTgMzdYKjVw6l7Kov1UFUiTSxTtUro4FqolFko=" },

  // --- RACING BULLS ---
  { id: "liam", name: "Liam Lawson", teamId: "racing-bulls", number: 30, nationality: "New Zealander", photo: "https://media.gettyimages.com/id/2206488604/photo/shanghai-china-liam-lawson-of-new-zealand-and-oracle-red-bull-racing-speaks-in-the-media-pen.jpg?s=612x612&w=0&k=20&c=Flyy5C3ywAmEemDeslN1C_oMyrvXZC7nsS35Ej9m6Yo=" },
  { id: "arvid", name: "Arvid Lindblad", teamId: "racing-bulls", number: 15, nationality: "Swedish", photo: "https://media.gettyimages.com/id/2250864781/photo/abu-dhabi-united-arab-emirates-arvid-lindblad-of-great-britain-and-visa-cash-app-racing-bulls.jpg?s=612x612&w=0&k=20&c=xVmjXUKV_nK06YVp_Xf_6DXOBUnmlUK90JXW9xvzH2M=" },

  // --- FERRARI ---
  { id: "charles", name: "Charles Leclerc", teamId: "ferrari", number: 16, nationality: "Monégasque", photo: "https://media.gettyimages.com/id/2169739429/photo/monza-italy-race-winner-charles-leclerc-of-monaco-and-ferrari-celebrates-on-the-podium-during.jpg?s=612x612&w=0&k=20&c=1W_xt0o2T3WMBhoyPyL6Weh3XeuN1TnQ9AXGaLGtQdA=" },
  { id: "lewis", name: "Lewis Hamilton", teamId: "ferrari", number: 44, nationality: "British", photo: "https://media.gettyimages.com/id/2226794707/photo/spa-belgium-lewis-hamilton-of-great-britain-and-scuderia-ferrari-looks-on-in-the-drivers.jpg?s=612x612&w=0&k=20&c=srHBN6ZNSPmcNsW3xfFvqfUwd6PZOFn9nuUbwd7gBOo=" },

  // --- MCLAREN ---
  { id: "lando", name: "Lando Norris", teamId: "mclaren", number: 4, nationality: "British", photo: "https://media.gettyimages.com/id/2250911252/photo/abu-dhabi-united-arab-emirates-lando-norris-of-great-britain-and-mclaren-looks-on-in-the.jpg?s=612x612&w=0&k=20&c=UR7pzjSDf539CTMrxEK7M1wfLmBuG1NF0Go8l4c-ajM=" },
  { id: "oscar", name: "Oscar Piastri", teamId: "mclaren", number: 81, nationality: "Australian", photo: "https://media.gettyimages.com/id/2210083379/photo/bahrain-bahrain-race-winner-oscar-piastri-of-australia-and-mclaren-celebrates-in-parc-ferme.jpg?s=612x612&w=0&k=20&c=eJM-dGu919pxN8Rd8VlOKvICGnpcWVhHnQAjycSWnd4=" },

  // --- MERCEDES ---
  { id: "george", name: "George Russell", teamId: "mercedes", number: 63, nationality: "British", photo: "https://media.gettyimages.com/id/2159947877/photo/spielberg-austria-race-winner-george-russell-of-great-britain-and-mercedes-celebrates-on-the.jpg?s=612x612&w=0&k=20&c=vV2T1Uff43t8J4ljZiP8UlRYMY_4oBKPLDhL7huymE0=" },
  { id: "kimi", name: "Kimi Antonelli", teamId: "mercedes", number: 12, nationality: "Italian", photo: "https://media.gettyimages.com/id/2220297608/photo/montreal-quebec-third-placed-andrea-kimi-antonelli-of-italy-and-mercedes-amg-petronas-f1-team.jpg?s=612x612&w=0&k=20&c=DfdLdRm6RITsQpgHP55L-aASw4o77kfOguYJN-30Ljk=" },

  // --- ASTON MARTIN ---
  { id: "fernando", name: "Fernando Alonso", teamId: "aston-martin", number: 14, nationality: "Spanish", photo: "https://media.gettyimages.com/id/2208729848/photo/suzuka-japan-fernando-alonso-of-spain-and-aston-martin-f1-team-looks-on-prior-to-the-f1-grand.jpg?s=612x612&w=0&k=20&c=bZeTE08EPTQDs7YRjnf9PkJpWeRWWf5xW1p6drTks98=" },
  { id: "lance", name: "Lance Stroll", teamId: "aston-martin", number: 18, nationality: "Canadian", photo: "https://media.gettyimages.com/id/2185843882/photo/las-vegas-nevada-lance-stroll-of-canada-and-aston-martin-f1-team-walks-in-the-paddock-during.jpg?s=612x612&w=0&k=20&c=S_FSrBv6B3tgtxPsS4XPMcrTBZ8nNMu_H64KGf97wTE=" },

  // --- WILLIAMS ---
  { id: "carlos", name: "Carlos Sainz", teamId: "williams", number: 55, nationality: "Spanish", photo: "https://media.gettyimages.com/id/2181405277/photo/mexico-city-mexico-race-winner-carlos-sainz-of-spain-and-ferrari-celebrates-on-the-podium.jpg?s=612x612&w=0&k=20&c=ztiHngwjCPTNr_Ba4vsDq_IW0QKhpjopTb6CpA1OL9I=" },
  { id: "alex", name: "Alexander Albon", teamId: "williams", number: 23, nationality: "Thai", photo: "https://media.gettyimages.com/id/2222234066/photo/spielberg-austria-alexander-albon-of-thailand-and-williams-looks-on-during-previews-ahead-of.jpg?s=612x612&w=0&k=20&c=qO0zzZ30e4ZCgNmnnP2XPtvh9s-qkVV8O-pGQYdElKQ=" },

  // --- ALPINE ---
  { id: "pierre", name: "Pierre Gasly", teamId: "alpine", number: 10, nationality: "French", photo: "https://media.gettyimages.com/id/2159494007/photo/spielberg-austria-pierre-gasly-of-france-and-alpine-f1-walks-in-the-paddock-during-previews.jpg?s=612x612&w=0&k=20&c=HtZ5zTBTj0PCdDxZ2SCbaGqZ8egM7tTaCAuRxkFULWs=" },
  { id: "franco", name: "Franco Colapinto", teamId: "alpine", number: 7, nationality: "Argentine", photo: "https://media.gettyimages.com/id/2205181985/photo/melbourne-australia-franco-colapinto-of-argentina-and-alpine-f1-team-walks-in-the-paddock.jpg?s=612x612&w=0&k=20&c=GkuOOsKrvPhPaC43rPqRvkSeCfEb6imbVE2QIAc55a4=" },

  // --- HAAS ---
  { id: "esteban", name: "Esteban Ocon", teamId: "haas", number: 31, nationality: "French", photo: "https://media.gettyimages.com/id/2151323480/photo/miami-florida-13th-placed-qualifier-esteban-ocon-of-france-and-alpine-f1-walks-in-the-pitlane.jpg?s=612x612&w=0&k=20&c=f9guTUgBcCxGdRJI4128_y5YNtnzWuBLAvFfGZ8Akpo=" },
  { id: "ollie", name: "Oliver Bearman", teamId: "haas", number: 87, nationality: "British", photo: "https://media.gettyimages.com/id/2243478447/photo/mexico-city-mexico-fourth-placed-oliver-bearman-of-great-britain-and-haas-f1-gives-a-thumbs.jpg?s=612x612&w=0&k=20&c=WIpUSGuHkMCbJnJV8B9zYIcddJrMvK26KMExQ6ZIC9s=" },

  // --- AUDI ---
  { id: "nico", name: "Nico Hulkenberg", teamId: "audi", number: 27, nationality: "German", photo: "https://media.gettyimages.com/id/2223818229/photo/northampton-england-third-placed-nico-hulkenberg-of-germany-and-stake-f1-team-kick-sauber-on.jpg?s=612x612&w=0&k=20&c=-BT4WKwmSYR65Y96GwqsawVDsWhVpV6Z6QmUHFu2L8U=" },
  { id: "gabriel", name: "Gabriel Bortoleto", teamId: "audi", number: 5, nationality: "Brazilian", photo: "https://media.gettyimages.com/id/2182344073/photo/sao-paulo-brazil-gabriel-bortoleto-of-brazil-and-mclaren-f1-team-looks-on-in-the-paddock.jpg?s=612x612&w=0&k=20&c=K9FKhsPqhdUpuclOBY9SrI4r0BjhsdIylaa-MYXbbZU=" }
];
