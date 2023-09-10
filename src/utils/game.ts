export const cardCount = function(hand: card[]) {
  const aces:number[] = [];
  let sum = 0;

  hand.forEach((card: card, i: number) => {
    const intValue = parseInt(card.value);
    if (isNaN(intValue)) {
      if (card.value === 'A') {
        aces.push(i);
      } else {
        sum += 10;
      }
    } else {
      sum += intValue;
    }
  });

  if (aces.length > 0) {
    aces.forEach((ace, i) => {
      if (sum <= 10) {
        sum += 11;
      } else {
        sum += 1;
      }
    });
  }

  return sum;
};

export const isBlackjack = function(cardTotal: number) {
  if (cardTotal === 21) { return true };

  return false;
};

export const isOver = function(num: number) {
  return num > 21 ? true : false;
};

export const isWin = function(dealerTotal: number, playerTotal: number) {
  const dealerOver = isOver(dealerTotal);
  const playerOver = isOver(playerTotal);

  if (((dealerTotal > playerTotal) || (playerOver)) && !dealerOver) {
    return 'The House wins!';
  }

  if (((playerTotal > dealerTotal) || (dealerOver)) && !playerOver) {
    return 'You win!';
  }

  return 'No winners!';
};