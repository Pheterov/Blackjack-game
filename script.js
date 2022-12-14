"use strict";
let firstCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

let player = {
  name: "Per",
  chips: 145,
  sayHello: function () {
    console.log("Heisann!");
  },
};

player.sayHello();

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandom() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  firstCard = getRandom();
  secondCard = getRandom();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = `Do you want to draw a new card?`;
  } else if (sum === 21) {
    message = `You've got a Blackjack!`;
    hasBlackJack = true;
  } else {
    message = `You're out of the game!`;
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandom();
    sum += card;
    cards.push(card);
    sumEl.textContent = `Sum: ${sum}`;
    renderGame();
  }
}
