export const getCardValue = function(cardValue: string) {
  if (cardValue === '10') {
    return cardValue;
  }

  return cardValue.charAt(0);
};