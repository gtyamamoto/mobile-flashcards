import decksReducer from './decks';
import activeDeckReducer from './activeDeck';
const mainReducer = ({ decks, activeDeck }, action) => ({
  decks: decksReducer(decks, action),
  activeDeck: activeDeckReducer(activeDeck, action)
});

export default mainReducer