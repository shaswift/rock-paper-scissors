// Get references to the buttons, result element, and scores display
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Add event listeners to the buttons
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// Function to determine the winner for a single round
function playRound(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    let roundResult;

    if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        roundResult = "You win!";
        playerScore++;
    } else {
        roundResult = "You lose!";
        computerScore++;
    }

    resultDiv.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${roundResult}`;
    updateScores();
    checkGameEnd();
}

// Function to update the scores display
function updateScores() {
    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

// Function to check if the game is over
function checkGameEnd() {
    const maxScore = 5;

    if (playerScore === maxScore || computerScore === maxScore) {
        if (playerScore === maxScore && computerScore === maxScore) {
            resultDiv.textContent = "It's a tie! Game Over.";
        } else if (playerScore === maxScore) {
            resultDiv.textContent = "Congratulations! You won the game!";
        } else {
            resultDiv.textContent = "Oops! Computer won the game!";
        }
        disableButtons();
    }
}

// Function to disable buttons when the game is over
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
