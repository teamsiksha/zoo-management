export interface TicketFormData {
    name: string;
    dateOfVisit: string; // We'll send as string, backend will convert to Date
    description: string;
    passType: 'ONE_TIME' | 'MONTHLY' | 'YEARLY';
    passStatus: 'NORMAL' | 'VIP';
    userType: 'INDIVIDUAL' | 'GROUP';
}

export interface Ticket {
    id: string;
    name: string;
    dateOfVisit: string;
    description: string;
    passType: string;
    passStatus: string;
    userType: string;
    createdAt: string;
}