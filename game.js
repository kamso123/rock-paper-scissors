function playGame() {
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

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    const humanChoice = prompt(`Round ${i}: Enter rock, paper, or scissors`).toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Final result
  console.log(`\nFinal Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("🏆 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}
playGame();
