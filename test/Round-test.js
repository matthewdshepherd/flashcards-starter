const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

const Round = require('../src/Round');

describe('Round', function () {

  it('should be a function', function () {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to take in an instance of deck', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck)
  })

  it.skip('should be to return the the current card being played', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard()
    expect(returnCurrentCard).to.equal(card1)
  })

  it('should be to create a new turn instance', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('sea otter', card1);

    round.takeTurn(turn)
    expect(round.turnCount).to.equal(1)
    round.takeTurn(turn)
    expect(round.turnCount).to.equal(2)
  })
  
  it('should be to able to return current card', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('sea otter', card1);

    expect(round.turnCount).to.equal(0);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    round.takeTurn(turn);
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  })

  it('should be to able to evaluate guess', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn1 = new Turn('capybara', card1);
    const turn2 = new Turn('gallbladder', card2);

    round.takeTurn(turn1);
    expect(turn1.evaluateGuess()).to.equal(false)
    
    round.takeTurn(turn2);
    expect(turn2.evaluateGuess()).to.equal(true)
  })

  it('should be to able to add incorrect guess object id to array', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn1 = new Turn('capybara', card1);
    const turn2 = new Turn('gallbladder', card2);

    round.takeTurn(turn1);
    expect(turn1.evaluateGuess()).to.equal(false)
    expect(round.incorrectIds.length).to.equal(1)

    round.takeTurn(turn2);
    expect(turn2.evaluateGuess()).to.equal(true)
    expect(round.incorrectIds.length).to.equal(1)
  })
  
});
