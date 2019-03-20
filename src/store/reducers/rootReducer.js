import {DECREMENT, INCREMENT, UPDATE_TITLE} from "../constants/action-types";

const initialState = {
    title: 'hello world',
    counter: 0,
};

function rootReducer(state = initialState, action) {
    const { type, payload } = action;
    const { counter } = state;

    switch (type) {
        case UPDATE_TITLE:
            const { title } = payload;
            return { ...state, title };
        case INCREMENT:
            return { ...state, counter: counter + 1 };
        case DECREMENT:
            return { ...state, counter: counter - 1 };
        default:
            return state;
    }

}


export default rootReducer;
