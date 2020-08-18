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
    for (var i = 1; i <= 9; i++) {
        for (var j = 0; j < i; j++) {
            output += i
        }
        if (i < 9) output += '\n'
    }
    return output
}
console.log(returnNumberSail())


function countDownByFives() {
    let output = ''
    for (let i = 100; i > 0; i-= 5) {
        output += i
        if (i > 5) output += '\n'
    }
    return output
}





