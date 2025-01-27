// A "Rock Paper Scissors" game playable via the console

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];

  let humanChoice = prompt(
    "Enter your move! 'rock', 'paper' or 'scissors'"
  ).toLowerCase();

  const checkValidity = validChoices.includes(humanChoice);

  if (checkValidity) {
    return humanChoice;
  } else {
    return `${humanChoice} is not a valid choice! Please choose from ${validChoices}`;
  }
}
