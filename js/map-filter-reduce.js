const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// TODO: Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.
const userLanguages = users.filter(user => user.languages.length > 3)

// TODO: Use .map to create an array of strings where each element is
// a user's email address
const getUserEmail = users.map(user => user.email)

// TODO: Use .reduce to get the total years of experience from the list
// of users. Once you get the total of years you can use the result to calculate the average.

//SYNTAX => Array.reduce(function(accumulator, currentValue) {
// }, 'initialValue');
const avgYearsExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length;
}, 0)

// TODO: Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((accum, {email}) => {
    if(email.length > accum.length ) {
        return email;
    }else {
        return accum;
    }
}, '')


// TODO: Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
const concatUsers = users.reduce((accum, user) => {
    return accum + user.name + ', '
}, 'Your instructors are: ')

// TODO: BONUS: Use .reduce to get the unique list of languages from the list of users.
//MY SOLUTION
const uniqueLanguages = users.reduce((accum, {languages}) => {
    return accum += languages + ','
}, []).split(",").slice(0,-1);
let eachLanguage = new Set(uniqueLanguages)

//CORY'S SOLUTION
// const uniqueLanguages = users.reduce((accum, {languages}) => accum += languages + ',', "").split(",").slice(0,-1)
// let eachLanguage = new Set(uniqueLanguages);
console.log(eachLanguage);

