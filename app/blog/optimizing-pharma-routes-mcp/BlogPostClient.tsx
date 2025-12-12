'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPostClient = () => {
    return (
        <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
            <Navbar />

            {/* Hero Section */}
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
                                    Logistics & Operations
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> Dec 02, 2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 6 min read
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Optimizing Pharma Distribution with Smart Route Planning (MCP)
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

            {/* Content Section */}
            <section className="py-16 bg-[#020617]">
                <div className="container mx-auto px-6">
                    <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-cyan">
                        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-8 sm:mb-10 md:mb-12 rounded-xl sm:rounded-2xl overflow-hidden">
                            <Image
                                src="/blog/route-planning.png"
                                alt="Route Planning MCP"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            In the competitive pharmaceutical landscape, the efficiency of your field force is directly tied to your bottom line. A Master Call Plan (MCP) is not just a schedule; it's a strategic asset that ensures optimal market coverage and maximizes the productivity of every Medical Representative (MR).
                        </p>

                        <h2>The Challenge of Manual Routing</h2>
                        <p>
                            Traditionally, sales routes were planned based on geography or gut feeling. This often led to:
                        </p>
                        <ul>
                            <li><strong>Uneven Coverage:</strong> High-potential pharmacies visited too infrequently, while low-value ones received too much attention.</li>
                            <li><strong>Wasted Time:</strong> Reps spending more time driving than selling due to inefficient zigzag routes.</li>
                            <li><strong>Lack of Visibility:</strong> Managers having no real-time insight into whether the plan was actually being followed.</li>
                        </ul>

                        <h2>Enter Smart MCP (Master Call Plan)</h2>
                        <p>
                            Modern Distribution Management Systems (DMS) like AM Medtech's solution integrate intelligent route planning directly into the core workflow. Here's how it transforms operations:
                        </p>

                        <h3>1. Frequency-Based Scheduling</h3>
                        <p>
                            Not all customers are equal. Our system allows you to classify pharmacies (e.g., Platinum, Gold, Silver) and assign visit frequencies automatically (e.g., F4 - Weekly, F2 - Bi-weekly). This ensures your best customers get the attention they deserve.
                        </p>

                        <h3>2. Visual Route Optimization</h3>
                        <p>
                            With integrated maps, managers can visualize customer locations and assign them to specific days (e.g., "Monday Route"). This visual approach highlights inefficiencies instantly—if a Monday route spans two opposite ends of the city, you'll see it and fix it immediately.
                        </p>

                        <h3>3. Real-Time Compliance Tracking</h3>
                        <p>
                            A plan is only good if it's executed. GPS check-ins verify that the rep actually visited the location. The system compares the <em>Planned</em> vs. <em>Actual</em> visits, providing a clear "Compliance Score" for each rep.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Success Story</h4>
                            <p className="text-slate-300 mb-0">
                                One of our partners reduced their field travel costs by <strong>25%</strong> while increasing daily visits per rep from 12 to 15, simply by optimizing their MCPs using our Route Management module.
                            </p>
                        </div>

                        <h2>Conclusion</h2>
                        <p>
                            Smart Route Planning is a low-hanging fruit for efficiency. It requires no extra effort from the rep but yields massive gains in productivity. By digitizing your MCP, you turn travel time into face time.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
