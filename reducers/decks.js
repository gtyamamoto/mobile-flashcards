import {SET_DECK,GET_DECKS} from '../actions'

function deckState (state,action){
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case SET_DECK:
            return {
                ...state,
                [action.deck.title]:action.deck
            }
        default:
        return state;
            
    }
}
export default deckState;