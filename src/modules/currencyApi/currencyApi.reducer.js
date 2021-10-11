import types from './currencyApi.types';

const initialState = {
    rates: {},
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case types.SET_CURRENT_RATE:
        return {
            ...state,
            rates: payload,
        };
    default:
        return state;
    }
};

export default reducer;