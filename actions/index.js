export const GET_DECKS = 'GET_DECKS'
export const SET_DECK = 'SET_DECK'

export function fetchDecks(decks){
    return {
        type: GET_DECKS,
        decks
    }
}

export function setDeck(deck){
    return {
        type : SET_DECK,
        deck
    }
}