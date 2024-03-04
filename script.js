let playerScore =0, computerScore =0;
const CHOICES = ['rock', 'paper', 'scissors'];
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    return CHOICES[random(0, CHOICES.length)];
}

function playerSelection() {
    let choice = prompt('Choice?', 'Rock, Paper, Scissors?');
    choice = choice.toLowerCase();
    return choice;
}
// rock paper scissors
// rock > scissors
// paper > rock
// scissors > paper
function play() {
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection();
    console.log(`player: ${playerChoice}\ncomputer:${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log(`It's a tie. ${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}.`);
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        formateOutput(playerChoice, computerChoice, 'win')
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        formateOutput(playerChoice, computerChoice, 'win')
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        formateOutput(playerChoice, computerChoice, 'win')
    } else {
        formateOutput(playerChoice, computerChoice, 'lose')
    }
}

function formateOutput(playerChoice, computerChoice, text) {
    if (text === 'win') {
        console.log(`You Win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
        playerScore++;
    }else{
        console.log(`You Lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}.`);
        computerScore++;

    }
}
function playGame(){
    play();
    play();
    play();
    play();
    play();
    console.log(`Final Score\nPlayer: ${playerScore} vs ${computerScore} : Computer`)
}