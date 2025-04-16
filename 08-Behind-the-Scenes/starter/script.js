'use strict';

// function calcAge(birthYear) {
//     const age = 2025 - birthYear

//     function printAge() {
//         const output = `You are ${age}, born in ${birthYear}`
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const str = `Oh, you're a millenial, ${firstName}`
//             console.log(str);
//         }
//     }
//     printAge()

//     return age
// }

// const firstName = 'Lucas'
// calcAge(1991)

// if(!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart() {
//      console.log('All Products Deleted!');
//  }

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2025-this.year);
//     }
// }

// jonas.calcAge()

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge
// matilda.calcAge()

// const f = jonas.calcAge
// f();


// const jonas = {
//     year: 1991,
//     firstName: 'Jonas',
//     calcAge: function () {
//         console.log(2025 - this.year);

        // console.log(this);
        // self = this
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

//         self = this
//         const isMillenial = () => {
//             console.log(self);
//             console.log(self.year >= 1981 && self.year <= 1996);
//         };

//         isMillenial();
//     },
//     greet: () => {
//         console.log(`Hey ${this.firstName}`)
//     }    
// };
// jonas.greet()
// jonas.calcAge()
        
        
        
// const jessica = {
//     firtName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// }

// function marryPerson(originalPerson, newLastName) {
//     originalPerson.lastName = newLastName
//     return originalPerson
// }

// const marriedJessica = marryPerson(jessica, 'Davis')

// // const marriedJessica = jessica
// // marriedJessica.lastName = 'Davis'

// console.log('Before:', jessica.lastName);
// console.log('After:', marriedJessica.lastName);

// const jessica = {
//     firtName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob'],
// }

// // Shallow copy
// const jessicaCopy = { ...jessica }
// jessicaCopy.lastName = 'Davis'

// jessicaCopy.family.push('Mary')
// jessicaCopy.family.push('Jon')

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// // Deep clone
// const jessicaClone = structuredClone(jessica)
// jessicaClone.family.push('Mary')
// jessicaClone.family.push('Jon')

// console.log('Original:', jessica);
// console.log('Clone:', jessicaClone);


