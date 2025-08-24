import React, { useState } from 'react';
import { Calendar, User, Ticket, AlertCircle, Loader2 } from 'lucide-react';
import { Footer } from './Footer';
import Header from './Header';
import { ticketService } from '@/services/api';
import SuccessPopup from './SuccessPop';

interface TicketFormData {
    name: string;
    dateOfVisit: string;
    description: string;
    passType: 'ONE_TIME' | 'MONTHLY' | 'YEARLY';
    passStatus: 'NORMAL' | 'VIP';
    userType: 'INDIVIDUAL' | 'GROUP';
}

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

const TicketBooking: React.FC = () => {
    const [formData, setFormData] = useState<TicketFormData>({
        name: '',
        dateOfVisit: '',
        description: '',
        passType: 'ONE_TIME',
        passStatus: 'NORMAL',
        userType: 'INDIVIDUAL'
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successPopupOpen, setSuccessPopupOpen] = useState(false);
    const [createdTicket, setCreatedTicket] = useState<Ticket | null>(null);
    const passTypes = [
        { value: 'ONE_TIME', label: 'One Time Pass', price: '75 Rs', description: 'Single day entry' },
        { value: 'MONTHLY', label: 'Monthly Pass', price: '1000 Rs', description: 'Unlimited visits for 30 days' },
        { value: 'YEARLY', label: 'Annual Pass', price: '8500 Rs', description: 'Unlimited visits for 365 days' }
    ];

    const passStatuses = [
        { value: 'NORMAL', label: 'Normal Experience', description: 'Standard zoo experience' },
        { value: 'VIP', label: 'VIP Experience', description: 'Premium experience with guided tour and perks' }
    ];

    const userTypes = [
        { value: 'INDIVIDUAL', label: 'Individual', description: 'Single person booking' },
        { value: 'GROUP', label: 'Group (5+)', description: 'Group booking with discounts' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError(''); // Clear error when user starts typing
    };

    const validateForm = (): string | null => {
        if (!formData.name.trim()) return 'Full name is required';
        if (formData.name.trim().length < 2) return 'Name must be at least 2 characters long';
        if (!formData.dateOfVisit) return 'Date of visit is required';
        if (!formData.description.trim()) return 'Description is required';

        const selectedDate = new Date(formData.dateOfVisit);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) return 'Visit date cannot be in the past';

        // Check if date is too far in the future (e.g., more than 1 year)
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        if (selectedDate > oneYearFromNow) return 'Visit date cannot be more than 1 year in advance';

        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError('');

        try {
            const payload = {
                ...formData,
                dateOfVisit: new Date(formData.dateOfVisit + 'T00:00:00').toISOString()
            };
            const ticket = await ticketService.createTicket(payload);
            setCreatedTicket(ticket);
            setSuccessPopupOpen(true);

            // Reset form after successful submission
            setFormData({
                name: '',
                dateOfVisit: '',
                description: '',
                passType: 'ONE_TIME',
                passStatus: 'NORMAL',
                userType: 'INDIVIDUAL'
            });

        } catch (err: any) {
            console.error('Booking error:', err);

            if (err.response) {
                // API returned an error response
                const errorMessage = err.response.data?.error || 'Failed to book ticket. Please try again.';
                setError(errorMessage);
            } else if (err.request) {
                // Network error
                setError('Network error. Please check your connection and try again.');
            } else {
                // Other error
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    return (
        <div className="mt-16 w-full">
            <Header />

            <div className="min-h-screen bg-orange-50 py-12 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Ticket className="w-10 h-10 text-green-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Zoo Adventure</h1>
                        <p className="text-xl text-gray-600">Experience wildlife like never before</p>
                    </div>

                    {/* Booking Form */}
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

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Date Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Date of Visit *
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="date"
                                        name="dateOfVisit"
                                        value={formData.dateOfVisit}
                                        onChange={handleInputChange}
                                        min={getTodayDate()}
                                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Pass Type and Pass Status */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Pass Type *
                                    </label>
                                    <select
                                        name="passType"
                                        value={formData.passType}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                                        required
                                    >
                                        {passTypes.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.label} - {type.price}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {passTypes.find(t => t.value === formData.passType)?.description}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Experience Type *
                                    </label>
                                    <select
                                        name="passStatus"
                                        value={formData.passStatus}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                                        required
                                    >
                                        {passStatuses.map((status) => (
                                            <option key={status.value} value={status.value}>
                                                {status.label}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {passStatuses.find(s => s.value === formData.passStatus)?.description}
                                    </p>
                                </div>
                            </div>

                            {/* User Type */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Booking Type *
                                </label>
                                <select
                                    name="userType"
                                    value={formData.userType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg"
                                    required
                                >
                                    {userTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-sm text-gray-500 mt-2">
                                    {userTypes.find(t => t.value === formData.userType)?.description}
                                </p>
                            </div>

                            {/* Description Field - Now Required */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg resize-none"
                                    placeholder="Please describe your visit purpose, special requirements, or any notes..."
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all text-lg flex items-center justify-center"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                                            Booking Your Ticket...
                                        </>
                                    ) : (
                                        <>
                                            <Ticket className="w-6 h-6 mr-3" />
                                            Book Ticket Now
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    By booking, you agree to our terms and conditions
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white rounded-xl p-6 shadow-md text-center">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Flexible Dates</h3>
                            <p className="text-sm text-gray-600">Visit any day within your selected timeframe</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md text-center">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Ticket className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
                            <p className="text-sm text-gray-600">Get your ticket immediately after booking</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md text-center">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Family Friendly</h3>
                            <p className="text-sm text-gray-600">Special rates for children and groups</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            {createdTicket && (
                <SuccessPopup
                    ticket={createdTicket}
                    isOpen={successPopupOpen}
                    onClose={() => {
                        setSuccessPopupOpen(false);
                        setCreatedTicket(null);
                    }}
                />
            )}

            <Footer />
        </div>
    );
};

export default TicketBooking;