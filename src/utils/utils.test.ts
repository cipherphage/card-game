import { apiStrings, sendRequest } from "./api";
import { getCardValue } from "./card";
import { cardSuits, createDeck, face, faceCheck, getRandomVal, shuffle } from "./deck";
import { cardCount, isBlackjack, isOver, isWin } from "./game";
import { testDeck } from "./testing";

// API util tests
// TODO mock the requests
// describe('Successful API request', function() {
//   it('should return expected deck data successfully', async function() {
//     const url = apiStrings.deckStartUrl + apiStrings.shuffle + apiStrings.drawFour;

//     try {
//       const response = await sendRequest(url);

//       expect(response.ok).toStrictEqual(true);

//       const deck: deck = await response.json();
      
//       expect(deck.success).toStrictEqual(true);
//       expect(deck.cards.length).toStrictEqual(4);
//       expect(deck.remaining).toStrictEqual(48);

//     } catch (error) {
//      expect(error).rejects.toThrow();
//     }      
//   });
// });

// describe('Unsuccessful API request', function() {
//   it('should return expected error on bad URL', async function() {
//     const url = '';

//     try {
//       const response = await sendRequest(url);

//     } catch (error) {

//       expect(error.message).toStrictEqual('Network request failed');
//       expect().rejects.toThrow();
//     }
//   });
// });

// card util tests
describe('Calling getCardValue', function() {
  it('should return first character of valid strings', function() {
    const testString1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const testString2 = '';
    const testString3 = '0123456789';
    const testString4 = '0';
    const testString5 = '10';
    const testArray = [
      [testString1, 'A'],
      [testString2, ''],
      [testString3, '0'],
      [testString4, '0'],
      [testString5, '10']
    ];

    testArray.forEach(function(test) {
      const testVal = getCardValue(test[0]);
      expect(testVal).toStrictEqual(test[1]);
    });
  });
});

// deck util tests
describe('Calling faceCheck', function() {
  it('should return true for number greater than 10, else false', function() {
    const testArray = [
      { test: -1, expected: false },
      { test: 11, expected: true },
      { test: 10, expected: false },
      { test: 9, expected: false },
      { test: 0, expected: false }
    ];

    testArray.forEach(function(test) {
      const testVal = faceCheck(test.test);
      expect(testVal).toStrictEqual(test.expected);
    });
  });
});

describe('Calling face', function() {
  it('should return string value of face card or throw error', function() {
    const testArray = [
      { test: 11, expected: 'J' },
      { test: 12, expected: 'Q' },
      { test: 13, expected: 'K' },
      { test: 14, expected: 'A' }
    ];

    testArray.forEach(function(test) {
      const testVal = face(test.test);
      expect(testVal).toStrictEqual(test.expected);
    });

    expect(() => { face(10); }).toThrow('Parameter should be an integer between 11 and 14 inclusive!');
  });
});

describe('Calling createDeck', function() {
  it('should return a deck of 52 cards', function() {
    const deck = createDeck();

    expect(deck.length).toStrictEqual(52);
  });

  it('should return a deck of 52 unique cards', function() {
    const deck = createDeck();
    const cardCodes = deck.filter((el) => (el.code));
    const deckSet = new Set(cardCodes);
    expect(deckSet.size).toStrictEqual(52);
  });

  it('should return a sorted deck', function() {
    const deck = createDeck();
    const h = deck.slice(0, 13);
    const d = deck.slice(13, 26);
    const c = deck.slice(26, 39);
    const s = deck.slice(39, 52);
    const testSuitArrays = [h, d, c, s];

    expect(deck.length).toStrictEqual(52);
    cardSuits.forEach(function(suit, i) {
      expect(testSuitArrays[i].reduce((a, c) => (a && (c.suit === suit)), true)).toStrictEqual(true);
    });
  });

  it('should return a deck of cards only containing certain valid values', function() {
    const deck = createDeck();
    const validValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const testValues = deck.reduce(function(a, c) {
      return a && validValues.includes(c.value);
    }, true);

    expect(testValues).toStrictEqual(true);
  });

  it('should return a deck of cards only containing certain valid suits', function() {
    const deck = createDeck();
    
    const testValues = deck.reduce(function(a, c) {
      return a && cardSuits.includes(c.suit);
    }, true);

    expect(testValues).toStrictEqual(true);
  });
});

describe('Calling getRandomVal', function() {
  it('should return a random integer value between 0 and 52 when range provided is 0:53', function() {
    for (let i = 52; i > 0; i--) {
      let testRand = getRandomVal(i);
      expect(Number.isInteger(testRand)).toStrictEqual(true);
      expect(testRand <= 52).toStrictEqual(true);
      expect(testRand >= 0).toStrictEqual(true);
    }
  });
});

describe('Calling shuffle', function() {
  it('should return a 52 card deck that is not entirely sorted by value and suit when provided with a sorted deck', function() {
    const sortedDeck = createDeck();
    const shuffled = shuffle(sortedDeck);
    const h = shuffled.slice(0, 13);
    const d = shuffled.slice(13, 26);
    const c = shuffled.slice(26, 39);
    const s = shuffled.slice(39, 52);
    const testSuitArrays = [h, d, c, s];

    expect(shuffled.length).toStrictEqual(52);
    cardSuits.forEach(function(suit, i) {
      expect(testSuitArrays[i].reduce((a, c) => (a && (c.suit === suit)), true)).toStrictEqual(false);
    });
  });
});

// game util tests
// TODO add more cardCount tests
describe('Calling cardCount', function() {
  it('should return an integer sum when provided a hand', function() {
    const hand = testDeck.cards;
    const count = cardCount(hand);

    expect(Number.isInteger(count)).toStrictEqual(true);
    expect(count).toStrictEqual(32);
  });
});

describe('Calling isBlackjack', function() {
  it('should return a boolean value when provided a card total', function() {
    const testArray = [
      { test: 21, expected: true },
      { test: 22, expected: false },
      { test: 200, expected: false },
      { test: 20, expected: false },
      { test: 0, expected: false },
      { test: 1, expected: false },
      { test: -1, expected: false }
    ];

    testArray.forEach(function(test) {
      const testVal = isBlackjack(test.test);
      expect(testVal).toStrictEqual(test.expected);
    });
  });
});

describe('Calling isOver', function() {
  it('should return a boolean value when provided a card total ', function() {
    const testArray = [
      { test: 21, expected: false },
      { test: 22, expected: true },
      { test: 100, expected: true },
      { test: 19, expected: false },
      { test: 0, expected: false },
      { test: 1, expected: false },
      { test: -1, expected: false }
    ];

    testArray.forEach(function(test) {
      const testVal = isOver(test.test);
      expect(testVal).toStrictEqual(test.expected);
    });
  });
});

describe('Calling isWin', function() {
  it('should return a string indicated who won or else that there are no winners', function() {
    const yWin = 'You win!';
    const hWin = 'The House wins!';
    const tie = 'No winners!';

    const testArray = [
      { test: {d: 22, p: 20}, expected: yWin },
      { test: {d: 20, p: 22}, expected: hWin },
      { test: {d: 22, p: 22}, expected: tie },
      { test: {d: 20, p: 20}, expected: tie },
      { test: {d: 99, p: 21}, expected: yWin },
      { test: {d: 21, p: 99}, expected: hWin },
      { test: {d: 0, p: 0}, expected: tie },
      { test: {d: -1, p: -1}, expected: tie },
      { test: {d: 21, p: 21}, expected: tie }
    ];

    testArray.forEach(function(test) {
      const testVal = isWin(test.test.d, test.test.p);
      expect(testVal).toStrictEqual(test.expected);
    });
  });
});