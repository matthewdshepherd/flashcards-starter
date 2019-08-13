class Turn {
  constructor(currentGuess, currentCardObj) {
    this.currentGuess = currentGuess;
    this.card = currentCardObj;
  }
  
  returnGuess() {
    return this.currentGuess;
  }
  
  returnCard() {
    return this.card
  }

  evaluateGuess() {
    return this.currentGuess === this.card.correctAnswer ? true : false
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect'
  }

}


module.exports = Turn;