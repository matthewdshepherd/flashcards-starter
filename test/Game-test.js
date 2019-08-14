const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function () { 

  it('should be a function', function () {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a start method', () => {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });

  it('should have a start method that creates cards', () => {
    const game = new Game();

    game.start();

    expect(game.cardsArray.length).to.equal(30)
  });

  it.skip('should have a start method that puts cards in deck', () => {
    const game = new Game();
  
    game.start();

    expect(deck.cards.length).to.equal(30)
    expect(deck.countCards()).to.equal(30)
  });

  it.skip('should have a start method that puts deck in round', () => {
    const game = new Game();

    expect(game.start().round).to.be.an.instanceof(Round);
  });



})

