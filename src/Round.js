const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectIds = [];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turnCount++;
    if (!turn.evaluateGuess()) {
      this.incorrectIds.push(this.returnCurrentCard().id)
    }
    return turn.giveFeedback()
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  calculatePercentCorrect() {
    let percent = (this.turnCount - this.incorrectIds.length)/this.turnCount
    return percent === 0 ? 0 : parseInt((percent * 100).toFixed(0))
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round;