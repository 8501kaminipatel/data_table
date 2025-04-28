import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { Reducer } from './Reducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    productState: Reducer,
  });


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
