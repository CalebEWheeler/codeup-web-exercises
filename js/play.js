var names = [
    'Mando Salazar',
    'Audie Brattin',
    'Blossom Perez',
    'Caleb Wheeler',
    'Chris Parker',
    'Cory Holley',
    'Cruzanio Villarreal',
    'Damien Salazar',
    'Donelle Harris',
    'Eric Rencehausen',
    'Li Wang',
    'Michael Satterfield',
    'Michael Troia',
    'Patrick Larkin',
    'Roberto Cuyar',
    'Rocco Paccione',
    'Ryan Kendall',
    'Sahara Tijol',
    'Sedgwick House'
];
// for (survivor = names.length-1; survivor <= 0; survivor--) {
//     let round = Math.floor(Math.random() * survivor);
//     console.log(names)
// }

// while(names.length) {
    let i = names.length;
    let round = Math.floor(Math.random()*names.length)
    console.log(names[round]);
    var originalPosition = round;
    var newPosition = names.length;

    // let remainingPlayers = names.pop(round);
    // console.log(names.slice(round))

// }

// function battleRoyal(students) {
//     do {
//         let rnd = Math.floor(Math.random() * names.length);
//         let index = names.length - rnd;
//         // names.splice(rnd1, rnd);
//         console.log("\nStudents Remaining in the BATTLE ROYAL:");
//         names.forEach(function (name) {
//             console.log(name);
//         })
//     } while (names.length !== 1);
// }
// battleRoyal();