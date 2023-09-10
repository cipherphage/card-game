import Card from "./Card";

interface HandProps {
  hand: card[];
  mode: mode;
}

const Hand = function({ hand, mode }: HandProps) {
  const cardLayout = mode.cardLayout ? "hand spread" : "hand grow";

  return <div data-testid={cardLayout} className={cardLayout}>
    {hand.map((card: card, i: number) => {
      return <Card key={ card.code } card={ card } index={ i } mode={ mode } />;
    })}
  </div>;
};

export default Hand;