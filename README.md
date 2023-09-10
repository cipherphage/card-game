# Blackjack: My Way

## Explanation

This is a very simple Blackjack webapp built using React for a user to play against a computer dealer. 

## Existing Features

- Displays dealer's ("The House") and user's ("You" or "The Player") cards.
- User is a human player. Dealer is a computer player.
- User can switch between the cards in the hands being shown side-by-side or spread radially.
- User can switch between play modes: client-side (deck is created and stored in browser memory, no server or third-parties are contacted; this is essentially an offline mode) or server-side (deck is created and stored via a free third-party API).
- User can press Start New Game button which resets all values and populates two new cards for each player.
- User can press Stay button which will end the round, compare players' hands, and determine if there is a winner and announce it via browser alert.
- User can view play stats in a simple table showing current hand totals and number of wins.

## Planned Work

- User can press Hit button to request a new card be dealt.
- After user Hits or Stays, the Dealer automatically Hits or Stays based on a simple algorithm.
- User can hover over cards in spread card layout to view the full card.
- User can see the card value under the card's small suit icon in client-side play mode (currently only supported in server-side mode).
- User can press Switch Dealer Visibility to change the dealer mode from full visibility (dealer cards are always face-up) to limited visibility (dealer's initial card is dealt face-down).
- Store stats automatically in local browser storage.
- Add Rules and About pages.
- Add helper icons and text for each button.
- Add betting section and functionality (needs to be defined more concretely first).
- Create React Native version for iOS and Android to put on app stores as free and open source apps.

## Built Using

- Card images and shuffled deck API used in server-side mode are from Deck of Cards: An API: [http://deckofcardsapi.com/](http://deckofcardsapi.com/).
- Card styling used in client-side mode are from CSS Card Tricks: [https://designshack.net/articles/css/css-card-tricks/](https://designshack.net/articles/css/css-card-tricks/).
- Create React App: [https://create-react-app.dev/](https://create-react-app.dev/).
- Test-Driven Development (TDD).

## Running the app

To start run `npm i` and `npm start`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about running tests [https://facebook.github.io/create-react-app/docs/running-tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
