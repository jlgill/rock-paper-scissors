//Prompt user for selection
let choice = prompt("Please enter your choice here");

//convert selection to lowercase
let playerChoice = choice.toLowerCase();

function getPlayerChoice() {
    if (playerChoice === "rock") {
        return 'rock';
    } else if (playerChoice === "paper") {
        return 'paper';
    } else if (playerChoice === "scissors") {
        return 'scissors';
    } else if (playerChoice === "atom bomb") {
        return 'atom bomb';
    } else {
        return "Not a valid value";
    }
}

function getComputerChoice() {
    const randomNumber = Math.random();
    const absoluteUnit = Math.floor(randomNumber * (3 - 1 + 1)) + 1;

    if (absoluteUnit === 1) {
        return "rock";
    } else if (absoluteUnit === 2) {
        return "paper";
    } else if (absoluteUnit === 3) {
        return "scissors";
    } else {
        return "Unknown";
    }
}

function playRound(getComputerChoice, getPlayerChoice) {
    if (getPlayerChoice === 'atom bomb') {
        return "You cheater, atom bomb always wins!";
    } else if (
        (getComputerChoice === "rock" && getPlayerChoice === "scissors") ||
        (getComputerChoice === "paper" && getPlayerChoice === "rock") ||
        (getComputerChoice === "scissors" && getPlayerChoice === "paper")
    ) {
        return "The computer wins";
    } else if (
        (getPlayerChoice === "rock" && getComputerChoice === "scissors") ||
        (getPlayerChoice === "paper" && getComputerChoice === "rock") ||
        (getPlayerChoice === "scissors" && getComputerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "It's a tie!";
    }
}


let player = getPlayerChoice();
let computer = getComputerChoice();

console.log('computer: ' + computer);
console.log('player: ' + player);

console.log(playRound(computer,player));

function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();

        console.log("Round " + (i + 1) + ":");
        console.log("Computer chose: " + computerChoice);
        console.log("Player chose: " + playerChoice);

        let result = playRound(computerChoice, playerChoice);

        if (result === "The computer wins") {
            computerScore++;
        } else if (result === "You win!") {
            playerScore++;
        }

        console.log(result);
        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);
        console.log("--------------------");
    }

    if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else if (computerScore < playerScore) {
        console.log("Player wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Call the function to play the game
playGame();