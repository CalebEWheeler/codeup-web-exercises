// function breaking(num) {
//     let output = '';
//     var number = prompt("Choose an odd number between 1-50.");
//     for (true; number % 2 === 0; true) {
//         var number = prompt("Choose an odd number between 1-50.");
//         if (number % 2 === 0) {
//             continue;
//         } else {
//             break;
//         }
//     }
//     for (let i = 1; i <= 49; i++) {
//         if (i % 2 !== 0 && i !== Number(number) && i < 49) {
//             output += "Here is an odd number: " + i + '\n';
//         }
//         if (i === Number(number)) {
//             output += "Yikes! Skipping number: " + number + '\n';
//         }
//         if (i === 49) output += "Here is an odd number: " + i;
//     }
//     var output2 = "Number to skip: " + number + '\n\n';
//     output2 += output;
//     console.log(output2);
// }
// breaking();

// function breaking(num) {
//     let output = '';
//     while (true) {
//         var number = prompt("Choose an odd number between 1-50.");
//         if (number % 2 === 1) {
//             break;
//         }
//     }
//     // return ("Number to skip is: " + Number(number))
//     for (let i = 1; i <= 49; i++) {
//         if (i % 2 !== 0 && i !== Number(number) && i < 49) {
//             output += "Here is an odd number: " + i + '\n';
//         }
//         if (i === Number(number)) {
//             output += "Yikes! Skipping number: " + number + '\n';
//         }
//         if (i === 49) output += "Here is an odd number: " + i;
//     }
//     var output2 = "Number to skip: " + number + '\n\n';
//     output2 += output;
//     console.log(output2);
// }
// breaking();

function queryUser() {
    let num
    while (true) {
        num = prompt("Please enter an odd number between 1 and 50.")
        if(isValidOddNumber(num) && num >= 1 && num <= 50) break;
        alert('Invalid entry:\n' +
        num + ' is not an odd number between 1 and 50')
    }
    getOddNumbers(num)
}
console.log(queryUser());

function isValidOddNumber(num) {
    if(isNaN(num)) return false
    num = Number(num)
    if(!Number.isInteger(num)) return false
    return (num%2 === 1)
}

function getOddNumbers(skip) {
    //validate data
    if(!isValidOddNumber(skip))
        return "Error: The skip value is not an odd number between 1 and 50"

    // process data
    let output = 'Number to skip is: ' + skip + '\n\n'
    skip = Number(skip)
    for (var i = 1; i <= 50; i+= 2) {
        if (i === skip) {
            output += "Yikes! Skipping number: " + skip + '\n'
            continue
        }
        output += i
        if (i < 49) output += '\n'
    }
    console.log(output)
}






