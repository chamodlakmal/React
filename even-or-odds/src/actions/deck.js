import {FETCH_DECK_RESULT} from "./types";

export const fetchDeckResult = deckJSON => {
    const {remaining, deck_id} = deckJSON;

    return {type: FETCH_DECK_RESULT, remaining, deck_id};
};

export const fetchNewDeck = () => dispatch => {
    return fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle').then(response => response.json()).then(json => {
        dispatch(fetchDeckResult(json))
    })
};