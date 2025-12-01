'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Building2 } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
    const [customerId, setCustomerId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const id = customerId.trim().toUpperCase();

        if (!id) {
            setError('Please enter your Customer ID');
            setIsLoading(false);
            return;
        }

        // Simulate processing delay for better UX
        setTimeout(() => {
            if (id === 'AM') {
                // Redirect to Admin Portal
                window.location.href = 'https://dms.ammedtech.com/Anminh/admin';
            } else {
                // Redirect to General DMS Login
                window.location.href = 'https://dms.ammedtech.com/login';
            }
        }, 800);
    };

    return (
        <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00D4FF]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0072FF]/10 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Back Button */}
                <Link href="/" className="inline-flex items-center text-slate-400 hover:text-[#00D4FF] transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Login Card */}
                <div className="bg-[#0B1221]/60 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-[#00D4FF]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#00D4FF]/20">
                            <ShieldCheck className="text-[#00D4FF] w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Client Access</h1>
                        <p className="text-slate-400 text-sm">Enter your Customer ID to access your dedicated portal.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="customerId" className="block text-sm font-medium text-slate-300 mb-2">
                                Customer ID / Company Code
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Building2 className="h-5 w-5 text-slate-500" />
                                </div>
                                <input
                                    type="text"
                                    id="customerId"
                                    value={customerId}
                                    onChange={(e) => {
                                        setCustomerId(e.target.value);
                                        setError('');
                                    }}
                                    className="block w-full pl-10 pr-3 py-3 bg-[#020617]/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 focus:border-[#00D4FF] transition-all"
                                    placeholder="e.g. AM, CUST01"
                                    autoFocus
                                />
                            </div>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-2 text-sm text-red-400 flex items-center"
                                >
                                    <span className="mr-1">⚠️</span> {error}
                                </motion.p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3.5 px-4 bg-gradient-to-r from-[#00D4FF] to-[#0072FF] hover:from-[#00C4EF] hover:to-[#0062EF] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                'Access Portal'
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-slate-500">
                            Protected by secure gateway. Unauthorized access is prohibited.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
