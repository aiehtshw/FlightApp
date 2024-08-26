import {combineReducers} from '@reduxjs/toolkit';
import ticketSlice from './ticket/ticketSlice';

const rootReducer = combineReducers({
  ticket: ticketSlice,
});

export default rootReducer;
