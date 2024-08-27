import {TicketInterface} from '../../redux/reducers/ticket/ticketInterfaces';

export const generateTicket = (): TicketInterface => {
  return {
    airlineCompany: 'Turkish Airlines',
    arrivalCity: 'İstanbul',
    arrivalDate: '19 Apr 2024',
    arrivalHour: '07:00 PM',
    badgeText: '9h 50m',
    departureCity: 'New York',
    departureDate: '18 Apr 2024',
    departureHour: '08:00 AM',
    flightNumber: 'TK 0001',
  };
};
