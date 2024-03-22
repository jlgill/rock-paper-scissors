let choice = prompt("Please enter your choice here");
let playerChoice = choice.toLowerCase();

function getPlayerChoice() {
    switch (playerChoice) {
        case "rock" :
            return 'rock';
            break;
        case "paper" :
            return 'paper';
            break;
        case "scissors" :
            return 'scissors' ;
            break;
        default :
            return "Unknown"
    }
    return playerChoice;
}

function getComputerChoice() {
    const randomNumber = Math.random();

    const absoluteUnit = Math.floor(randomNumber * (3-1+1))+1;

    switch (absoluteUnit) {
        case 1 :
            return "rock";
            break;
        case 2 :
            return "paper";
            break;
        case 3 :
            return "scissors";
            break;
        default:
            return "Unknown";
    }
    return absoluteUnit;
}

function playRound (getComputerChoice, getPlayerChoice) {

    if (getComputerChoice === getPlayerChoice) {
        return "It's a tie!";
    } else if (
        (getComputerChoice === "rock" && getPlayerChoice === "scissors" ) ||
        (getComputerChoice === "paper" && getPlayerChoice === "rock" ) ||
        (getComputerChoice === "scissors" && getPlayerChoice === "paper" )
    ) {
        return "The computer wins";
    } else {
        return "You win!";
    }
}

let player = getPlayerChoice();
let computer = getComputerChoice();

console.log(computer);
console.log(player);

console.log(playRound(computer,player));