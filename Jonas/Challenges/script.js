//=====================CODING CHALLENGE 1==================//

// 1. Create one player array for each team (variables
//     'players1' and 'players2')
// 2. The first player in any player array is the
//     goalkeeper and the others are field players. For
//     Bayern Munich (team 1) create one variable ('gk')
//     with the goalkeeper's name, and one array
//     ('fieldPlayers') with all the remaining 10 field
//     players
// 3. Create an array 'allPlayers' containing all
//     players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3
//     substitute players. So create a new array
//     ('players1Final') containing all the original teaml
//     players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable
//     for each odd (called 'teaml', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an
//     arbitrary number of player names (NOT an array) and
//     prints each of them to the console, along with the
//     number of goals who were scored (number of player
//     names passed in).
// 7. The team with the lower odd is more likely to win.
//     Print to the console which team is more likely to
//     win, WITHOUT using an if/else statement or the
//     ternary operator.
// TEST DATA FOR 6: Use players 'Davies', 'Muller',
// 'Lewandowski' and 'Kimmich'. Then, call the function
// again with players from game.scorer

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

// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(player1Final);

// // const {team1, x: draw, team2} = game.odds;
// // console.log(team1, draw, team2)

// // const teamPlayers = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
// // const printGoals = function (val) {
// //   console.log(`The player ${val} has scored ${game.score}`);
// // };
// // printGoals(teamPlayers);

// // const { odds } = game;
// // odds.team1 < odds.team2 &&
// //   console.log(`Team 1 won with the value of ${odds.team1}`);

// //=====================CODING CHALLENGE 2==================//

// // Let's continue with our football betting app!
// // 1. Loop over the game.scored array and print each
// // player name to the console, along with the goal
// // number (Example: "Goal 1: Lewandowski")
// // 2. Use a loop to calculate the average odd and log it
// // to the console (We already studied how to calculate
// // averages, you can go check if you don't remember)
// // 3. Print the 3 odds to the console, but in a nice
// // formatted way, exaclty like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object,
// // don't hardcode them (except for "draw"). HINT: Note
// // how the odds and the game objects have the same
// // property names
// // BONUS: Create an object called 'scorers' which
// // contains the names of the players who scored as
// // properties, and the number of goals as the value. In
// // this game, it will look like this:
// //  {
// //   Gnarby: 1,
// //   Hummels: 1,
// //   Lewandowski: ?
// //  }

// // GOOD LUCK 🤩
// // */

// //Task 1

// const playersName = game.scored.entries();
// for (const [i, player] of playersName) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// //Task 2

// let average = 0;
// let odds = Object.values(game.odds);
// for (const odd of Object.values(game.odds)) average += odd;
// average /= odds.length;
// console.log(average);

// //Task 3

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${team}: ${odd}`);
// }

// //Bonus
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }
// console.log(scorers);

//Challenge

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia = Julia, dogsKate = Kate) => {
  const newArray = dogsJulia.slice(1, -2).concat();
  const wholeArray = [...newArray, ...dogsKate];
  wholeArray.forEach(function (el, index) {
    el >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${el} years old`
        )
      : console.log(`Dog number ${index + 1} is still an puppy 🐶`);
  });
};

checkDogs();
const numbers1 = [1, 2, 3, 4];

