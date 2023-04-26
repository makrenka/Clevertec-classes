export function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            if (state.count >= 20) { return { count: 20 } }
            else {
                return {
                    count: state.count + 1
                }
            };
        case 'decrement':
            if (state.count <= 1) { return { count: 1 } }
            else {
                return {
                    count: state.count - 1
                }
            };
        case 'random':
            return {
                count: +(Math.random(state.count) * (20 - 1) + 1).toFixed(0)
            };
        case 'reset':
            return {
                count: 1
            };
        default:
            throw new Error();
    };
};