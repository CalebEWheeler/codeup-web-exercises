// var names = [
//     'Mando Salazar',
//     'Audie Brattin',
//     'Blossom Perez',
//     'Caleb Wheeler',
//     'Chris Parker',
//     'Cory Holley',
//     'Cruzanio Villarreal',
//     'Damien Salazar',
//     'Donelle Harris',
//     'Eric Rencehausen',
//     'Li Wang',
//     'Michael Satterfield',
//     'Michael Troia',
//     'Patrick Larkin',
//     'Roberto Cuyar',
//     'Rocco Paccione',
//     'Ryan Kendall',
//     'Sahara Tijol',
//     'Sedgwick House'
// ];
// // for (survivor = names.length-1; survivor <= 0; survivor--) {
// //     let round = Math.floor(Math.random() * survivor);
// //     console.log(names)
// // }
//
// // while(names.length) {
//     let i = names.length;
//     let round = Math.floor(Math.random()*names.length)
//     console.log(names[round]);
//     names.join(names.substr([round]))
//     // var originalPosition = round;
//     // var newPosition = names.length;
//
//     // let remainingPlayers = names.pop(round);
//     // console.log(names.slice(round))
//
// // }

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

//js pushup 8/25
// function fizzBuzz(num) {
//     for (var i=1; i<=100; i++) {
//     if(i %3 === 0 && i %5 === 0) {
//             console.log("fizz" +"buzz")
//         }
//         else if (i %3 === 0) {
//             var fizz = console.log("fizz")
//         }
//         else if( i %5 === 0) {
//             var buzz = console.log("buzz")
//         }
//         else if (i %3 !== 0 && i %5 !== 0) {
//         console.log(i);
//     }
//
//     }
// }
// console.log(fizzBuzz());

// 'use strict';
// // this code will produce a console log every second
// // when count >= max, the interval is cancelled, and the logging will stop
// var count = 0;
// var max = 5;
// var interval = 3000; // interval time in milliseconds
// var intervalId = setInterval(myFunc, interval);
// function myFunc() {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         alert('Repeating this line ' + count);
//     }
// }

//write code that will delay an alert for three seconds
// var delay = 5000;
// var timeOutID = setTimeout(function () {
//     // alert("Hello, we've hit three seconds");
//
//     // redirect browser to google.com
//     window.location = 'http://www.google.com';
// }, delay);


