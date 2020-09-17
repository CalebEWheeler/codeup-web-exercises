/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];


// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
let name = 'caleb';
let email = 'caleb.edward.wheeler@gmail.com';
let languages = ['html', 'css', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function (user) {
//     return emails.push(user.email);
// });

//Justin's method
// users.forEach(user => emails.push(user.email));

//My method
const getEmails = () => {for (let user of users) {emails.push(user.email)}}
getEmails()
// users.forEach(function (user) {
//     return names.push(user.name);
// });

//Justin's method
// users.forEach(user => names.push(user.name));

// My method
const getNames = () => {for (let user of users) {names.push(user.name)}};
getNames();

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function (user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;
    const {name, email, languages} = user

    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    developers.push(`${name}'s email is ${email} knows ${languages.join(', ')}`);
});

//Refactor of the above forEach loop
// users.forEach(user => {const{name, email, languages} = user; developers.push(`${name}'s email is ${email} knows ${languages.join(', ')}`)})
//
//Another Method
// users.forEach(function(name, email, languages) {
// developers.push(`${name}'s email is ${email} knows ${languages.join(', ')}`)
// };

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//     // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

for (let developer of developers) {
    list += `<li>${developer}</li>`;
}
list += '</ul>';
