import { getCardValue } from "./card";

// use all capital letters because this is what the 3rd party API does
export const cardSuits = ['HEARTS', 'DIAMONDS', 'CLUBS', 'SPADES'];

export const faceCheck = (num: number) => ( num > 10 ? true : false );
export const face = function(num: number) {
  if (num === 11) {
    return 'J';
  } else if (num === 12) {
    return 'Q';
  } else if (num === 13) {
    return 'K';
  } else if (num === 14) {
    return 'A';
  } else {
    // TODO create better error handling
    throw new Error('Parameter should be an integer between 11 and 14 inclusive!'); 
  }
};

// create a deck of cards
export const createDeck = function() {
  let deck: card[] = [];

  cardSuits.forEach((suit) => {
    for (let i = 2; i < 15; i++) {
      const fc = faceCheck(i);
      const iString = i.toString();
      const value = fc ? face(i) : iString;
      const suitCode = getCardValue(suit);
      const code = value + suitCode;

      deck.push({
        image: undefined,
        images: null,
        value: value, 
        suit: suit,
        code: code
      });
    }
  });

  return deck;
}

export const getRandomVal = function(i: number) {
  return Math.floor(Math.random() * (i + 1));
};


// use Fisher-Yates shuffle
export const shuffle = function(a: card[]) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = getRandomVal(i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a
}