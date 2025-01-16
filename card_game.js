"use strict";

const memoryCard = document.querySelector('memory-card');

// List of emoji for the cards    
const emoji = ['⛄', '⛳', '⭐', '🤓', '🙈', '🙉', '🙊', '👸', '🕺', '🧠', '😎', '😍', '😻', '😽','💍', '💻'];
let cards = [...emoji, ...emoji];// duplicate the emojis to create pairs

// Shuflle the cards 
function shuffle(array) {
  return array.sort(() => Math.random() -0.5);

}
//create the board
function createBoard() {
    cards = shuffle(cards);
    cards.forEach((emoji, index) => {
     const card = document.createElement ('div');
     card.classList.add('card');
     card.dataset.index = index;
     card.dataset.value = emoji;
     card.innerText ='?';
     memoryCard.appendChild(card);
    });
//flip cards logic
let flippedCards = [];
function flipCard(card) {
    if(flippedCards.length < 2) {
        card.classList.add('flip');
        flippedCards.push(card);
    if (flippedCards.length === 2) {
            checkForMatch();
        }
      }
    }
