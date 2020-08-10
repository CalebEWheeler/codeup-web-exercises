'use strict'
console.log('Hello from external JavaScript.')

alert('Welcome to my Website!')

// let userInput = prompt('What is your favorite color?')
// alert('No way! ' + userInput + ' is my favorite color too!')

//movie rental
var question1 = 'How many days are you going to rent The Little Mermaid?';
var answer1 = prompt(question1);
var total1 = (answer1 * 3);

var question2 = 'How many days are you going to rent Brother Bear?';
var answer2 = prompt(question2);
var total2 = (answer2 * 3);

var question3 = 'How many days are you going to rent Hercules?';
var answer3 = prompt(question3);
var total3 = (answer3 * 3);

//another method:
//var question1 = prompt('How many days are you going to rent The Little Mermaid?');
//var question2 = prompt('How many days are you going to rent Brother Bear?');
//var question3 = prompt('How many days are you going to rent Hercules?');
// var total = (parseInt(question1) + parseInt(question2) + parseInt(question3));
// alert("Your total for today is " + total + ".");
alert("Your total for today is " + (total1+total2+total3) + ".")

//contract work
var question4 = 'How much does Google pay per hour?';
var answer4 = prompt(question4);
var question5 = 'How many hours did you work for Google?';
var answer5 = prompt(question5);
var googleTotal = (answer4 * answer5);

var question6 = 'How much does FaceBook pay per hour?';
var answer6 = prompt(question6);
var question7 = 'How many hours did you work for FaceBook?';
var answer7 = prompt(question7);
var facebookTotal = (answer6 * answer7);

var question8 = 'How much does Amazon pay per hour?';
var answer8 = prompt(question8);
var question9 = 'How many hours did you work for Amazon?';
var answer9 = prompt(question9);
var amazonTotal = (answer8 * answer9);

//another method:
//var google = 400;
//var facebook = 350;
//var amazon = 380;
//var googleHours = prompt('How many hours did you work for Google?');
//var facebookHours = prompt(+'How many hours did you work for FaceBook?');
//var amazonHours = prompt(+'How many hours did you work for Amazon?');
//var income = (+googleHours * google) + (+facebookHours * facebook) + (+amazonHours * amazon);
//console.log("You made $" + income + " this week.");
alert('Your total dollars earned is $' + (googleTotal + facebookTotal + amazonTotal));


var question10 = 'Can the student enroll in the class?';
var answer10 = prompt(question10);
var question11 = 'Does the class conflict with her schedule?';
var answer11 = prompt(question11);
var question



//     A student can be enrolled in a class only if the class is not full and the class schedule
// does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has
// not expired. Premium members do not need to buy a specific amount of products.



