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

// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.

module.exports = Turn;