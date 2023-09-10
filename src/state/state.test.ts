import { shuffledDeck } from './deck';

// deck state logic tests
describe('Deck state', function() {
  it('should return a deck of 52 unique cards', function() {
    const deck = shuffledDeck();
    const cardCodes = deck.filter((el) => (el.code));
    const deckSet = new Set(cardCodes);
    expect(deckSet.size).toStrictEqual(52);
  });
});