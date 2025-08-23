import React from 'react';
import { Calendar, User, Clock, MapPin, Star } from 'lucide-react';

interface Ticket {
    id: string;
    name: string;
    dateOfVisit: string;
    description: string;
    passType: string;
    userType: string;
    passStatus: string;
    createdAt: string;
}

interface TicketDisplayProps {
    ticket: Ticket;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ ticket }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatFullDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getStatusColor = (status: string) => {
        switch (status.toUpperCase()) {
            case 'NORMAL':
                return 'bg-blue-500 text-white';
            case 'VIP':
                return 'bg-purple-500 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    const getPassTypeIcon = (userType: string) => {
        switch (userType.toUpperCase()) {
            case 'VIP':
                return <Star className="w-5 h-5" />;
            case 'GROUP':
                return <User className="w-5 h-5" />;
            default:
                return <User className="w-5 h-5" />;
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400 bg-opacity-10 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Zoo Ticket</h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ticket.passStatus)}`}>
                            {ticket.passStatus}
                        </span>
                    </div>

                    <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                        <p className="text-black text-sm mb-1">Ticket ID</p>
                        <p className="font-mono text-lg text-orange-600 font-semibold">{ticket.id}</p>
                    </div>
                </div>
            </div>

            {/* Ticket Body */}
            <div className="p-6 space-y-4">
                {/* Visitor Information */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <User className="w-5 h-5 mr-2 text-gray-600" />
                        Visitor Details
                    </h3>

                    <div className="grid grid-cols-1 gap-3">
                        <div>
                            <p className="text-sm text-gray-600">Name</p>
                            <p className="font-semibold text-gray-900 text-lg">{ticket.name}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <p className="text-sm text-gray-600">Pass Type</p>
                                <div className="flex items-center">
                                    {getPassTypeIcon(ticket.passStatus)}
                                    <span className="ml-2 font-semibold text-gray-900">{ticket.passType}</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-600">Experience</p>
                                <p className="font-semibold text-gray-900">{ticket.passStatus}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-gray-600">Booking Type</p>
                            <p className="font-semibold text-gray-900">{ticket.userType}</p>
                        </div>
                    </div>
                </div>

                {/* Visit Information */}
                <div className="bg-blue-50 rounded-xl p-4 space-y-3">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                        Visit Information
                    </h3>

                    <div>
                        <p className="text-sm text-gray-600">Visit Date</p>
                        <p className="font-semibold text-gray-900 text-lg">{formatFullDate(ticket.dateOfVisit)}</p>
                    </div>

                    <div className="flex items-center text-sm text-blue-700 bg-blue-100 rounded-lg p-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>City Zoo - Main Entrance</span>
                    </div>
                </div>

                {/* Visit Purpose/Description */}
                {ticket.description && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Visit Description</h3>
                        <p className="text-gray-700">{ticket.description}</p>
                    </div>
                )}

                {/* Booking Information */}
                <div className="border-t pt-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Booked on {formatDate(ticket.createdAt)}</span>
                    </div>
                </div>
            </div>

            {/* Ticket Footer - Dotted line separator */}
            <div className="relative">
                <div className="absolute left-0 right-0 top-0 flex justify-center">
                    <div className="border-t-2 border-dashed border-gray-300 w-full"></div>
                </div>
                <div className="absolute left-0 top-0 w-6 h-6 bg-gray-50 rounded-full -ml-3 -mt-3"></div>
                <div className="absolute right-0 top-0 w-6 h-6 bg-gray-50 rounded-full -mr-3 -mt-3"></div>
            </div>

            <div className="bg-gray-50 p-4 text-center">
                <p className="text-xs text-gray-500 mb-2">Please show this ticket at the entrance</p>
                <div className="flex justify-center space-x-4 text-xs text-gray-400">
                    <span>Valid for single entry</span>
                    <span>•</span>
                    <span>Non-transferable</span>
                </div>
            </div>
        </div>
    );
};

export default TicketDisplay;