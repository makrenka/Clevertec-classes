import { ACTION_TYPES } from "./actions";

export function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            if (state.count >= 20) { return { count: 20 } }
            else {
                return {
                    count: state.count + 1,
                }
            };
        case ACTION_TYPES.DECREMENT:
            if (state.count <= 1) { return { count: 1 } }
            else {
                return {
                    count: state.count - 1,
                }
            };
        case ACTION_TYPES.RANDOM:
            return {
                count: action.payload,
            };
        case ACTION_TYPES.RESET:
            return {
                count: 1,
            };
        default:
            throw new Error();
    };
};