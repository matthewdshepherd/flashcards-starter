class Deck {
  constructor(cardObj) {
    this.cards = cardObj
  }

  countCards() {
    return this.cards.length;
  }

}

module.exports = Deck;

// deck.countCards(); // => 3