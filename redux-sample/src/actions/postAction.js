import {FETCH_BUTTON_CLICK} from "./types";

export const fetchPosts = () => {
    return {
        type: FETCH_BUTTON_CLICK,
        payload: [
            {
                userId: 1,
                id: 1,
                title: 'ssssss',
                body: 'abc'
            },
            {
                userId: 1,
                id: 2,
                title: 'ssssss',
                body: 'abc'
            },
            {
                userId: 1,
                id: 3,
                title: 'ssssss',
                body: 'abc'
            },
            {
                userId: 1,
                id: 4,
                title: 'ssssss',
                body: 'abc'
            }
        ]
    }
};