/// <reference types="react-scripts" />

type apiStrings = {
  deckStartUrl: string;
  shuffle: string;
  drawOne: string;
  drawTwo: string;
  drawFour: string;
  backOfCard: string;
}

type images = {
  svg: string;
  png: string;
}

type card = {
  image: string | undefined;
  images: images | null;
  value: string;
  suit: string;
  code: string;
}

type deck = {
  success: boolean;
  deck_id: string;
  cards: card[];
  remaining: number;
}

type player = {
  isDealer: boolean;
  cardTotal: number;
  numWins: number;
  hand: card[];
}

type mode = {
  cardLayout: boolean;
  deckStorage: boolean;
}
