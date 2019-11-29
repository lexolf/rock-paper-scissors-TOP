function computerPlay() {
    var generatedNumber = Math.floor(Math.random()*3);
    if (generatedNumber == 0) {
        return 'rock'
    } else if (generatedNumber == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function startGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', playerPlay));
};

function playerPlay(){
    var playerSelection = this.id;
    var roundResult = playRound(playerSelection);
    renderDiv(roundResult);
}

function playRound(playerSelection) {
    playerScoreSpan = document.getElementById("player-score");
    computerScoreSpan = document.getElementById("computer-score");
    var playerScore = playerScoreSpan.textContent;
    var computerScore = computerScoreSpan.textContent;
    if(playerScore == 5){
        return ["You win the game!"]
    } else if (computerScore == 5){
        return ["Computer wins the game!"]
    }
    var computerSelection = computerPlay();
    var playerWins = ((playerSelection === "rock") && (computerSelection === "scissors")) ||
        ((playerSelection === "paper") && (computerSelection === "rock")) ||
        ((playerSelection === "scissors") && (computerSelection === "paper"));
    var itIsADraw = playerSelection === computerSelection;
    if (playerWins) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        return ["You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + 
            " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)];
    } else if (itIsADraw) {
        return ["It is a draw!"]
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        return ["You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + 
            " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)];
    }
}

function renderDiv(roundResult){
    const container = document.querySelector('#container');
    const resultsDiv = document.createElement('div');
    resultsDiv.classList.add('round-result');
    resultsDiv.textContent = roundResult[0];
    container.appendChild(resultsDiv);
}

startGame();