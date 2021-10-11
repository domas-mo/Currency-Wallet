import CurrencyApi from '.';
import types from './currencyApi.types';

const api = new CurrencyApi();

export const setCurrentRate = (rates) => ({
    type: types.SET_CURRENT_RATE,
    payload: rates,
});

export const getCurrentRates = () => (dispatch) => {
    api.getCurrentRates().then((resp) => {
        dispatch(setCurrentRate(resp));
    });
};