function computerPlay() {
    const selector = ["rock","paper","scissors"];
    const randomSelector = Math.floor(Math.random() * selector.length);
    return (selector[randomSelector]);
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection,playerSelection) {
            switch(true) {
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


function game () {
     while (playerScore < 5 && computerScore < 5) {
        const computerSel = computerPlay();
        let playerSel = prompt("Rock, Paper, Scissors?");
        let playerSelLower = playerSel.toLowerCase();
        console.log(playRound(computerSel,playerSelLower));
        console.log(playerScore, computerScore);
         }
     }

           
game();