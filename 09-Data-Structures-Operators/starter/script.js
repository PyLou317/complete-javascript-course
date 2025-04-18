'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
    },
  
    orderPizza: function (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
  }
};

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 7, 3, 9, 9);
add(3, 55, 6, 3, 4, 6, 7, 64, 4);

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')


// // The Spread Operator (...)
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(...letters);

// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

// restaurant.orderDelivery({
//   time: '23:30',
//   address: '33318 Bourquin Cres',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// let [x, , , y] = restaurant.starterMenu
// console.log([x, y]);

// const [first, second] = [x, y]
// console.log([second, first]);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested
// // console.log(i, j);

// const [i, , [j, k]] = nested
// console.log(i, k, j);

// const [p = 1, q = 1, r = 1] = [8]
// console.log(p, q, r);

// let [, ,book3] = books
// console.log(book3);

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// let [[, rating], [, ratingsCount]] = ratings
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStar, oneStar, threeStar = 0] = ratingStars
// console.log(fiveStar, oneStar, threeStar);
