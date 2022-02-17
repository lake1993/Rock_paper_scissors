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
                    return "Paper beats Rock. You Win!";
                    playerScore++;
                    break;
                case (computerSelection == "rock" && playerSelection == "scissors"):
                    return "Rock beats Scissors! You Lose!";
                    computerScore++;
                    break;
                case (computerSelection == "paper" && playerSelection == "rock"):
                    return "Paper beats Rock! You Lose!";
                    computerScore++;
                    break;
                case (computerSelection == "paper" && playerSelection == "paper"):
                    return "Draw!";
                    break;
                case (computerSelection == "paper" && playerSelection == "scissors"):
                    return "Scissors beats Paper! You Win!";
                    playerScore++;
                    break;
                case (computerSelection == "scissors" && playerSelection == "rock"):
                    return "Rock beats Scissors! You Win!";
                    playerScore++;
                    break;
                case (computerSelection == "scissors" && playerSelection == "paper"):
                    return "Scissors beats Paper! You Lose!";
                    computerScore++;
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
     while (playerScore < 5 || computerScore < 5) {
        let playerSel = prompt("Rock, Paper, Scissors?");
        let playerSelLower = playerSel.toLowerCase();
        console.log(playRound(computerSel,playerSelLower));
        console.log(playerScore, computerScore);
         }
     }

           
const computerSel = computerPlay();




game();