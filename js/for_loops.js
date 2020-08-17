// var i = 0;
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//
// do {
//     console.log('do while loop iteration #' + i);
//     i++;
// } while (i<10);
//
// for (var x= 3, j = 2; x<=30; x+=3, j--) {
//     console.log('for loop iteration #' + x);
// }
// var i=1;
// while (i<=10) {
//     console.log('while loop iteration#' + i);
//     if (i===4) break;
//     i++;
// }
// for (var i = 1; i < 100; i++) {
//     if (i%3 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//     console.log('Here is a lovely even number: ' + i);
// }


// function exampleOfRetruningFromLoop() {
//     let output = ''
//     for (let i=0; i < 10; i++) {
//         output += "iteration " + i
//         if (i !== 9) output += '\n'
//     }
//     return output;
// }
// console.log(exampleOfRetruningFromLoop)
// console.log(exampleOfRetruningFromLoop())

function returnMultiplicationTable(input) {
    let total = '';
    for (let i = 1; i <= 10; i++) {
        total += (input + ' x ' + i + ' = ' + (input * i));
        if (i !== 10) {
            total += '\n';
        }
    }
    return total;
}

function returnEvenOddMessage(int) {
    let output2 = '';
    if (int % 2 !== 0) {
        output2 += int + ' is odd';
    }else {
        output2 += int + ' is even';
    }return output2;
}

function returnTenEvenOddMessages() {
    let output1 = '';
    for (let a = 0; a < 10; a++) {
        var randomNumber = Math. floor(Math.random() * (180 + 1) + 20);
        output1 += returnEvenOddMessage(randomNumber);
        if (a !== 9) output1 += '\n'
    }   return output1;
}

function returnNumberSail(input) {
    let output = '';
    return output;
}




