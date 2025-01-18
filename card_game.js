"use strict";

const memoryCard = document.getElementById('memoryCard');
let flippedCards = []
let lockedcard = false

// List of emoji for the cards    
const emoji = ['⛄', '⛳', '⭐', '🤓', '👸', '🕺', '🧠', '💍'];
let cards = [...emoji, ...emoji];// duplicate the emojis to create pairs

console.log(emoji)
console.log(cards)

// Shuflle the cards 
function shuffle(cards) {
  for (let i = 0; i < cards.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}
shuffle(cards)

function shuffle(array) {
 return array.sort(() => Math.random() - 0.5);
}
//create the board
function createBoard() {
  cards = shuffle(cards);
  cards.forEach((emoji) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = emoji;
    card.innerText = '?';
    memoryCard.appendChild(card);
  });
}
//flip cards logic
function flippedCard(card){
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {

    card.classList.add('flipped');
    card.innerText = card.dataset.value;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkForMatch();
    }
  }

  }
  //Check for match
  function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      flippedCards = []
    } else {
      lockedcard = true;
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerText = '?';
        card2.innerText = '?';
        flippedCards = [];
      }, 1000);
    }
  }
  //Add event listeners 
  function addEventListener() {
    document.querySelectorAll('.card').forEach((card => {
    card.addEventListener('click', () => flippedCard(card))
    }));
  }
  //Start the game
  function startGame() {
    createBoard();
    addEventListener();
  }
  startGame();
