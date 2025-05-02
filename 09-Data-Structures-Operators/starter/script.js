'use strict';

document.addEventListener('DOMContentLoaded', event => {
  const weekDays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const openingHours = {
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,
      close: 23,
    },
    [weekDays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

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
    MainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,

    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
      starterIndex = 1,
      mainIndex = 0,
      address,
      time = '20:00',
    }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },

    orderPasta(ing1, ing2, ing3) {
      console.log(
        `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
  };

  // const properties = Object.keys(openingHours)
  // console.log(properties);

  // let openStr = `We are open on ${properties.length} days: `;

  // for (const day of properties) {
  //     openStr += `${day}, `;
  // }
  // console.log(openStr);

  // const values = Object.values(openingHours)
  // console.log(values);

  // const entries = Object.entries(openingHours)

  // for (const [key, { open, close }] of entries) {
  //     console.log(`On ${key} we open at ${open}:00 and close at ${close}:00`);
  // }

  // if (restaurant.openingHours && restaurant.openingHours.mon)
  //     console.log(restaurant.openingHours.mon.open);

  // console.log(restaurant.openingHours.mon?.open);
  // console.log(restaurant.openingHours?.mon?.open);

  // const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

  // for (const day of days) {
  //     const open = restaurant.openingHours[day]?.open ?? 'closed';
  //     console.log(`On ${day}, we open at ${open}`);
  // }

  // // console.log(restaurant?.order?.(0, 1) ?? 'Method does not exist');
  // console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

  // const user = [{ name: 'Jonas', email: 'hello@jonas.com' }]

  // console.log(user[0]?.name ?? 'User array empty');

  // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

  // for (const item of menu) console.log(item);

  // for (const [i, el] of menu.entries()) {
  //     console.log(`${i + 1}: ${el}`);
  // }

  // const rest1 = {
  //     name: 'Capri',
  //     // numGuests: 20,
  //     numGuests: 0,
  // }

  // const rest2 = {
  //     name: 'La Pizza',
  //     owner: 'Giovanni Rossi',
  // }

  // rest1.numGuests = rest1.numGuests || 10
  // rest2.numGuests = rest2.numGuests || 10

  // rest1.numGuests ||= 10
  // rest2.numGuests ||= 10

  // rest1.numGuests ??= 10
  // rest2.numGuests ??= 10

  // rest1.owner = rest1.owner && '<ANONYMOUS>'
  // rest2.owner = rest2.owner && '<ANONYMOUS>'
  // rest1.owner &&= '<ANONYMOUS>'
  // rest2.owner &&= '<ANONYMOUS>'

  // console.log(rest1);
  // console.log(rest2);

  // restaurant.numGuests = 0;
  // const guest = restaurant.numGuests || 10
  // console.log(guest);

  // const guestCorrect = restaurant.numGuests ?? 10;
  // console.log(guestCorrect);

  // console.log(0 && 'Jonas');
  // console.log(7 && 'Jonas');
  // console.log(1 && 'Lucas' && null && true);

  // if (restaurant.orderPizza) {
  //     restaurant.orderPizza('mushrooms', 'spinach');
  // }

  // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

  // // OR (||) operator
  // console.log(3 || 'Jonas');
  // console.log('' || 'Jonas');
  // console.log(true || 0);
  // console.log(undefined || null);

  // restaurant.numGuests = 23;
  // const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
  // console.log(guest1);

  // const guest2 = restaurant.numGuests || 10
  // console.log(guest2);

  // const [a, b, ...others] = [1, 2, 3, 4, 5];
  // console.log(a, b, others);

  // const { sat, ...weekdays } = restaurant.openingHours;
  // console.log(weekdays);

  // const add = function (...numbers) {
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  //   console.log(sum);
  // };
  // add(2, 3);
  // add(5, 7, 3, 9, 9);
  // add(3, 55, 6, 3, 4, 6, 7, 64, 4);

  // const x = [23, 5, 7]
  // add(...x)

  // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
  // restaurant.orderPizza('mushrooms')

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

  //  Coding Challenge #1

  // We're building a football betting app (soccer for my American friends 😅)!

  // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

  // 1. Create one player array for each team (variables 'players1' and 'players2')
  // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
  // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
  // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
  // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
  // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
  // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

  // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.Then, call the function again with players from game.scored

  // const game = {
  //   team1: 'Bayern Munich',
  //   team2: 'Borrussia Dortmund',
  //   players: [
  //     [
  //       'Neuer',
  //       'Pavard',
  //       'Martinez',
  //       'Alaba',
  //       'Davies',
  //       'Kimmich',
  //       'Goretzka',
  //       'Coman',
  //       'Muller',
  //       'Gnarby',
  //       'Lewandowski',
  //     ],
  //     [
  //       'Burki',
  //       'Schulz',
  //       'Hummels',
  //       'Akanji',
  //       'Hakimi',
  //       'Weigl',
  //       'Witsel',
  //       'Hazard',
  //       'Brandt',
  //       'Sancho',
  //       'Gotze',
  //     ],
  //   ],
  //   score: '4:0',
  //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  //   date: 'Nov 9th, 2037',
  //   odds: {
  //     team1: 1.33,
  //     x: 3.25,
  //     team2: 6.5,
  //   },
  // };

  // let [players1, players2] = [game.players[0], game.players[1]];
  // console.log(players1);
  // console.log(players2);

  // const [gk, ...fieldPlayers] = players1;
  // console.log(gk);
  // console.log(fieldPlayers);

  // const allPlayers = [...players1, ...players2];
  // console.log(allPlayers);

  // const players1Final = [...players1, 'Thiago', 'Coutinho'];

  // const {
  //   odds: { team1, x: draw, team2 },
  // } = game;
  // console.log(team1, draw, team2);

  // const printGoals = function (...players) {
  //     console.log(players);
  //     console.log(`${players.length} goals were scored`);
  // }

  // // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimish')
  // // printGoals('Davies', 'Muller')
  // printGoals(...game.scored)

  // team1 < team2 && console.log(`Team 1 is more likely to win`);
  // team1 > team2 && console.log(`Team 2 is more likely to win`);

  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  // Coding Challenge #2

  // Let's continue with our football betting app!

  // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
  const goalsScored = [...game.scored];

  for (const [num, player] of goalsScored.entries()) {
    console.log(`Goal ${num + 1}: ${player}`);
  }

  // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
  const odds = Object.values(game.odds);
  let average = 0;
  for (const odd of odds) average += odd;
  average /= odds.length;
  console.log(average);


  // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
  //       Odd of victory Bayern Munich: 1.33
  //       Odd of draw: 3.25
  //       Odd of victory Borrussia Dortmund: 6.5
    // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
    for (const [team, odd] of Object.entries(game.odds)) {
        const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
        console.log(`Odd od ${teamStr} ${odd}`);
    }

  // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
  //       {
  //         Gnarby: 1,
  //         Hummels: 1,
  //         Lewandowski: 2
    //       }
    let playerGoal = {}
    for (const [index, player] of Object.entries(game.scored)) {
        let goal = 1
        if (player in playerGoal) {
            goal += 1
        }
        playerGoal[player] = goal
    }
    console.log(playerGoal);

  // GOOD LUCK 😀
});
