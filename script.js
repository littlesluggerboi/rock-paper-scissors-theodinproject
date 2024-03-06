let playerScore = 0, computerScore = 0;
const blankImage =    document.querySelector('#user').children[1];
console.log(blankImage);
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function updateScores() {
    const score = document.querySelector('.score');
    score.textContent = `${playerScore}\t:\t${computerScore}`;
}
function formateOutput(playerChoice, computerChoice, text) {
    const result = document.querySelector('.moves');
    if (text === 'tie') {
        result.textContent = `It's a TIE! Both of you chose ${playerChoice.toUpperCase()}`;
    } else if (text === 'win') {
        result.textContent = `You WIN! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
        playerScore++;
    } else {
        result.textContent = `You LOSE! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}.`;
        computerScore++;
    }
    updateScores();
    if(playerScore === 5 || computerScore ===5){
        resetScores();
        result.textContent = 'GAME OVER';
        updateScores();
    } 
}
function resetScores(){
    playerScore =0;
    computerScore=0;
}

function play(e) {
    const playerImage = document.querySelector('#user').children[1];
    const computerImage = document.querySelector('#computer').children[1];
    const playerChoice = e.target;
    playerImage.src = `./images/${playerChoice.id}.jpg`;
    playerImage.alt = `${playerChoice.alt}`;
    const computerChoice = document.querySelector('.choices').children[random(0, 3)].querySelector('img');
    computerImage.src = computerChoice.src;
    computerImage.alt = computerChoice.alt;
    if (playerChoice.id === computerChoice.id) {
        formateOutput(playerChoice.id, computerChoice.id, 'tie');
    } else if (playerChoice.id === 'rock' && computerChoice.id === 'scissors') {
        formateOutput(playerChoice.id, computerChoice.id, 'win')
    } else if (playerChoice.id === 'paper' && computerChoice.id === 'rock') {
        formateOutput(playerChoice.id, computerChoice.id, 'win')
    } else if (playerChoice.id === 'scissors' && computerChoice.id === 'paper') {
        formateOutput(playerChoice.id, computerChoice.id, 'win')
    } else {
        formateOutput(playerChoice.id, computerChoice.id, 'lose')
    }
}

function removeTransition(e) {
    e.target.classList.remove('pressed');
}

function addTransition(e) {
    const key = e.target;
    key.classList.add('pressed');
}

for (let button of document.querySelectorAll('.choice')) {
    button.addEventListener('click', play);
    button.addEventListener('mouseover', addTransition);
    button.addEventListener('mouseout', removeTransition);
}

