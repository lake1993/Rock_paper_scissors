
function computerRound() {
    const selector = ["rock", "paper", "scissors"];
    const randomSelector = Math.floor(Math.random() * selector.length);
    return (selector[randomSelector]);
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
    switch (true) {
        case (computerSelection == "rock" && playerSelection == "rock"):
            drawRound("roundResult");
            scoreBorder();
            return "Draw!";
            break;
        case (computerSelection == "rock" && playerSelection == "paper"):
            playerScore++;
            scoreBorder();
            winRound("roundResult");
            return "Paper beats Rock. You Win!";
            break;
        case (computerSelection == "rock" && playerSelection == "scissors"):
            computerScore++;
            scoreBorder();
            loseRound("roundResult");
            return "Rock beats Scissors! You Lose!";
            break;
        case (computerSelection == "paper" && playerSelection == "rock"):
            computerScore++;
            scoreBorder();
            loseRound("roundResult");
            return "Paper beats Rock! You Lose!";
            break;
        case (computerSelection == "paper" && playerSelection == "paper"):
            drawRound("roundResult");
            scoreBorder();
            return "Draw!";
            break;
        case (computerSelection == "paper" && playerSelection == "scissors"):
            playerScore++;
            scoreBorder();
            winRound("roundResult");
            return "Scissors beats Paper! You Win!";
            break;
        case (computerSelection == "scissors" && playerSelection == "rock"):
            playerScore++;
            scoreBorder();
            winRound("roundResult");
            return "Rock beats Scissors! You Win!";
            break;
        case (computerSelection == "scissors" && playerSelection == "paper"):
            computerScore++;
            scoreBorder();
            loseRound("roundResult");
            return "Scissors beats Paper! You Lose!";
            break;
        case (computerSelection == "scissors" && playerSelection == "scissors"):
            drawRound("roundResult");
            scoreBorder();
            return "Draw!";
            break;
        default:
            return "Not a valid answer!";
            break;

    }
    
}

function result(playerSelection) {
    const computerSelection = computerRound();
            let roundResult = playRound(computerSelection, playerSelection);
            document.querySelector('.roundResult').textContent = roundResult;
            document.querySelector('.playerScore').textContent = playerScore;
            document.querySelector('.computerScore').textContent = computerScore;
}

function game() {
        document.querySelector('.rock').addEventListener('click', function() {
            let playerSelection = "rock";
            result(playerSelection);
        })
        document.querySelector('.paper').addEventListener('click', function() {
            let playerSelection = "paper";
            result(playerSelection);
            
        })
        document.querySelector('.scissors').addEventListener('click', function() {
            let playerSelection = "scissors";
            result(playerSelection);
        })
        
    }

function scoreBorder() {
    if (playerScore > computerScore) {
        winRound("yourscore")
        loseRound("compscore")
    } else if (playerScore == computerScore) {
        drawRound("yourscore") 
        drawRound("compscore")
    } else {
        loseRound("yourscore")
        winRound("compscore")
    } 
}




function winRound(changeBorder) {
    document.querySelector(`.${changeBorder}`).classList.add('win');
    document.querySelector(`.${changeBorder}`).classList.remove('lose');
    document.querySelector(`.${changeBorder}`).classList.remove('draw');
}

function drawRound(changeBorder) {
    document.querySelector(`.${changeBorder}`).classList.add('draw');
    document.querySelector(`.${changeBorder}`).classList.remove('win');
    document.querySelector(`.${changeBorder}`).classList.remove('lose');
}

function loseRound(changeBorder) {
    document.querySelector(`.${changeBorder}`).classList.add('lose');
    document.querySelector(`.${changeBorder}`).classList.remove('win');
    document.querySelector(`.${changeBorder}`).classList.remove('draw');
}


game();

