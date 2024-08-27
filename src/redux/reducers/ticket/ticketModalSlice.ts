import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TicketModal} from './ticketInterfaces';

const REDUCER_NAME = 'TicketModal';

const initialState: TicketModal = {
  isVisible: false,
  ticketInfo: {
    airlineCompany: '',
    arrivalCity: '',
    arrivalDate: '',
    arrivalHour: '',
    badgeText: '',
    departureCity: '',
    departureDate: '',
    departureHour: '',
    flightNumber: '',
  },
};

const ticketModalSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TicketModal>) => {
      return {
        ticketInfo: action.payload.ticketInfo,
        isVisible: true,
      };
    },
    closeModal: () => {
      return {
        isVisible: false,
        ticketInfo: initialState.ticketInfo,
      };
    },
  },
  extraReducers: () => {},
});

export const {openModal, closeModal} = ticketModalSlice.actions;

export default ticketModalSlice.reducer;
