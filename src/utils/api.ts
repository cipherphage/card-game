// https://deckofcardsapi.com/api/deck/<<deck_id | new>>/draw/?count=<<integer>>
export const apiStrings = {
  deckStartUrl: 'https://deckofcardsapi.com/api/deck',
  shuffle: '/new',
  drawOne: '/draw/?count=1',
  drawTwo: '/draw/?count=2',
  drawFour: '/draw/?count=4',
  backOfCard: 'https://deckofcardsapi.com/static/img/back.png'
};

export const sendRequest = function(url: string) {
  return fetch(url);
};