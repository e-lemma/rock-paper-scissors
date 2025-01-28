// A "Rock Paper Scissors" game playable through a user interface

function getComputerChoice() {
  // Generate a random int between 1 and 3 inclusive
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  let winner = "";
  console.log(humanChoice, computerChoice);
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both picked ${humanChoice}`);
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      winner = "human";
      console.log("You win! Rock beats Scissors!");
    } else {
      winner = "computer";
      console.log("You lose! Paper beats Rock!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      winner = "human";
      console.log("You win! Paper beats Rock!");
    } else {
      winner = "computer";
      console.log("You lose! Scissors beats Paper!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      winner = "human";
      console.log("You win! Scissors beats Paper!");
    } else {
      winner = "computer";
      console.log("You lose! Rock beats Scissors!");
    }
  }
  console.log(`winner: ${winner}`);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    // Announce player choices
    console.log("You pick " + humanSelection);
    console.log("Computer picks " + computerSelection);

    // Play round, add score to winner
    let round_winner = playRound(humanSelection, computerSelection);
    if (round_winner === "human") {
      humanScore++;
    } else if (round_winner === "computer") {
      computerScore++;
    }
  }

  // Announce final scores
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);

  // Determine and announce overall winner
  if (humanScore > computerScore) {
    console.log("You win!!");
  } else if (humanScore < computerScore) {
    console.log("You lose...");
  } else {
    console.log("It's a tie.");
  }
}

const buttons = document.querySelectorAll(".player-choice");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    playRound(button.textContent.toLowerCase(), getComputerChoice())
  );
});
