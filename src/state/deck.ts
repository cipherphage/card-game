import { createDeck, shuffle } from '../utils/deck';

export const defaultDeck: deck = {
  success: true,
  deck_id: 'default-deck',
  cards: [],
  remaining: 52
};

export const shuffledDeck = function() {
  let deck = createDeck();
  let shuffledDeck = shuffle(deck);
  return shuffledDeck;
};