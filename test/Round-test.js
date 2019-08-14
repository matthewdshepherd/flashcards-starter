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

  it('should be able to create a new turn instance', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    

    round.takeTurn('sea otter')
    expect(round.turnCount).to.equal(1)
    round.takeTurn('appendix')
    expect(round.turnCount).to.equal(2)
  })
  
  it('should be to able to return current card', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turnCount).to.equal(0);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  })

  it('should be to able to add incorrect guess object id to array', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('capybara');
    expect(round.incorrectIds.length).to.equal(1)
    round.takeTurn('gallbladder');
    expect(round.incorrectIds.length).to.equal(1)
  })

  it('should be to able to return correct or incorrect', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);


    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.incorrectIds.length).to.equal(0)
    expect(round.takeTurn('appendix')).to.equal('incorrect!')
    expect(round.incorrectIds.length).to.equal(1)
  })

  it('should be to able to calcualte percentage correct', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('capybara');
    expect(round.calculatePercentCorrect()).to.equal(0)
    round.takeTurn('gallbladder');
    expect(round.calculatePercentCorrect()).to.equal(50)
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(67)

  })

  it('should be to able to console log the percentage of corect answers at the end of the game', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(67)
    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  })
  
});

 