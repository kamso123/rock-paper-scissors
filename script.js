function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
} console.log(getComputerChoice())

function getHumanChoice() {
  const input = prompt("Choose rock, paper, or scissors:");
  const validChoices = ["rock", "paper", "scissors"];
  return input;
}
const humanChoice = getHumanChoice();
console.log( humanChoice);
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Make humanChoice case-insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
  }
}

// Helper function to capitalize first letter
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
playRound("ROCK", "paper");    // You lose! Paper beats Rock.
console.log(humanScore);       // 0
console.log(computerScore); 

