// Track scores
let playerScore = 0;
let computerScore = 0;

// Handle user choice
function handleUserChoice(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = decideWinner(playerChoice, computerChoice);

  updateUI(playerChoice, computerChoice, result);
  updateScores(result);
}

// Get random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Decide winner
function decideWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Update UI
function updateUI(playerChoice, computerChoice, result) {
  document.getElementById('player-choice').textContent = capitalize(playerChoice);
  document.getElementById('computer-choice').textContent = capitalize(computerChoice);

  const resultMessage = document.getElementById('result-message');
  if (result === "win") {
    resultMessage.textContent = "You Win!";
    resultMessage.className = "winning";
  } else if (result === "lose") {
    resultMessage.textContent = "You Lose!";
    resultMessage.className = "losing";
  } else {
    resultMessage.textContent = "It's a Tie!";
    resultMessage.className = "";
  }
}

// Update scores
function updateScores(result) {
  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

// Reset game
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('player-choice').textContent = "-";
  document.getElementById('computer-choice').textContent = "-";
  document.getElementById('result-message').textContent = "Make your choice!";
  document.getElementById('result-message').className = "";
}

// Capitalize string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add event listeners
document.getElementById('rock').addEventListener('click', () => handleUserChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handleUserChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handleUserChoice('scissors'));
document.getElementById('reset').addEventListener('click', resetGame);
