// REUSABLE TEST VALUES
export const testDeck: deck = {
  success: true,
  deck_id: 'test-deck',
  cards: [
    {
      image: 'https://deckofcardsapi.com/static/img/9C.png',
      images: {
        svg: '',
        png: ''
      },
      value: '9',
      suit: 'CLUBS',
      code: '9C'
    },
    {
      image: 'https://deckofcardsapi.com/static/img/KD.png',
      images: {
        svg: '',
        png: ''
      },
      value: 'KING',
      suit: 'DIAMONDS',
      code: 'KD'
    },
    {
      image: 'https://deckofcardsapi.com/static/img/3S.png',
      images: {
        svg: '',
        png: ''
      },
      value: '3',
      suit: 'SPADES',
      code: '3S'
    },
    {
      image: 'https://deckofcardsapi.com/static/img/0H.png',
      images: {
        svg: '',
        png: ''
      },
      value: '10',
      suit: 'HEARTS',
      code: '0H'
    }
  ],
  remaining: 48
}; 
export const testAPIMode: mode = {
  cardLayout: true,
  deckStorage: true
};
export const testCustomMode: mode = {
  cardLayout: true,
  deckStorage: false
};
export const testPlayer: player = {
  isDealer: false,
  cardTotal: 0,
  numWins: 0,
  hand: []
};