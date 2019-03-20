import { DECREMENT, INCREMENT, UPDATE_TITLE } from '../constants/action-types';

function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

const updateTitle = payload => ({ type: UPDATE_TITLE, payload });

const incrementAsync = () => dispatch => (
    // 1초 뒤 액션 디스패치
    setTimeout(
        () => {
            dispatch(increment());
        },
        1000,
    )
);

const decrementAsync = () => dispatch => (
    // 1초 뒤 액션 디스패치
    setTimeout(
        () => {
            dispatch(decrement());
        },
        1000,
    )
);

export { updateTitle, increment, decrement, incrementAsync, decrementAsync };
