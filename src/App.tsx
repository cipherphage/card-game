import React, { useEffect, useState } from 'react';
import { sendRequest, apiStrings } from './utils/api';
import { cardCount, isWin } from './utils/game';
import { defaultMode } from './state/game';
import { defaultPlayer, hit } from './state/player';
import Hand from './ui/Hand';
import './App.css';
import { shuffledDeck, defaultDeck } from './state/deck';

function App() {
  const [deck, setDeck] = useState<deck>(defaultDeck);
  const [dealer, setDealer] = useState<player>(defaultPlayer);
  const [player, setPlayer] = useState<player>(defaultPlayer);
  const [mode, setMode] = useState<mode>(defaultMode);

  const updateCardLayout = function() {
    const cl = { 
      ...mode,
      cardLayout: !mode.cardLayout
    };

    setMode(cl);
  };

  const updateDeckStorage = function() {
    const ds = { 
      ...mode,
      deckStorage: !mode.deckStorage
    };

    setMode(ds);
    updateGame(ds);
  };

  const stay = function() {
    alert(isWin(dealer.cardTotal, player.cardTotal)); // TODO turn into modal
  };

  const startNewPlayers = function(cards: card[]) {
    const dealerHand = [cards[0], cards[1]];
    const playerHand = [cards[2], cards[3]];

    const newDealer = { 
      ...defaultPlayer,
      isDealer: true,
      hand: dealerHand,
      cardTotal: cardCount(dealerHand)
    };
    const newPlayer = { 
      ...defaultPlayer,
      hand: playerHand,
      cardTotal: cardCount(playerHand)
    };

    setDealer(newDealer);
    setPlayer(newPlayer);
  };

  const updateGame = function(newMode: mode | undefined) {
    const deckMode = newMode ? newMode.deckStorage : mode.deckStorage;

    if (deckMode) {
      const url = apiStrings.deckStartUrl + apiStrings.shuffle + apiStrings.drawFour;

      sendRequest(url)
        .then((res) => res.json())
        .then((data: deck) => {
          setDeck(data);
          startNewPlayers(data.cards);
        })
        .catch((err) => {
          console.warn(err); // TODO inform user
        });
    } else {
      const cards = shuffledDeck();
      const clientDeck = {
        ...defaultDeck,
        deck_id: 'client-side-deck',
        cards: cards
      }

      setDeck(clientDeck);
      startNewPlayers(cards);
    }
  };

  const startNewGame = function() {
    updateGame(undefined);
  }

  return (
    <div className="App">
      <section>
        <h1>Blackjack: My Way</h1>
      </section>

      {!(deck.cards.length === 0) &&
        <>
          <section>
            <h2>The House (Dealer)</h2>
            <Hand hand={dealer.hand} mode={mode}/>
          </section>

          <section>
            <h2>You (Player)</h2>
            <Hand hand={player.hand} mode={mode} />
          </section>
        </>
      }

      <section>
        <h2>Stats</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>The House</th>
                <th>You</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Card total</td>
                <td>{dealer.cardTotal}</td>
                <td>{player.cardTotal}</td>
              </tr>
              <tr>
                <td>Wins</td>
                <td>{dealer.numWins}</td>
                <td>{player.numWins}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Player Actions</h2>
        <div>
          <button onClick={startNewGame}>Start New Game</button>
          <button>Hit (new card)</button>
          <button onClick={stay}>Stay (end round)</button>
        </div>
        <div>
          Card Layout: <span>{ mode.cardLayout ? "Fan" : "Side-by-side" }</span>
          <button onClick={updateCardLayout}>Switch Card Layout</button>
          Dealer Visibility: <span>Always visible</span>
          <button>Switch Dealer Visibility</button>
          Play Mode: <span>{ mode.deckStorage ? "3rd-Party API" : "Client-side" }</span>
          <button onClick={updateDeckStorage}>Switch Play Mode</button>
        </div>
      </section>
    </div>
  );
}

export default App;
