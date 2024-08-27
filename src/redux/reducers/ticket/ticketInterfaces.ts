export interface Tickets {
  tickets: TicketInterface[];
}

export interface TicketInterface {
  airlineCompany: string;
  arrivalCity: string;
  arrivalDate: string;
  arrivalHour: string;
  badgeText: string;
  departureCity: string;
  departureDate: string;
  departureHour: string;
  flightNumber: string;
}

export interface TicketModal {
  isVisible?: boolean;
  ticketInfo: TicketInterface;
}
