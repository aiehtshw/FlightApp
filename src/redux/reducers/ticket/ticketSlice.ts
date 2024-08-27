import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Tickets, TicketInterface} from './ticketInterfaces';

const REDUCER_NAME = 'Tickets';

const initialState: Tickets = {
  tickets: [],
};

const ticketsSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<TicketInterface>) => {
      state.tickets.push(action.payload);
    },
    deleteTicket: (state, action: PayloadAction<string>) => {
      state.tickets = state.tickets.filter(
        ticket => ticket.flightNumber !== action.payload,
      );
    },
  },
  extraReducers: () => {},
});

export const {addTicket, deleteTicket} = ticketsSlice.actions;

export default ticketsSlice.reducer;
