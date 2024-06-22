// Computer logic for the game

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

    // 5. return the result
    return computerChoice;
}

console.log(getComputerChoice());
