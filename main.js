const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const resultMessage = document.getElementById('result-message');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const resetButton = document.getElementById('reset-button');
const historyList = document.getElementById('history-list');

let playerScore = 0;
let computerScore = 0;

const options = ['pedra', 'papel', 'tesoura'];

function playGame(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    playerChoiceDisplay.textContent = `Sua escolha: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Escolha do computador: ${computerChoice}`;

    let result = '';
    if (playerChoice === computerChoice) {
        result = "Empate!";
    } else if (
        (playerChoice === 'Pedra' && computerChoice === 'Tesoura') ||
        (playerChoice === 'Papel' && computerChoice === 'Pedra') ||
        (playerChoice === 'Tesoura' && computerChoice === 'Papel')

    ) {
        result = 'Você venceu!';
        playerScore++;
    } else {
        result = 'Você perdeu!';
        computerScore++;
    }

resultMessage.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    addToHistory(playerChoice, computerChoice, result);
}

function addToHistory(playerChoice, computerChoice, result) {
    const historyItem = document.createElement('li');
    historyItem.textContent = `Você escolheu ${playerChoice}, o computador escolheu ${computerChoice}. Resultado: ${result}`;
    
    historyList.prepend(historyItem);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultMessage.textContent = 'Placar reiniciado! Escolha uma opção para começar!';
    
    historyList.innerHTML = '';
}

rockButton.addEventListener('click', () => playGame('Pedra'));
paperButton.addEventListener('click', () => playGame('Papel'));
scissorsButton.addEventListener('click', () => playGame('Tesoura'));
resetButton.addEventListener('click', resetGame);