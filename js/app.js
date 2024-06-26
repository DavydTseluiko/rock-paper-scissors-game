let computerScore = 0;
let humanScore = 0;

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

// Take choice from user and start the round
const playButtons = document.querySelectorAll("button");

for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", (event) =>
    playRound(getComputerChoice(), event.target.textContent)
  );
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
    console.log(
      `You lose! ${capitalizedComputerOutput} beats ${capitalizedHumanOutput}`
    );
    return "Computer";
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    console.log(
      `You won! ${capitalizedHumanOutput} beats ${capitalizedComputerOutput}`
    );
    return "Human";
  } else {
    console.log(
      `You tied! ${capitalizedHumanOutput} does not beat ${capitalizedComputerOutput}`
    );
    return "Nobody";
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let roundFunctionValue = playRound(computerSelection, humanSelection);

    if (roundFunctionValue === "Human") {
      humanScore++;
    } else if (roundFunctionValue === "Computer") {
      computerScore++;
    }
  }

  if (computerScore > humanScore) {
    console.log(
      `Computer won the game! You had ${humanScore} points while computer had ${computerScore}.`
    );
  } else if (computerScore < humanScore) {
    console.log(
      `You won the game! You had ${humanScore} points while computer had ${computerScore}.`
    );
  } else {
    console.log(`It's a tie! You both had ${humanScore} points.`);
  }
}
