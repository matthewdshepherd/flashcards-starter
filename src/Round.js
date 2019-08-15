const Turn = require('../src/Turn');
const Game = require('../src/Game');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectIds = [];
    this.startTime = Date.now();
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
    let totalTime = (Date.now() - this.startTime)/1000
    console.log(totalTime)
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${totalTime} seconds!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! in ${totalTime} seconds!`
  }

}

module.exports = Round;