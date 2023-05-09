import { ACTION_TYPES } from "./actions";

export const reducer = (state = { count: 1 }, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            if (state.count >= 20) { return { ...state, count: 20 } }
            else {
                return {
                    ...state,
                    count: state.count + 1,
                }
            };
        case ACTION_TYPES.DECREMENT:
            if (state.count <= 1) { return { ...state, count: 1 } }
            else {
                return {
                    ...state,
                    count: state.count - 1,
                }
            };
        case ACTION_TYPES.RANDOM:
            return {
                ...state,
                count: action.payload,
            };
        case ACTION_TYPES.RESET:
            return {
                ...state,
                count: 1,
            };
        default:
            return state;
    };
};