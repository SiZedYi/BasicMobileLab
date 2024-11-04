const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players
// 3. For each player, create a variable like this: 'player1', 'player2', etc.
// 7. During the game, Bayern Munich (team1) used 3 substitute players. So create a new array 'players1Final' containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 8. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 9. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 10. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// 11. Print the three odds to the console, but in a nice formatted way, exactly like this:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5
//      GOOD LUCK 😀
// 1.
const [players1, players2] = game.players;
// 2.
const [gk, ...fieldPlayers] = players1;
// 3.
const allPlayers = [...players1, ...players2];
// 7.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// 8.
const {
  odds: { team1, x: draw, team2 },
} = game;

// 9.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  players.forEach((player) => console.log(player));
};
// 10.
team1 < team2 ? console.log("Team 1 is more likely to win") : console.log("Team 2 is more likely to win");

printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");