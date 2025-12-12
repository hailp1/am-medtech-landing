'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Calendar, User, Clock, ArrowLeft, TrendingUp, BarChart2 } from 'lucide-react';

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
                                    Artificial Intelligence
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> Dec 03, 2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 7 min read
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Predictive Power: How AI is Transforming Pharma Sales Forecasting
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
                                src="/blog/ai-supply-chain.jpg"
                                alt="AI Sales Forecasting"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            Sales forecasting has long been more art than science in the pharmaceutical industry. Relying on historical spreadsheets and gut feeling often leads to stockouts or overstocking. Artificial Intelligence (AI) is changing the game by turning data into accurate predictions.
                        </p>

                        <h2>Beyond Spreadsheets</h2>
                        <p>
                            Traditional forecasting methods look at what happened last year to predict what will happen next year. But they fail to account for dynamic variables like:
                        </p>
                        <ul>
                            <li>Disease outbreaks (e.g., flu season intensity).</li>
                            <li>Competitor price changes.</li>
                            <li>Regulatory shifts.</li>
                        </ul>
                        <p>
                            AI algorithms ingest all these data points to create a dynamic, living forecast that adjusts in real-time.
                        </p>

                        <h2>The Benefits of AI Forecasting</h2>
                        <h3>1. Inventory Optimization</h3>
                        <p>
                            By accurately predicting demand at the SKU level for each region, distributors can maintain leaner inventories without risking stockouts. This frees up working capital that was previously tied up in safety stock.
                        </p>

                        <h3>2. Strategic Resource Allocation</h3>
                        <p>
                            Knowing which territories are likely to see a surge in demand allows sales managers to deploy their best reps where they are needed most, maximizing revenue potential.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Impact Stat</h4>
                            <p className="text-slate-300 mb-0">
                                AI-driven forecasting can reduce forecast errors by up to <strong>50%</strong> and reduce lost sales due to stockouts by <strong>65%</strong>.
                            </p>
                        </div>

                        <h2>Implementing AI in Your Workflow</h2>
                        <p>
                            You don't need a team of data scientists to leverage AI. Modern DMS platforms like AM Medtech's include built-in analytics modules that handle the heavy lifting. The system automatically analyzes your sales data and presents actionable insights on a simple dashboard.
                        </p>

                        <h2>Conclusion</h2>
                        <p>
                            The future of pharma sales is predictive. Those who adopt AI tools today will have a significant competitive advantage, reacting to market shifts before they even happen.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
