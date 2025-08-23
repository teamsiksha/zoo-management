import React, { useState } from 'react';
import { Search, Ticket, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { Footer } from './Footer';
import Header from './Header';
import TicketDisplay from './TicketDisplay';
import { Link } from 'react-router-dom';
import { ticketService } from '@/services/api';

interface TicketType {
    id: string;
    name: string;
    dateOfVisit: string;
    description: string;
    passType: string;
    userType: string;
    passStatus: string;
    createdAt: string;
    updatedAt?: string;
}

// Format date for display
const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
};

const MyTickets: React.FC = () => {
    const [ticketId, setTicketId] = useState('');
    const [ticket, setTicket] = useState<TicketType | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTicketId(e.target.value);
        if (error) setError('');
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!ticketId.trim()) {
            setError('Please enter a ticket ID');
            return;
        }

        setLoading(true);
        setError('');
        setHasSearched(true);

        try {
            const fetchedTicket = await ticketService.getTicketById(ticketId.trim());
            fetchedTicket.dateOfVisit = formatDate(fetchedTicket.dateOfVisit);
            setTicket(fetchedTicket);
        } catch (err: any) {
            console.error('Ticket fetch error:', err);
            if (err.response?.status === 404) {
                setError('Ticket not found. Please check your ticket ID and try again.');
            } else if (err.request) {
                setError('Network error. Please check your connection and try again.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
            setTicket(null);
        } finally {
            setLoading(false);
        }
    };

    const handleNewSearch = () => {
        setTicketId('');
        setTicket(null);
        setError('');
        setHasSearched(false);
    };

    const renderSearchInterface = () => (
        <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">View Your Tickets</h1>
                <p className="text-xl text-gray-600">Enter your ticket ID to view details</p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
                        <div className="flex">
                            <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5" />
                            <div>
                                <p className="text-red-700 font-medium">Error</p>
                                <p className="text-red-600 text-sm mt-1">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSearch} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Ticket ID</label>
                        <div className="relative">
                            <Ticket className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={ticketId}
                                onChange={handleInputChange}
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
                                placeholder="Enter your ticket ID (e.g., abc123def456)"
                                disabled={loading}
                            />
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Your ticket ID was provided when you booked your ticket</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading || !ticketId.trim()}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all text-lg flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                                    Searching...
                                </>
                            ) : (
                                <>
                                    <Search className="w-6 h-6 mr-3" />
                                    View Ticket
                                </>
                            )}
                        </button>
                    </div>
                </form>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Don't have a ticket yet?</h3>
                    <p className="text-gray-600 mb-4">
                        Book your zoo adventure now and get instant confirmation with your ticket ID.
                    </p>
                    <Link
                        to="/book-ticket"
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        Book New Ticket
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );

    const renderTicketView = () => (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={handleNewSearch}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                    >
                        <Search className="w-4 h-4 mr-2" />
                        New Search
                    </button>

                    <Link
                        to="/book-ticket"
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                    >
                        Book Another Ticket
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Zoo Ticket</h1>
                <p className="text-gray-600">Here are your booking details</p>
            </div>

            <div className="flex justify-center">
                {ticket && <TicketDisplay ticket={ticket} />}
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Before Your Visit</h3>
                        <ul className="space-y-1">
                            <li>• Arrive 15 minutes before opening</li>
                            <li>• Bring a valid photo ID</li>
                            <li>• Check weather conditions</li>
                            <li>• Review zoo map and plan your route</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">What to Bring</h3>
                        <ul className="space-y-1">
                            <li>• Comfortable walking shoes</li>
                            <li>• Water bottle and snacks</li>
                            <li>• Camera for memories</li>
                            <li>• Sunscreen and hat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="mt-16 w-full">
            <Header />
            <div className="min-h-screen bg-orange-50 py-12 px-4">
                {!hasSearched || (!ticket && !loading) ? renderSearchInterface() : renderTicketView()}
            </div>
            <Footer />
        </div>
    );
};

export default MyTickets;
