// Function to handle user input
function handleUserChoice(playerChoice) {
    console.log(`Player chose: ${playerChoice}`);
    playGame(playerChoice); // Proceed to play the game
  }
  
  // Function for computer's random choice
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Function to compare choices and decide the winner
  function decideWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  // Main game function
  function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);
    
    const result = decideWinner(playerChoice, computerChoice);
    console.log(result);
    
    // Display the result on the webpage
    document.getElementById('result').textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
  }
  
  // Add event listeners to buttons
  document.getElementById('rock').addEventListener('click', () => handleUserChoice('rock'));
  document.getElementById('paper').addEventListener('click', () => handleUserChoice('paper'));
  document.getElementById('scissors').addEventListener('click', () => handleUserChoice('scissors'));
  