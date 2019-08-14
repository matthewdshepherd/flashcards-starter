const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cardsArray = [];
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.cardsArray = prototypeQuestions.map(function(cardObj) {
      const card = new Card(cardObj.id, cardObj.question, cardObj.answers, cardObj.correctAnswer); 
      return card;
    });

    const deck = new Deck(this.cardsArray);
    const round = new Round(deck)

    this.printMessage(deck, round);
    this.printQuestion(round) 
  }


}

module.exports = Game;