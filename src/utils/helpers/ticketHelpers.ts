import {TicketInterface} from '../../redux/reducers/ticket/ticketInterfaces';

const generateFlightNumber = (): string => {
  const airlineCode = 'TK'; // Assuming Turkish Airlines uses 'TK'
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
  return `${airlineCode} ${randomNumber}`;
};

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
    flightNumber: generateFlightNumber(),
  };
};
