import {SET_DECK} from '../actions'

function activeDeckState (state,action){
    switch (action.type) {
        case SET_DECK:
            return action.deck
        default:
        return state;
            
    }
}
export default activeDeckState;