document.addEventListener('DOMContentLoaded', () => {
  // Card array
  const cardArray = [
    { name: 'apple', img: '🍎' },
    { name: 'banana', img: '🍌' },
    { name: 'cherry', img: '🍒' },
    { name: 'grape', img: '🍇' },
    { name: 'lemon', img: '🍋' },
    { name: 'orange', img: '🍊' },
    { name: 'peach', img: '🍑' },
    { name: 'pear', img: '🍐' },
  ];

  const grid = document.getElementById('grid');
  const resultDisplay = document.getElementById('result');
  const congratulations = document.getElementById('congratulations');
  const restartButton = document.getElementById('restart');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let score = 0;

  // Duplicate and shuffle cards
  const gameCards = [...cardArray, ...cardArray].sort(() => 0.5 - Math.random());

  // Create the game board
  function createBoard() {
    grid.innerHTML = '';
    gameCards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.setAttribute('class', 'card');
      cardElement.setAttribute('data-id', index);

      const cardImage = document.createElement('div');
      cardImage.textContent = card.img;
      cardImage.classList.add('card-image');

      cardElement.appendChild(cardImage);
      cardElement.addEventListener('click', flipCard);
      grid.appendChild(cardElement);
    });

    // Show all cards for 3 seconds and then hide them
    setTimeout(hideAllCards, 3000);
  }

  // Hide all cards
  function hideAllCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => {
      card.firstChild.style.display = 'none';
    });
  }

  // Flip a card
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    if (cardsChosenId.includes(cardId) || cardsWon.includes(cardId)) return;

    this.firstChild.style.display = 'block';
    cardsChosen.push(gameCards[cardId]);
    cardsChosenId.push(cardId);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // Check for a match
  function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const [cardOneId, cardTwoId] = cardsChosenId;

    if (cardsChosen[0].name === cardsChosen[1].name) {
      alert('You found a match!');
      cards[cardOneId].style.visibility = 'hidden';
      cards[cardTwoId].style.visibility = 'hidden';
      cardsWon.push(cardOneId, cardTwoId);
      score++;
    } else {
      alert('Sorry, try again.');
      cards[cardOneId].firstChild.style.display = 'none';
      cards[cardTwoId].firstChild.style.display = 'none';
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = score;

    if (cardsWon.length === gameCards.length) {
      congratulations.classList.remove('hidden');
    }
  }

  // Reset the game
  function resetGame() {
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    score = 0;
    resultDisplay.textContent = score;
    congratulations.classList.add('hidden');
    createBoard();
  }

  restartButton.addEventListener('click', resetGame);

  // Initialize the game
  createBoard();
});
