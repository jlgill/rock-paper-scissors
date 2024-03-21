let choice = prompt("Please enter your choice here");
let playerChoice = choice.toLowerCase();

function convertPlayerChoice() {
    switch (playerChoice) {
        case "rock" :
            return 1;
            break;
        case "paper" :
            return 2;
            break;
        case "scissors" :
            return 3;
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

function playRound (absoluteUnit, playerChoice) {

    switch (absoluteUnit) {
        case absoluteUnit >= playerChoice :
            return "The computer wins" ;
            break;
        default:
            return "You win!"
    }

}

console.log(getComputerChoice())