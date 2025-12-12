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
                                    Sales Management
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> Dec 02, 2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 5 min read
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Driving Sales Performance with Real-time KPI Tracking
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
                                src="/blog/digital-transformation.jpg"
                                alt="KPI Dashboard"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            In the fast-paced world of pharma sales, waiting for end-of-month reports to assess performance is like driving a car while looking only in the rearview mirror. To stay ahead, sales teams need real-time data.
                        </p>

                        <h2>The Problem with Lagging Indicators</h2>
                        <p>
                            Traditional sales management relies on "lagging indicators"—metrics that tell you what happened <em>after</em> it's too late to change the outcome. If a rep misses their target in Week 1, but you only find out in Week 4, the opportunity to course-correct is lost.
                        </p>

                        <h2>Real-Time KPIs: The Game Changer</h2>
                        <p>
                            Implementing a live dashboard changes the psychology of the sales team. When reps can see their progress bar filling up in real-time, it triggers a natural competitive instinct and a drive for completion.
                        </p>

                        <h3>Key Metrics to Track</h3>
                        <ul>
                            <li><strong>Daily Call Rate:</strong> Are they meeting the required number of doctors/pharmacies per day?</li>
                            <li><strong>Strike Rate:</strong> What percentage of visits result in an order?</li>
                            <li><strong>Productivity Per Call:</strong> The average value of orders taken.</li>
                            <li><strong>Coverage:</strong> Percentage of assigned territory visited vs. planned.</li>
                        </ul>

                        <h2>Transparency Builds Trust</h2>
                        <p>
                            One of the biggest friction points in sales teams is the calculation of incentives. "Why was my bonus calculated this way?" is a common grievance. With a transparent, real-time KPI system, there are no surprises. Reps know exactly where they stand every day, and they know exactly what they need to do to hit their targets.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Pro Tip</h4>
                            <p className="text-slate-300 mb-0">
                                Gamify the experience. Use leaderboards to highlight top performers not just in sales volume, but in "effort metrics" like new coverage or new product introductions. This encourages the right behaviors, not just the easiest sales.
                            </p>
                        </div>

                        <h2>Conclusion</h2>
                        <p>
                            Data is the new fuel for sales engines. By moving from static reports to dynamic, real-time dashboards, you empower your team to take ownership of their performance and drive consistent growth.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
