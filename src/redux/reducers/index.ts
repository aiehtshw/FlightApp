import {combineReducers} from '@reduxjs/toolkit';
import ticketSlice from './ticket/ticketSlice';
import ticketModalSlice from './ticket/ticketModalSlice';

const rootReducer = combineReducers({
  ticket: ticketSlice,
  ticketModal: ticketModalSlice,
});

export default rootReducer;
