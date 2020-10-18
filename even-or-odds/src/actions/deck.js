import {DECK, DECK_DRAW} from "./types";

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

export const fetchDrawCard = deck_id => dispatch => {
    const api=`https://deck-of-cards-api-wrapper.appspot.com/deck/${deck_id}/draw`;
    return fetch(api).then(response => {
        if (response.status !== 200) {
            throw new Error('Unsuccessful request to deck of Card API');
        }
        return response.json()
    }).then(json => {
        dispatch({
            type: DECK_DRAW.FETCH_SUCCESS,
            cards: json.cards,
            remaining: json.remaining
        })
    }).catch(error => dispatch({type: DECK_DRAW.FETCH_ERROR, message: error.message}))
};