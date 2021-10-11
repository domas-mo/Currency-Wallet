import LocalStorage from './localStorage';
import types from './localStorage.types';

const ls = new LocalStorage();

export const saveToStore = (object) => ({
    type: types.SAVE_CURRENCY,
    payload: object,
});

export const setLsToStorage = (entries) => ({
    type: types.SAVE_LS,
    payload: entries,
});

export const saveToLocalStorage = () => (dispatch, getState) => {
    const { currencies } = getState().localStorage;
    ls.pushToLocalStorage(currencies);
};

export const getLocalStorage = () => (dispatch) => {
    const entries = ls.pullFromLocalStorage();
    dispatch(setLsToStorage(entries));
};