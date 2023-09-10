import { getCardStyles } from "../styles/cardStyles";
import { getCardValue } from "../utils/card";

interface CardProps {
  card: card;
  index: number;
  mode: mode;
}

const Card = function({ card, index, mode }: CardProps) {
  if (mode.deckStorage) {
    return (
      <img 
        id={ card.code }
        data-testid={ card.code }
        className="card"
        style={ mode.cardLayout ? getCardStyles(index) : undefined }
        src={ card.image } 
      />
    );
  }

  const cardValue = getCardValue(card.value);

  return <div 
            id={ card.code }
            data-testid={ card.code }
            className={'card custom-card suit' + card.suit}
            style={ mode.cardLayout ? getCardStyles(index) : undefined }>
            <p>{ cardValue }</p>
          </div>
};

export default Card;