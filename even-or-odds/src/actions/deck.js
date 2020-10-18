import {DECK} from "./types";

export const fetchDeckSuccess = deckJSON => {
    const {remaining, deck_id} = deckJSON;

    return {type: DECK.FETCH_SUCCESS, remaining, deck_id};
};

export const fetchDeckError = error => {
    return {type: DECK.FETCH_ERROR, message: error.message}
};

export const fetchNewDeck = () => dispatch => {
    return fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle').then(response => {
        if (response.status !== 200) {
            throw new Error('Unsuccessful request to deckofCard API');
        }
        return response.json();

    }).then(json => {
        dispatch(fetchDeckSuccess(json));
    }).catch(error => dispatch(fetchDeckError(error)))
};