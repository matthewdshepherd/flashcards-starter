class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectIds = [];
  }

  takeTurn(turn) {
    this.turnCount++;
    if (!turn.evaluateGuess()) {
      this.incorrectIds.push(this.returnCurrentCard().id)
    }
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }
}

module.exports = Round;

// Your Round class should meet the following requirements:

// returnCurrentCard: method that returns the current card being played

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.

// The turns count is updated, regardless of whether the guess is correct or incorrect

// The next card becomes current card

// Guess is evaluated / recorded.I ncorrect guesses will be stored(via the id) in an array of incorrectGuesses

// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’