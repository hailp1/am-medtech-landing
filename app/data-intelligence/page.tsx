'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain, Database, Link as LinkIcon, TrendingUp, ShieldCheck, Zap,
    Activity, Globe, Server, Map, Truck, Package, BarChart3,
    PieChart, ArrowRight, CheckCircle2, AlertCircle, ShoppingCart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DataIntelligencePage = () => {
    return (
        <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
            {/* Navbar (Consistent with Home) */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-6">
                            INTELLIGENT ECOSYSTEM
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                            Data-Driven <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                Pharma Mastery
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                            From AI-powered demand forecasting to real-time logistics tracking.
                            We provide the visual intelligence you need to dominate the market.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 1. Supply Chain & Logistics Tracking */}
            <section className="py-16 sm:py-20 bg-slate-900/30 border-y border-white/5">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End <span className="text-cyan-400">Logistics Visibility</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Track every shipment in real-time. Our blockchain-backed ledger ensures transparency from warehouse to pharmacy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Interactive Map Visualization */}
                        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-[#0B1221] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 opacity-30 bg-[url('/map-pattern.svg')] bg-cover"></div>
                            {/* Simulated Route Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <motion.path
                                    d="M100,300 Q250,150 400,200 T700,100"
                                    fill="none"
                                    stroke="#06b6d4"
                                    strokeWidth="2"
                                    strokeDasharray="5 5"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                                <motion.circle cx="100" cy="300" r="4" fill="#06b6d4">
                                    <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                                </motion.circle>
                                <motion.circle cx="700" cy="100" r="4" fill="#ef4444" />
                            </svg>

                            {/* Floating Delivery Cards */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-10 left-10 bg-slate-800/90 backdrop-blur p-4 rounded-xl border border-cyan-500/30 shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Truck className="text-cyan-400 w-5 h-5" />
                                    <span className="font-bold text-sm">Vehicle #VN-8829</span>
                                </div>
                                <div className="text-xs text-slate-400">Route: HCM Warehouse → Da Nang</div>
                                <div className="text-xs text-green-400 mt-1">● On Time</div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-10 right-10 bg-slate-800/90 backdrop-blur p-4 rounded-xl border border-purple-500/30 shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Package className="text-purple-400 w-5 h-5" />
                                    <span className="font-bold text-sm">Order #ORD-9921</span>
                                </div>
                                <div className="text-xs text-slate-400">Status: Out for Delivery</div>
                                <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 w-[80%] h-full"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Order Tracking Timeline */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Activity className="text-cyan-400" /> Tracking On-chain
                                </h3>
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono flex items-center gap-2">
                                    <LinkIcon size={12} /> Blockchain Verified
                                </span>
                            </div>

                            <OnChainTracking />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Regional Performance Analytics */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold mb-6">Regional <br /><span className="text-blue-500">Performance</span></h2>
                            <p className="text-slate-400 mb-8">
                                Real-time dashboards provide granular visibility into sales performance across all branches. Identify top performers and underperforming territories instantly.
                            </p>
                            <div className="space-y-4">
                                <StatCard label="Total Active Regions" value="12" />
                                <StatCard label="Top Growth Region" value="North Central (+45%)" />
                                <StatCard label="Active Pharmacies" value="2,450+" />
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-slate-800/30 rounded-2xl sm:rounded-3xl border border-white/5 p-4 sm:p-6 md:p-8">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-bold flex items-center gap-2">
                                    <BarChart3 className="text-blue-400" /> Sales by Region (Monthly)
                                </h3>
                                <div className="flex gap-2">
                                    <span className="w-3 h-3 rounded-full bg-blue-500"></span> <span className="text-xs text-slate-400">Target</span>
                                    <span className="w-3 h-3 rounded-full bg-cyan-400"></span> <span className="text-xs text-slate-400">Actual</span>
                                </div>
                            </div>

                            {/* Custom Bar Chart Visualization */}
                            <div className="space-y-6">
                                <RegionBar region="Ho Chi Minh City" target={90} actual={95} />
                                <RegionBar region="Hanoi" target={85} actual={82} />
                                <RegionBar region="Da Nang" target={70} actual={78} />
                                <RegionBar region="Can Tho" target={60} actual={65} />
                                <RegionBar region="Hai Phong" target={50} actual={48} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. AI Forecasting Section - ENHANCED */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-[#020617]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-bold tracking-wider text-sm">PREDICTIVE INTELLIGENCE</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">AI-Driven <span className="text-purple-500">Inventory Forecasting</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Eliminate stockouts and reduce excess inventory by 40%. Our machine learning models analyze 50+ variables including historical sales, seasonality, market trends, and external factors to predict demand with 98.5% accuracy.
                        </p>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-4"
                        >
                            <div className="text-purple-400 text-xs font-bold mb-1">FORECAST ACCURACY</div>
                            <div className="text-2xl font-bold text-white mb-1">98.5%</div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                                <TrendingUp size={12} /> +2.3% vs last month
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-xl p-4"
                        >
                            <div className="text-cyan-400 text-xs font-bold mb-1">STOCKOUT REDUCTION</div>
                            <div className="text-2xl font-bold text-white mb-1">-87%</div>
                            <div className="text-xs text-slate-400">vs traditional methods</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-4"
                        >
                            <div className="text-blue-400 text-xs font-bold mb-1">INVENTORY TURNOVER</div>
                            <div className="text-2xl font-bold text-white mb-1">8.2x</div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                                <TrendingUp size={12} /> +1.4x improvement
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 rounded-xl p-4"
                        >
                            <div className="text-pink-400 text-xs font-bold mb-1">COST SAVINGS</div>
                            <div className="text-2xl font-bold text-white mb-1">₫2.4B</div>
                            <div className="text-xs text-slate-400">per quarter</div>
                        </motion.div>
                    </div>

                    {/* Advanced AI Forecasting Chart - ENHANCED */}
                    <div className="relative max-w-6xl mx-auto bg-[#0B1221] rounded-2xl sm:rounded-3xl border border-purple-500/20 p-6 md:p-8 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                        {/* Chart Header & Controls */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-bold text-white">90-Day Multi-Scenario Demand Forecast</h3>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30">LIVE MODEL</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                    <span>Product: <span className="text-white">Paracetamol 500mg</span></span>
                                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                    <span>SKU: <span className="text-white font-mono">PAR-500-100</span></span>
                                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                    <span>Region: <span className="text-white">Nationwide</span></span>
                                </div>
                            </div>

                            {/* Scenario Toggles */}
                            <div className="flex bg-slate-900/50 p-1 rounded-lg border border-white/10">
                                <button className="px-4 py-1.5 rounded-md bg-purple-600 text-white text-xs font-bold shadow-lg">All Scenarios</button>
                                <button className="px-4 py-1.5 rounded-md text-slate-400 hover:text-white text-xs font-medium transition-colors">Baseline Only</button>
                                <button className="px-4 py-1.5 rounded-md text-slate-400 hover:text-white text-xs font-medium transition-colors">Risk Analysis</button>
                            </div>
                        </div>

                        {/* Chart Legend */}
                        <div className="flex flex-wrap gap-6 mb-6 text-xs border-b border-white/5 pb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-0.5 bg-purple-500"></div>
                                <span className="text-slate-300">Historical Data</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-0.5 bg-cyan-400"></div>
                                <span className="text-slate-300">AI Baseline (P50)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-0.5 border-t border-dashed border-green-400"></div>
                                <span className="text-slate-300">Optimistic Scenario (P90)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-0.5 border-t border-dashed border-orange-400"></div>
                                <span className="text-slate-300">Pessimistic Scenario (P10)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gradient-to-b from-cyan-500/20 to-transparent border border-cyan-500/30 rounded-sm"></div>
                                <span className="text-slate-300">Confidence Interval (95%)</span>
                            </div>
                        </div>

                        {/* Main Chart Area */}
                        <div className="relative h-[400px] w-full">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 grid grid-cols-6 gap-4 pointer-events-none">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={`vgrid-${i}`} className="border-r border-white/5 h-full relative">
                                        <span className="absolute bottom-[-24px] -left-4 text-xs text-slate-500 font-mono">
                                            {['Nov 1', 'Nov 15', 'Dec 1', 'Dec 15', 'Jan 1', 'Jan 15'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute inset-0 grid grid-rows-5 gap-4 pointer-events-none">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={`hgrid-${i}`} className="border-b border-white/5 w-full relative">
                                        <span className="absolute left-[-32px] -top-2 text-xs text-slate-500 font-mono">
                                            {['12.5k', '10k', '7.5k', '5k', '2.5k'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* SVG Chart */}
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 400">
                                <defs>
                                    <linearGradient id="confidenceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                                    </linearGradient>
                                    <linearGradient id="historicalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Confidence Interval Area */}
                                <motion.path
                                    d="M 500,150 C 600,100 700,50 800,80 S 900,20 1000,40 L 1000,280 C 900,250 800,230 700,250 S 600,200 500,150 Z"
                                    fill="url(#confidenceGradient)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                />

                                {/* Optimistic Scenario Line */}
                                <motion.path
                                    d="M 500,150 C 600,100 700,50 800,80 S 900,20 1000,40"
                                    fill="none"
                                    stroke="#4ade80"
                                    strokeWidth="2"
                                    strokeDasharray="6 4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />

                                {/* Pessimistic Scenario Line */}
                                <motion.path
                                    d="M 500,150 C 600,200 700,250 800,230 S 900,250 1000,280"
                                    fill="none"
                                    stroke="#fb923c"
                                    strokeWidth="2"
                                    strokeDasharray="6 4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />

                                {/* AI Baseline Forecast Line (Main) */}
                                <motion.path
                                    d="M 500,150 C 600,140 700,120 800,140 S 900,80 1000,100"
                                    fill="none"
                                    stroke="#22d3ee"
                                    strokeWidth="3"
                                    filter="url(#glow)"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: 0.2 }}
                                />

                                {/* Historical Data Line */}
                                <motion.path
                                    d="M 0,350 C 100,330 200,300 300,250 S 400,200 500,150"
                                    fill="none"
                                    stroke="#a855f7"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 1.5 }}
                                />

                                {/* Historical Area Fill */}
                                <motion.path
                                    d="M 0,350 C 100,330 200,300 300,250 S 400,200 500,150 L 500,400 L 0,400 Z"
                                    fill="url(#historicalGradient)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                />

                                {/* Current Day Vertical Line */}
                                <line x1="500" y1="0" x2="500" y2="400" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                                <g transform="translate(500, 20)">
                                    <rect x="-35" y="0" width="70" height="24" rx="4" fill="#a855f7" />
                                    <text x="0" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">TODAY</text>
                                </g>

                                {/* Event Markers */}
                                {/* Event 1: Holiday Season */}
                                <motion.g
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2 }}
                                    transform="translate(800, 40)"
                                >
                                    <line x1="0" y1="0" x2="0" y2="100" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                                    <circle cx="0" cy="100" r="4" fill="#ef4444" />
                                    <foreignObject x="-60" y="-50" width="120" height="50">
                                        <div className="bg-red-500/10 border border-red-500/50 rounded p-1.5 text-center backdrop-blur-sm">
                                            <div className="text-[10px] font-bold text-red-400">HOLIDAY SPIKE</div>
                                            <div className="text-[9px] text-red-300">+25% Demand</div>
                                        </div>
                                    </foreignObject>
                                </motion.g>

                                {/* Event 2: Supply Chain Optimization */}
                                <motion.g
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2.5 }}
                                    transform="translate(650, 230)"
                                >
                                    <line x1="0" y1="0" x2="0" y2="-80" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
                                    <circle cx="0" cy="-80" r="4" fill="#10b981" />
                                    <foreignObject x="-60" y="10" width="120" height="50">
                                        <div className="bg-green-500/10 border border-green-500/50 rounded p-1.5 text-center backdrop-blur-sm">
                                            <div className="text-[10px] font-bold text-green-400">RESTOCK</div>
                                            <div className="text-[9px] text-green-300">Auto-Triggered</div>
                                        </div>
                                    </foreignObject>
                                </motion.g>

                                {/* Interactive Scanner Line (Animation) */}
                                <motion.line
                                    x1="500" y1="0" x2="500" y2="400"
                                    stroke="#22d3ee"
                                    strokeWidth="1"
                                    opacity="0.5"
                                    animate={{ x1: [500, 1000, 500], x2: [500, 1000, 500] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </div>

                        {/* Chart Footer - AI Model Info */}
                        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
                            <div className="flex gap-6">
                                <div className="flex items-center gap-2">
                                    <Brain size={14} className="text-purple-400" />
                                    <span>Model: <span className="text-slate-300">LSTM-Prophet Hybrid v2.4</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Database size={14} className="text-cyan-400" />
                                    <span>Data Points: <span className="text-slate-300">2.4M analyzed</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Activity size={14} className="text-green-400" />
                                    <span>Confidence: <span className="text-green-400 font-bold">98.5%</span></span>
                                </div>
                            </div>
                            <div className="text-slate-600">
                                Last updated: <span className="font-mono">Today, 14:30 UTC</span>
                            </div>
                        </div>
                    </div>

                    {/* Insights Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-slate-800/30 border border-white/10 rounded-xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                                    <AlertCircle className="text-yellow-400" size={20} />
                                </div>
                                <h4 className="font-bold text-white">Stock Alert</h4>
                            </div>
                            <p className="text-sm text-slate-400 mb-3">
                                Based on forecast, current stock will be depleted in <span className="text-yellow-400 font-bold">12 days</span>
                            </p>
                            <div className="text-xs text-white bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                                <strong>Recommendation:</strong> Order 15,000 units by Dec 5th to maintain optimal stock levels
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-slate-800/30 border border-white/10 rounded-xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                    <Brain className="text-purple-400" size={20} />
                                </div>
                                <h4 className="font-bold text-white">AI Insights</h4>
                            </div>
                            <p className="text-sm text-slate-400 mb-3">
                                Demand spike detected due to <span className="text-purple-400 font-bold">flu season</span> correlation
                            </p>
                            <div className="flex gap-2 text-xs">
                                <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-400">+15% vs avg</span>
                                <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400">High confidence</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="bg-slate-800/30 border border-white/10 rounded-xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                    <CheckCircle2 className="text-green-400" size={20} />
                                </div>
                                <h4 className="font-bold text-white">Optimization</h4>
                            </div>
                            <p className="text-sm text-slate-400 mb-3">
                                Optimal reorder point: <span className="text-green-400 font-bold">5,200 units</span>
                            </p>
                            <div className="text-xs text-slate-400">
                                Economic Order Quantity: <span className="text-white font-bold">12,500 units</span><br />
                                Lead time: <span className="text-white font-bold">3-5 days</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 backdrop-blur-sm">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Intelligence?</h2>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                            Transform your raw data into a strategic asset. Schedule a demo to see our dashboard in action.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                        >
                            Schedule a Demo <TrendingUp className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

// --- Sub-components ---

const OnChainTracking = () => {
    const steps = [
        { status: "Order Created", hash: "0x7f...3a9", time: "09:30:05", icon: <ShoppingCart size={16} /> },
        { status: "Smart Contract Verified", hash: "0x8a...2b1", time: "09:30:12", icon: <ShieldCheck size={16} /> },
        { status: "Warehouse Picked", hash: "0x1c...9d4", time: "10:15:00", icon: <Package size={16} /> },
        { status: "In Transit", hash: "0x4e...5f2", time: "14:00:00", icon: <Truck size={16} /> },
        { status: "Delivered", hash: "Pending...", time: "--:--:--", icon: <CheckCircle2 size={16} /> }
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-slate-900/50 rounded-2xl border border-white/10 p-6 overflow-hidden">
            {/* Connecting Line */}
            <div className="absolute left-[2.25rem] top-8 bottom-8 w-0.5 bg-slate-800"></div>

            {/* Animated Progress Line */}
            <motion.div
                className="absolute left-[2.25rem] top-8 w-0.5 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                animate={{ height: `${(activeStep / (steps.length - 1)) * 80}%` }}
                transition={{ duration: 0.5 }}
            />

            <div className="space-y-6 relative z-10">
                {steps.map((step, index) => {
                    const isActive = index <= activeStep;
                    const isCurrent = index === activeStep;

                    return (
                        <div key={index} className="flex items-center gap-4">
                            {/* Icon Circle */}
                            <motion.div
                                animate={{
                                    backgroundColor: isActive ? 'rgba(6, 182, 212, 0.2)' : 'rgba(30, 41, 59, 1)',
                                    borderColor: isActive ? 'rgba(6, 182, 212, 0.5)' : 'rgba(51, 65, 85, 1)',
                                    scale: isCurrent ? 1.1 : 1
                                }}
                                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}
                            >
                                {step.icon}
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-500'}`}>{step.status}</h4>
                                    <span className="text-xs font-mono text-slate-500">{step.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-slate-600 font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-white/5">
                                        TX: {step.hash}
                                    </span>
                                    {isActive && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-[10px] text-green-500 flex items-center gap-1"
                                        >
                                            <CheckCircle2 size={10} /> Confirmed
                                        </motion.span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const StatCard = ({ label, value }: { label: string, value: string }) => (
    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
        <div className="text-slate-400 text-xs mb-1">{label}</div>
        <div className="text-xl font-bold text-white">{value}</div>
    </div>
);

const RegionBar = ({ region, target, actual }: { region: string, target: number, actual: number }) => (
    <div>
        <div className="flex justify-between text-sm mb-2">
            <span className="text-white font-medium">{region}</span>
            <span className="text-slate-400">{actual}% / {target}%</span>
        </div>
        <div className="h-3 bg-slate-700 rounded-full overflow-hidden relative">
            {/* Target Marker (Ghost Bar) */}
            <div className="absolute top-0 bottom-0 bg-blue-500/30" style={{ width: `${target}%` }}></div>
            {/* Actual Bar */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${actual}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-full rounded-full ${actual >= target ? 'bg-cyan-400' : 'bg-yellow-500'}`}
            ></motion.div>
        </div>
    </div>
);

export default DataIntelligencePage;
