import types from './localStorage.types';

const initialState = {
    currencies: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case types.SAVE_CURRENCY:
        return {
            ...state,
            currencies: [...state.currencies, payload],
        };
    case types.SAVE_LS:
        return {
            ...state,
            currencies: [...state.currencies, ...payload],
        };
    default:
        return state;
    }
};

export default reducer;