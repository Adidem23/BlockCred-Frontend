import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Modereducer from './Mode';
import AccountReducer from './Account';


const rootreducers = combineReducers({
    mode: Modereducer,
    account: AccountReducer
})

console.log(rootreducers);

export const store = configureStore({ reducer: rootreducers })