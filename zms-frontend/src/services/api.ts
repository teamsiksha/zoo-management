import axios from 'axios';

export const API_BASE_URL = 'https://zmsbackend.shishuranjan.online/api'; //DEPLOYED URL HERE

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 second timeout
});

// API service functions
export const ticketService = {
    createTicket: async (ticketData: any) => {
        const response = await api.post('/ticket/create', ticketData);
        return response.data;
    },

    getTicketById: async (ticketId: string) => {
        const response = await api.get(`/ticket/get/${ticketId}`);
        return response.data;
    },
};