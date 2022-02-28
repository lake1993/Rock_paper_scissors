function computerPlay() {
    const selector = ["rock", "paper", "scissors"];
    const randomSelector = Math.floor(Math.random() * selector.length);
    return (selector[randomSelector]);
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
    switch (true) {
        case (computerSelection == "rock" && playerSelection == "rock"):

            return "Draw!"
            break;
        case (computerSelection == "rock" && playerSelection == "paper"):
            playerScore++;
            return "Paper beats Rock. You Win!";
            break;
        case (computerSelection == "rock" && playerSelection == "scissors"):
            computerScore++;
            return "Rock beats Scissors! You Lose!";
            break;
        case (computerSelection == "paper" && playerSelection == "rock"):
            computerScore++;
            return "Paper beats Rock! You Lose!";
            break;
        case (computerSelection == "paper" && playerSelection == "paper"):
            return "Draw!";
            break;
        case (computerSelection == "paper" && playerSelection == "scissors"):
            playerScore++;
            return "Scissors beats Paper! You Win!";
            break;
        case (computerSelection == "scissors" && playerSelection == "rock"):
            playerScore++;
            return "Rock beats Scissors! You Win!";
            break;
        case (computerSelection == "scissors" && playerSelection == "paper"):
            computerScore++;
            return "Scissors beats Paper! You Lose!";
            break;
        case (computerSelection == "scissors" && playerSelection == "scissors"):
            return "Draw!";
            break;
        default:
            return "Not a valid answer!";
            break;

    }
}

function result(playerSel) {
    const computerSel = computerPlay();
            let roundResult = playRound(computerSel, playerSel);
            document.querySelector('.roundResult').textContent = roundResult;
            document.querySelector('.playerScore').textContent = playerScore;
            document.querySelector('.computerScore').textContent = computerScore;
            console.log(`Your Score is ${playerScore}.`, `    Computer's Score is ${computerScore}`)
}

function game() {

    

        document.querySelector('.rock').addEventListener('click', function() {
            let playerSel = "rock";
            result(playerSel);
        
    })

        document.querySelector('.paper').addEventListener('click', function() {
            let playerSel = "paper";
            result(playerSel);
            
        })

        document.querySelector('.scissors').addEventListener('click', function() {
            let playerSel = "scissors";
            result(playerSel);
        })

    if (computerScore == 5) {
        alert("You Lose!");
    }

    if (playerScore == 5) {
        alert("You Win!");
    }
}

game();

