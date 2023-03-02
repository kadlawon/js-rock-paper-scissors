function getComputerChoice() {
    options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

var computerPoints = 0;
var playerPoints = 0;

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (computerChoice == playerChoice) {
        alert(`You tied with the computer. ${computerChoice} ties with ${playerChoice}`);
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        alert(`You won. ${computerChoice} beats ${playerChoice}`);
        playerPoints += 1;
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        alert(`You won. ${computerChoice} beats ${playerChoice}`);
        playerPoints += 1;
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        alert(`You won. ${computerChoice} beats ${playerChoice}`);
        playerPoints += 1;
    }
    else {
        alert(`The computer won. ${computerChoice} beats ${playerChoice}`);
        computerPoints += 1;
    }
};

function game() {
    for (i = 0; i < 5; i++) {
        playerChoice = prompt('Enter either rock, paper, or scissors.');
        playRound(playerChoice, getComputerChoice())
    }
    if (computerPoints > playerPoints) {
        alert(`Computer won, with ${computerPoints} to ${playerPoints}.`);
    }
    else if (computerPoints < playerPoints) {
        alert(`You won, with ${playerPoints} to ${computerPoints}.`);
    }
    else {
        alert(`You tied, with ${computerPoints} to ${playerPoints}.`);
    }
}

game();
