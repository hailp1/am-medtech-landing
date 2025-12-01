'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Building2, UserCircle } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [customerId, setCustomerId] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const id = customerId.trim().toUpperCase();

        console.log('🔐 Login Modal - Customer ID entered:', id);

        if (!id) {
            setError('Please enter your Customer ID');
            setIsLoading(false);
            console.warn('⚠️ Login Modal - Empty Customer ID');
            return;
        }

        if (id === 'AM') {
            // Redirect to Admin Panel
            const adminUrl = 'https://dms.ammedtech.com/Anminh/admin';
            console.log('✅ Login Modal - Redirecting to Admin Panel:', adminUrl);
            setTimeout(() => {
                window.location.href = adminUrl;
            }, 500);
        } else {
            // Redirect to TDV Login (DMS)
            const dmsUrl = 'https://dms.ammedtech.com';
            console.log('✅ Login Modal - Redirecting to DMS:', dmsUrl);
            setTimeout(() => {
                window.location.href = dmsUrl;
            }, 500);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[120] px-4"
                    >
                        <div className="bg-[#0B1221] border border-[#00D4FF]/20 rounded-2xl shadow-2xl overflow-hidden relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <div className="p-8 pb-0 text-center">
                                <div className="w-16 h-16 bg-[#00D4FF]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00D4FF]/20">
                                    <UserCircle size={32} className="text-[#00D4FF]" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">Client Login</h2>
                                <p className="text-slate-400 text-sm">
                                    Enter your Customer ID to access the system
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleLogin} className="p-8 pt-6">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="customerId" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                                            Customer ID
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                            <input
                                                type="text"
                                                id="customerId"
                                                value={customerId}
                                                onChange={(e) => setCustomerId(e.target.value)}
                                                placeholder="e.g., AM, TDV001..."
                                                className="w-full bg-[#020617] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all"
                                                autoFocus
                                            />
                                        </div>
                                        {error && (
                                            <p className="text-red-400 text-xs mt-2 ml-1">{error}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#020617] font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        <span>{isLoading ? 'Redirecting...' : 'Access Portal'}</span>
                                        {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </div>

                                <div className="mt-6 text-center">
                                    <p className="text-xs text-slate-500">
                                        Protected by AM Medtech Security
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
