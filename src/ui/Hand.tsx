import Card from "./Card";

interface HandProps {
  hand: card[];
  mode: mode;
}

const Hand = function({ hand, mode }: HandProps) {
  const cname = "flex-item";
  const cardLayout = mode.cardLayout ? cname + " hand spread" : cname + " hand grow";

  return <div data-testid={cardLayout} className={cardLayout}>
    {hand.map((card: card, i: number) => {
      return <Card key={ card.code } card={ card } index={ i } mode={ mode } />;
    })}
  </div>;
};

export default Hand;