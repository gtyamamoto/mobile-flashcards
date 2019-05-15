import decksReducer from './decks';
import activeDeckReducer from './activeDeck';
//reducer integration from the two global states decks and activedeck
const mainReducer = ({ decks, activeDeck }, action) => ({
  decks: decksReducer(decks, action),
  activeDeck: activeDeckReducer(activeDeck, action)
});

export default mainReducer