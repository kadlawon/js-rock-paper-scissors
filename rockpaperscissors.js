function getComputerChoice() {
    options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

var computerPoints = 0;
var playerPoints = 0;

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (computerChoice == playerChoice) {
        console.log(`You tied with the computer. ${computerChoice} ties with ${playerChoice}`);
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`You won. ${computerChoice} beats ${playerChoice}`);
        playerPoints += 1;
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log(`You won. ${computerChoice} beats ${playerChoice}`);
        playerPoints += 1;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`You won. ${computerChoice} beats ${playerChoice}`);
        playerPoints += 1;
    }
    else {
        console.log(`The computer won. ${computerChoice} beats ${playerChoice}`);
        computerPoints += 1;
    }
};

function game() {
    for (i = 0; i < 5; i++) {
        playerChoice = prompt('Enter either rock, paper, or scissors.');
        playRound(playerChoice, getComputerChoice())
    }
    if (computerPoints > playerPoints) {
        console.log(`Computer won, with ${computerPoints} to ${playerPoints}.`);
    }
    else if (computerPoints < playerPoints) {
        console.log(`You won, with ${playerPoints} to ${computerPoints}.`);
    }
    else {
        console.log(`You tied, with ${computerPoints} to ${playerPoints}.`);
    }
}

game();
