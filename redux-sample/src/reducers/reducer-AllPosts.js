import {FETCH_BUTTON_CLICK} from "../actions/types";

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_BUTTON_CLICK:
            return action.payload;
        default:
            return state;
    }
}