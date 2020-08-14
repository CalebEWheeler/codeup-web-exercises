"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that's related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    var color = prompt("Tell me a color you like.")
    if (color === 'blue') {
        return color + " is the color of the sky";
    } else if (color === 'red') {
        return "Strawberries are " + color;
    } else if (color === 'cyan') {
        return "I don't know anything about " + color;
    } else {
        return "Sorry, I don't know much about that color.";
    }
}

// console.log(analyzeColor());

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function analyzeColor2(colors) {
    if (randomColor === "red") {
        return "My favorite color is " + randomColor + ".";
    } else if (randomColor === "orange") {
        return randomColor + " goes well with blue!";
    } else if (randomColor === "yellow") {
        return "The sun is the color " + randomColor + ".";
    } else if (randomColor === "green") {
        return "The grass is " + randomColor + ".";
    } else if (randomColor === "blue") {
        return "The sky is " + randomColor + ".";
    } else if (randomColor === "indigo") {
        return "Woah, " + randomColor + " is whack!";
    } else if (randomColor === "violet") {
        return "I like maroon more than " + randomColor + ".";
    } else {
        return "I don't know anything about that color."
    }
}

// console.log(analyzeColor2());

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor3(colors) {
    switch (randomColor.toLowerCase()) {
        case "red":
            return "My favorite color is " + randomColor + ".";
        case "orange":
            return randomColor + " goes well with blue!";
        case "yellow":
            return "The sun is the color " + randomColor + ".";
        case "green":
            return "The grass is " + randomColor + ".";
        case "blue":
            return "The sky is " + randomColor + ".";
        case "indigo":
            return "Woah, " + randomColor + " is whack!";
        case "violet":
            return "I like maroon more than " + randomColor + ".";
        default:
            return "I don't know anything about that color.";
    }
}

// console.log(analyzeColor3());

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
function analyzeColor4(colors) {
    var askColor = prompt("Please enter a color: ");

    switch (askColor) {
        case "red":
            return alert("My favorite color is " + askColor + ".");
        case "orange":
            return alert(askColor + " goes well with blue!");
        case "yellow":
            return alert("The sun is the color " + askColor + ".");
        case "green":
            return alert("The grass is " + askColor + ".");
        case "blue":
            return alert("The sky is " + askColor + ".");
        case "indigo":
            return alert("Woah, " + askColor + " is whack!");
        case "violet":
            return alert("I like maroon more than " + askColor + ".");
    }
}

// analyzeColor4();
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case 0:
//             return (totalAmount);
//         case 1:
//             return (totalAmount - (totalAmount * .10));
//         case 2:
//             return (totalAmount - (totalAmount * .25));
//         case 3:
//             return (totalAmount - (totalAmount * .35));
//         case 4:
//             return (totalAmount - (totalAmount * .50));
//         case 5:
//             return (totalAmount - totalAmount);
//     }
// }
//
// console.log(calculateTotal(2, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal() {
    var totalAmount = prompt("What is your total bill?");
    var luckyResponse = "Your lucky number is: " + luckyNumber + ". ";
    var priceResponse = "Your price before the discount was " + totalAmount;
    switch (luckyNumber) {
        case 0:
            return alert(luckyResponse + priceResponse + ", your new price is still " + totalAmount + ".");
        case 1:
            return alert(luckyResponse + priceResponse + ", your new price is " + (totalAmount - (totalAmount * .10)) + ".");
        case 2:
            return alert(luckyResponse + priceResponse + ", your new price is " + (totalAmount - (totalAmount * .25)) + ".");
        case 3:
            return alert(luckyResponse + priceResponse + ", your new price is " + (totalAmount - (totalAmount * .35)) + ".");
        case 4:
            return alert(luckyResponse + priceResponse + ", your new price is " + (totalAmount - (totalAmount * .50)) + ".");
        case 5:
            return alert(luckyResponse + priceResponse + ", your new price is " + (totalAmount - (totalAmount) + ".") + ".");
        case 6:
            return alert("There is not a valid discount for the number: " + luckyNumber + ".");
    }
}

// calculateTotal();
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function chooseNumber() {
    var check = confirm("Would you like to enter a number?")
    if (check === true) {
        var num = prompt("Please enter a number.");
        if (isNaN(num)) {
            alert("You dummy, that's not a number! Try again.");
        } else {
            if (num !== isNaN()) {
                var evenOdd = (num % 2 === 0) ? "Your number is even" : "Your number is an odd number.";
                alert("If you added " + num + " + 100, the number would be " + (parseInt(num) + 100) + ".");
                var posNeg = (num > 0) ? "Your number is positive." : "Your number is negative.";
            }
        }
    } else {
        alert("You're no fun.");
    }
}

chooseNumber();