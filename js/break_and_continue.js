function breaking(num) {
    let output = '';
    // console.log("Number to skip is: " + numberToSkip);
    for (let i = 1; i <= 49; i++) {
        if (i %2 !== 0 && i !== 27 && i < 49)
            output += "Here is an odd number: " + i + '\n';
        if (i === 27) {
            output += "Yikes! Skipping number: " + i + '\n';
            continue;
        }

        if (i === 49)
            output += "Here is an odd number: " + i;
    }
    return output;
}



