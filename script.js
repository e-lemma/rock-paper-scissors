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
  addMessageToUI(humanChoice, computerChoice);
  if (humanChoice === computerChoice) {
    addMessageToUI(`It's a tie! Both picked ${humanChoice}`);
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      winner = "human";
      addMessageToUI("You win! Rock beats Scissors!");
    } else {
      winner = "computer";
      addMessageToUI("You lose! Paper beats Rock!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      winner = "human";
      addMessageToUI("You win! Paper beats Rock!");
    } else {
      winner = "computer";
      addMessageToUI("You lose! Scissors beats Paper!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      winner = "human";
      addMessageToUI("You win! Scissors beats Paper!");
    } else {
      winner = "computer";
      addMessageToUI("You lose! Rock beats Scissors!");
    }
  }
  addMessageToUI(`winner: ${winner}`);

  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  trackGameScore(humanScore, computerScore);
  checkGameEnd();
  return winner;
}

function setupUIButtons() {
  const buttons = document.querySelectorAll(".player-choice");

  buttons.forEach((button) => {
    button.addEventListener("click", () =>
      playRound(button.textContent.toLowerCase(), getComputerChoice())
    );
  });
}

function addMessageToUI(message) {
  const messageDiv = document.createElement("div");
  messageDiv.style.cssText = "color: red;";
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
}

function trackGameScore(humanScore, computerScore) {
  ScoreString = `Player ${humanScore} - ${computerScore} Computer`;
  const scoreDiv = document.querySelector("#game-score");
  scoreDiv.textContent = ScoreString;
}

function checkGameEnd() {
  if (humanScore >= 5 || computerScore >= 5) {
    const winner = humanScore >= 5 ? "You" : "Computer";
    addMessageToUI(`Game Over! ${winner} won!`);
    disableChoiceButtons();
    showRestartButton();
    return trackGameScore;
  }
  return false;
}

function showRestartButton() {
  const restartButton = document.querySelector("#restart");
  restartButton.style.display = "block";
}

function disableChoiceButtons() {
  const buttons = document.querySelectorAll(".player-choice");
  buttons.forEach((button) => (button.disabled = true));
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  trackGameScore(humanScore, computerScore);
  messagesDiv.innerHTML = "";
  const buttons = document.querySelectorAll(".player-choice");
  buttons.forEach((button) => (button.disabled = false));
  document.querySelector("#restart").style.display = "none";
}

let humanScore = 0;
let computerScore = 0;

document.querySelector("#restart").addEventListener("click", resetGame);
const messagesDiv = document.querySelector("#game-messages");

setupUIButtons();
