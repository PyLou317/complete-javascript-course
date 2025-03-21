'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (hasDriversLicense) console.log('I can drive')


// function logger(name) {
//     const log = `My name is ${ name }`;
//     return log
// }

// // calling function
// const day1 = logger('Lucas');
// console.log(day1)


// function calcAge(birthYear) {
//     return 2025 - birthYear;
// }

// const age1 = calcAge(1991)
// console.log(age1)


// const age2 = calcAge2(1991);
// console.log(age2)

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2025 - (birthYear)
// }

// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Lucas'));
// console.log(yearsUntilRetirement(1985, 'John'));

// const cutPieces = function (fruit) {
//     return fruit * 40;

// }
// function fruitProcessor(apples, oranges) {

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3))
// const calcAge = function (year) {
//     return 2025 - year
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`
//     } else {
//         return -1
//     }
// }

// console.log(yearsUntilRetirement(1962, 'Lucas'))


// const friends = ['Michael', 'Steven', 'Peter', 'Lucas'];
// console.log(friends)

// console.log(friends[friends.length -1])
// console.log(friends.length)

// friends[2] = 'Alycia'
// console.log(friends)

// const lucas = ['Lucas', 'Patriquin', 2025 - 1991, 'Salesperson', friends]
// console.log(lucas)
// console.log(lucas.length)

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [age1, age2, age3]
// console.log(ages)


// const friends = ['Michael', 'Peter', 'Lucas'];

// // Add elements
// const newLength = friends.push('Jay', 'Kelly')
// console.log(friends)
// console.log(newLength)

// friends.unshift('Dominique')
// console.log(friends)

// // Remove elements
// const pop = friends.pop(); // Last
// console.log(pop);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Lucas'));

// friends.push(23);
// console.log(friends.includes('Lucas')); // True
// console.log(friends.includes('Bob')); // False
// console.log(friends.includes(23)); // False
// console.log(friends);

// if (friends.includes('Lucas')) {
//     console.log('You have a friends named Lucas');
// }


// --====== Objects (python dict) =====-- //
// const lucas = {
//     firstName: 'Lucas',
//     lastName: 'Patriquin',
//     age: 2025 - 1991,
//     friends: ['Michael', 'Peter', 'Lucas']
// };

// console.log(lucas)
// console.log(lucas.firstName)
// console.log(lucas['firstName'])
// console.log(lucas.age)

// const nameKey = 'Name'

// console.log(lucas['first' + nameKey])

// const interestedIn = prompt('What do you want to know about Lucas? Choose between firstName, lastName, age, job, and friends');

// if (lucas[interestedIn]) {
//     console.log(lucas[interestedIn])
// } else {
//     console.log('Wrong request!')
// }

// lucas.location = 'Canada';
// console.log(lucas)

// console.log(`${lucas.firstName} has ${lucas.friends.length} friends, and his best friend is ${lucas.friends[0]}`)


// const lucas = {
//     firstName: 'Lucas',
//     lastName: 'Patriquin',
//     birthYear: 1991,
//     job: 'Sales',
//     friends: ['Michael', 'Peter', 'Lucas'],
//     hasDriversLicense: true,

//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.age}-year old ${this.job}man, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// };

// // Must call the function first to create the variable "age"
// lucas.calcAge()
// console.log(lucas.age);

// console.log(lucas.getSummary())

// lucas.friends.push('Mom')
// console.log(lucas.friends)

// const mark = {
//     fullName: 'Mark Miller',
//     height: 1.69,
//     mass: 78,

//     calcBmi: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     height: 1.95,
//     mass: 92,

//     calcBmi: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// };

// mark.calcBmi()
// john.calcBmi()

// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// }



// -----===== Loops =====----- //

// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repitition ${rep} 🏋🏼‍♀️`)
// }


// const lucas = [
//     'Lucas',
//     'Patriquin',
//     2025 - 1991,
//     ['Michael', 'Peter', 'Lucas'],
//     true
// ];

// const types = [];

// for (let i = 0; i < lucas.length; i++) {
//     console.log(lucas[i]);

//     // Fill array
//     // types[i] = typeof lucas[i];
//     types.push(typeof (lucas[i]));
// }

// console.log(types)


// const years = [1991, 1943, 1988, 2000]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2025 - years[i])
// }

// console.log(ages)

// continue and break //
// const lucas = [
//     'Lucas',
//     'Patriquin',
//     2025 - 1991,
//     'Salesperson',
//     ['Michael', 'Peter', 'Lucas'],
//     true
// ];

// for (let i = 0; i < lucas.length; i++) {
//     if (typeof lucas[i] !== 'string') continue;

//     console.log(lucas[i], typeof lucas[i])
// }

// for (let i = 0; i < lucas.length; i++) {
//     if (typeof lucas[i] === 'number') break;

//     console.log(lucas[i], typeof lucas[i])
// }


// // Coun/loop Backwards
// const lucas = [
//     'Lucas',
//     'Patriquin',
//     2025 - 1991,
//     'Salesperson',
//     ['Michael', 'Peter', 'Lucas'],
//     true
// ];

// for (let i = lucas.length-1; i >= 0; i--) {
//     console.log(lucas[i]);
// }


// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----------- Starting exercise set ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repition ${rep}🏋🏼‍♀️`);
//     }
// }


// for (let exercise = 1; exercise <= 10; exercise++) {
//     console.log(`Starting exercise set ${exercise}`);
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`Starting exercise set ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...')
// };