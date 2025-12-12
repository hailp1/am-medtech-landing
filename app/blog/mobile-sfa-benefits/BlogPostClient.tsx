'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Calendar, User, Clock, ArrowLeft, Smartphone, Zap } from 'lucide-react';

const BlogPostClient = () => {
    return (
        <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
            <Navbar />

            <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 bg-[#0A192F] relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition-colors">
                            <ArrowLeft size={16} /> Back to Blog
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                                    Mobile Technology
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> Dec 03, 2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 4 min read
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Why Every Medical Representative Needs a Mobile SFA App
                            </h1>

                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                                        <Image src="/team/hai.png" alt="Author" width={40} height={40} className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Lê Phúc Hải</div>
                                        <div className="text-xs text-slate-400">CEO, AM Medtech</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#020617]">
                <div className="container mx-auto px-6">
                    <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-cyan">
                        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-8 sm:mb-10 md:mb-12 rounded-xl sm:rounded-2xl overflow-hidden">
                            <Image
                                src="/blog/route-planning.png"
                                alt="Mobile SFA App"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            The days of carrying bulky detailing binders and writing orders on carbon paper are over. In the digital age, a Medical Representative (MR) without a mobile Sales Force Automation (SFA) app is fighting with one hand tied behind their back.
                        </p>

                        <h2>The Office in Your Pocket</h2>
                        <p>
                            A mobile SFA app consolidates everything an MR needs into a single device. It's not just about taking orders; it's about having instant access to information.
                        </p>

                        <h3>Key Features of Modern SFA Apps:</h3>
                        <ul>
                            <li><strong>e-Detailing:</strong> Showcase interactive product presentations on a tablet, making the pitch more engaging for doctors.</li>
                            <li><strong>Instant Stock Checks:</strong> Never promise a delivery you can't make. Check warehouse stock in real-time.</li>
                            <li><strong>Offline Mode:</strong> Essential for remote areas with poor connectivity. Sync data automatically when back online.</li>
                        </ul>

                        <h2>Boosting Efficiency and Accuracy</h2>
                        <p>
                            Manual data entry is prone to errors. Illegible handwriting can lead to wrong deliveries and angry customers. An app eliminates this risk. Orders are captured digitally and sent directly to the ERP system, reducing processing time from days to minutes.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Efficiency Gain</h4>
                            <p className="text-slate-300 mb-0">
                                Studies show that SFA apps save reps an average of <strong>90 minutes per day</strong> on administrative tasks—time that can be spent on 2-3 extra sales calls.
                            </p>
                        </div>

                        <h2>Conclusion</h2>
                        <p>
                            Empowering your field force with mobile technology isn't an expense; it's an investment in productivity. It professionalizes your team and provides the speed and accuracy that modern pharmacies demand.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
