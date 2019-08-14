const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function () {
    const turn = new Turn('Pineapple');
    expect(turn.currentGuess).to.equal('Pineapple')
  })

  it('should store an object',  () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('Pineapple', card);

    expect(turn.card).to.deep.equal(card)
  })

  it('should return guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Apples', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('Apples');

  })

  it('should return the card', () => {
    const card = new Card(4, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function', 'gravity'], 'object');
    const turn = new Turn('Peanut Butter', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  })

  it('should return a boolen indicating if the user’s guess matches the correct answer on the card', () => {
    const card = new Card(4, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function', 'gravity', 'cookie'], 'cookie');
    const turn1 = new Turn('Peanut Butter', card);
    const turn2 = new Turn('cookie', card);

    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);

  })

  it('should returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', () => {
    const card = new Card(4, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function', 'gravity', 'cookie'], 'cookie');
    const turn1 = new Turn('Peanut Butter', card);
    const turn2 = new Turn('cookie', card);

    turn1.giveFeedback();
    turn2.giveFeedback();

    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  })

});