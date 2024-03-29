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

function playerPlay() {
    var playerSelection = prompt("Choose rock, paper or scissors.").toLowerCase();
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
    } else {
        console.log("Sorry, but you seem to have mistyped that, try again.");
        return playerPlay()
    }
}

function game() {
    var i = 1;
    var playerScore = 0;
    var computerScore = 0;
    while (i<6 || playerScore==computerScore) {
        if(i >= 6) {
            console.log("Equal points after 5th round. Playing another one!");
        }
        console.log("Round " + i);
        var roundResult = playRound(playerScore, computerScore);
        console.log(roundResult[0])
        playerScore = roundResult[1];
        computerScore = roundResult[2];
        i++;
    };
    if(playerScore > computerScore) {
        return "You win " + playerScore + ":" + computerScore + "!"
    } else {
        return "You lose " + playerScore + ":" + computerScore + "!"
    }
}

function playRound(playerScore, computerScore) {
    var computerSelection = computerPlay();
    var playerSelection =  playerPlay();
    var playerWins = ((playerSelection === "rock") && (computerSelection === "scissors")) ||
        ((playerSelection === "paper") && (computerSelection === "rock")) ||
        ((playerSelection === "scissors") && (computerSelection === "paper"));
    var itIsADraw = playerSelection === computerSelection;
    if (playerWins) {
        playerScore++;
        return ["You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + 
            " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1), playerScore, computerScore];
    } else if (itIsADraw) {
        return ["It is a draw!", playerScore, computerScore]
    } else {
        computerScore++;
        return ["You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + 
            " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1), playerScore, computerScore];
    }
}

console.log(game());