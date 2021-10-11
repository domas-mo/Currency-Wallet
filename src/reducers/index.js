import {combineReducers} from 'redux';
import currencyApiReducer from '../modules/currencyApi/currencyApi.reducer';
import localStorageReducer from '../modules/localStorage/localStorage.reducer';

const rootReducer = combineReducers({
    currencyAPI: currencyApiReducer,
    localStorage: localStorageReducer,
});

export default rootReducer;