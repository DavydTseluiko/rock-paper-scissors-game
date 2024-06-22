// * Variables to keep track of the score
let computerScore = 0;
let humanScore = 0;

// * Computer logic for the game

// 1. Create a function for computer logic
function getComputerChoice() {
    // 2. Generate random number from 1 to 3 and store it in the variable
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // 3. Declare a variable for computer choice
    let computerChoice;

    // 4. Then if random number equal to  1 - "rock", 2 - "paper", 3 - "scissors" and assign ot the variable of computer choice
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

    // 5. Return the result
    return computerChoice;
}

// * Human choice

// 1. Create a function
function getHumanChoice() {
    // 2. Ask user for his choice and store it in the variable and convert it to lowercase
    // 3. If choice is not "rock", "paper" or "scissors" go to step 2
    // ! It's possible to combine 2 previous steps in 1 and realize it with do while loop
    let userChoice;
    do {
        userChoice = prompt(
            `Enter "rock", "paper" or "scissors"`
        ).toLowerCase();
    } while (
        userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors"
    );

    // 4. Return the result of the function
    return userChoice;
}

// * Logic of the round

// 1. Create a function that takes computer and human choices as arguments
function playRound(computerChoice, humanChoice) {
    // ! These two variables below created in order to make output capitalized
    let capitalizedComputerOutput =
        computerChoice[0].toUpperCase() + computerChoice.slice(1);
    let capitalizedHumanOutput =
        humanChoice[0].toUpperCase() + humanChoice.slice(1);

    // 2. Write rules of the game and output the result
    //      rock - beat scissors, and lose to paper
    //      paper - beat rock, and lose to scissors
    //      scissors - beat paper, and lose to rock
    // 3. Increase score of winner
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

// * Write logic to play entire game

// 1. Create a function
// 2. Call function playRound five times
// 3. Keep track of the scores and print them
// 4. Return a winner

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);
