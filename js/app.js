const playButtons = document.querySelectorAll("img");
const result = document.querySelector(".result");

const humanScoreItem = document.querySelector(".human-score");
const computerScoreItem = document.querySelector(".computer-score");

let computerScore = 0;
let humanScore = 0;

humanScoreItem.textContent = `Your score: ${humanScore}`;
computerScoreItem.textContent = `Computer score: ${computerScore}`;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  let computerChoice;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function defineWinner() {
  if (computerScore === 5 && humanScore === 5) {
    result.textContent = `It's a tie! You both had ${humanScore} points.`;
    computerScore = 0;
    humanScore = 0;
  } else if (computerScore === 5) {
    result.textContent = `Computer won the game! You had ${humanScore} points while computer had ${computerScore}.`;
    computerScore = 0;
    humanScore = 0;
  } else if (humanScore === 5) {
    result.textContent = `You won the game! You had ${humanScore} points while computer had ${computerScore}.`;
    computerScore = 0;
    humanScore = 0;
  }
}

function playRound(computerChoice, humanChoice) {
  let capitalizedComputerOutput =
    computerChoice[0].toUpperCase() + computerChoice.slice(1);
  let capitalizedHumanOutput =
    humanChoice[0].toUpperCase() + humanChoice.slice(1);

  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    result.textContent = `You lose! ${capitalizedComputerOutput} beats ${capitalizedHumanOutput}`;
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    humanScore++;
    result.textContent = `You won! ${capitalizedHumanOutput} beats ${capitalizedComputerOutput}`;
  } else {
    result.textContent = `You tied! ${capitalizedHumanOutput} does not beat ${capitalizedComputerOutput}`;
    humanScore++;
    computerScore++;
  }

  humanScoreItem.textContent = `Your score: ${humanScore}`;
  computerScoreItem.textContent = `Computer score: ${computerScore}`;

  defineWinner();
}

for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", (e) => {
    playRound(getComputerChoice(), e.target.classList.value);
  });
}
