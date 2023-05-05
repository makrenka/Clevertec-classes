export const ACTION_TYPES = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RANDOM: 'random',
    RESET: 'reset',
};

export const setIncrement = () => ({ type: ACTION_TYPES.INCREMENT });
export const setDecrement = () => ({ type: ACTION_TYPES.DECREMENT });
export const setRandom = () => ({
    type: ACTION_TYPES.RANDOM,
    payload: +(Math.random() * (20 - 1) + 1).toFixed(0)
});
export const setReset = () => ({ type: ACTION_TYPES.RESET });