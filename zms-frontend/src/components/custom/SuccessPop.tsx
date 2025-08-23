import React, { useState } from 'react';
import { X, CheckCircle, Copy, Calendar, User, Tag, Clock } from 'lucide-react';

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

interface SuccessPopupProps {
    ticket: Ticket;
    isOpen: boolean;
    onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ ticket, isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const handleCopyTicketId = async () => {
        try {
            await navigator.clipboard.writeText(ticket.id);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = ticket.id;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,5,0,0.6)] flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-2xl relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="text-center">
                        <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-10 h-10 text-green-700" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
                        <p className="text-green-100">Your zoo ticket has been successfully booked</p>
                    </div>
                </div>

                {/* Ticket Details */}
                <div className="p-6 space-y-4">
                    {/* Ticket ID */}
                    <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Ticket ID</p>
                                <p className="font-mono text-lg font-semibold text-gray-900">{ticket.id}</p>
                            </div>
                            <button
                                onClick={handleCopyTicketId}
                                className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all ${copied
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    }`}
                            >
                                <Copy className="w-4 h-4 mr-2" />
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            Save this ID to view your ticket details later
                        </p>
                    </div>

                    {/* Visitor Details */}
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <User className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm text-gray-600">Visitor Name</p>
                                <p className="font-semibold text-gray-900">{ticket.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm text-gray-600">Visit Date</p>
                                <p className="font-semibold text-gray-900">{formatDate(ticket.dateOfVisit)}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Tag className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm text-gray-600">Pass & Experience</p>
                                <p className="font-semibold text-gray-900">
                                    {ticket.passType} - {ticket.passStatus}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <User className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm text-gray-600">Booking Type</p>
                                <p className="font-semibold text-gray-900">{ticket.userType}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Clock className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <p className="text-sm text-gray-600">Booked On</p>
                                <p className="font-semibold text-gray-900">
                                    {formatDate(ticket.createdAt)} at {formatTime(ticket.createdAt)}
                                </p>
                            </div>
                        </div>

                        {ticket.description && (
                            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                                <p className="text-sm text-gray-600 mb-1">Visit Description</p>
                                <p className="text-gray-900">{ticket.description}</p>
                            </div>
                        )}
                    </div>

                    {/* Status Badge */}
                    <div className="flex justify-center">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${ticket.passStatus === 'VIP' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                            <div className={`w-2 h-2 rounded-full mr-2 ${ticket.passStatus === 'VIP' ? 'bg-purple-400' : 'bg-blue-400'
                                }`}></div>
                            {ticket.passStatus}
                        </span>
                    </div>

                    {/* Important Note */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">Important:</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• Please arrive 15 minutes before your visit</li>
                            <li>• Keep your ticket ID safe for entry</li>
                            <li>• Bring a valid photo ID for verification</li>
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPopup;