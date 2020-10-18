import {FETCH_DECK_RESULT} from "./types";

export const fetchDeckResult=deckJSON=>{
    const {remaining,deck_id}=deckJSON;

    return {type:FETCH_DECK_RESULT,remaining,deck_id};
}