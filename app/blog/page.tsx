'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
    const [activeTab, setActiveTab] = React.useState('ALL');

    const blogPosts = [
        {
            image: "/blog/dms-definition.png",
            category: "Kiến thức & Giải pháp",
            date: "Dec 04, 2024",
            title: "DMS là gì? Tại sao doanh nghiệp Dược phẩm cần phần mềm DMS ngay hôm nay?",
            desc: "Tìm hiểu DMS là gì và tại sao phần mềm quản lý hệ thống phân phối (DMS) lại là yếu tố sống còn đối với các doanh nghiệp Dược phẩm.",
            slug: "dms-la-gi-phan-mem-dms-duoc-pham",
            language: "VN"
        },
        {
            image: "/blog/tdv-gps.png",
            category: "Quản lý đội ngũ",
            date: "Dec 04, 2024",
            title: "Bí quyết Quản lý Trình dược viên (TDV) đi tuyến hiệu quả bằng công nghệ GPS",
            desc: "Làm thế nào để giám sát đội ngũ trình dược viên hiệu quả mà không gây áp lực? Khám phá giải pháp GPS của An Minh DMS.",
            slug: "quan-ly-trinh-duoc-vien-gps",
            language: "VN"
        },
        {
            image: "/blog/sales-growth.png",
            category: "Tăng trưởng doanh số",
            date: "Dec 04, 2024",
            title: "Tăng trưởng 30% doanh số bán hàng nhờ tự động hóa quy trình đặt hàng trên Mobile",
            desc: "Khám phá cách ứng dụng đặt hàng trên Mobile giúp rút ngắn thời gian lên đơn và thúc đẩy tăng trưởng doanh số vượt bậc.",
            slug: "tang-doanh-so-ban-hang-dms-mobile",
            language: "VN"
        },
        {
            image: "/blog/route-planning.png",
            category: "Kiến thức & Giải pháp",
            date: "Dec 04, 2024",
            title: "Giải pháp Quản lý Tuyến bán hàng DMS - Tối ưu hiệu quả 2025",
            desc: "Khám phá giải pháp quản lý tuyến bán hàng thông minh, giúp giám sát nhân viên thị trường, tối ưu lộ trình và tăng 30% doanh số.",
            slug: "giai-phap-quan-ly-tuyen-ban-hang",
            language: "VN"
        },
        {
            image: "/blog/ai-supply-chain.jpg",
            category: "Artificial Intelligence",
            date: "Dec 03, 2024",
            title: "Predictive Power: How AI is Transforming Pharma Sales Forecasting",
            desc: "Learn how Artificial Intelligence is moving pharma sales forecasting from guesswork to precision, optimizing inventory and revenue.",
            slug: "ai-sales-forecasting",
            language: "EN"
        },
        {
            image: "/blog/route-planning.png",
            category: "Mobile Technology",
            date: "Dec 03, 2024",
            title: "Why Every Medical Representative Needs a Mobile SFA App",
            desc: "Discover how mobile Sales Force Automation (SFA) apps boost efficiency, reduce errors, and empower pharma sales reps.",
            slug: "mobile-sfa-benefits",
            language: "EN"
        },
        {
            image: "/blog/route-planning.png",
            category: "Logistics & Operations",
            date: "Dec 02, 2024",
            title: "Optimizing Pharma Distribution with Smart Route Planning (MCP)",
            desc: "How Master Call Plans (MCP) reduce travel time and ensure 100% customer coverage in pharmaceutical distribution.",
            slug: "optimizing-pharma-routes-mcp",
            language: "EN"
        },
        {
            image: "/blog/digital-transformation.jpg",
            category: "Sales Management",
            date: "Dec 02, 2024",
            title: "Driving Sales Performance with Real-time KPI Tracking",
            desc: "Moving beyond monthly reports: How real-time dashboards motivate rep behavior and drive pharmaceutical sales growth.",
            slug: "real-time-kpi-tracking",
            language: "EN"
        },
        {
            image: "/blog/digital-transformation.jpg",
            category: "Digital Strategy",
            date: "Dec 01, 2024",
            title: "5 Key Steps to Digital Transformation in Pharma Distribution",
            desc: "Learn how leading pharmaceutical companies are modernizing their supply chains and sales operations to stay competitive.",
            slug: "digital-transformation-pharma",
            language: "EN"
        },
        {
            image: "/blog/ai-supply-chain.jpg",
            category: "Artificial Intelligence",
            date: "Nov 28, 2024",
            title: "How AI is Revolutionizing Pharmaceutical Supply Chains",
            desc: "From predictive demand forecasting to route optimization, discover the impact of AI on logistics efficiency.",
            slug: "ai-in-supply-chain",
            language: "EN"
        }
    ];
    return (
        <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#0A192F] relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Insights & News</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Pharma Tech
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Explore the latest trends, expert analysis, and success stories in pharmaceutical digital transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 bg-[#020617]">
                <div className="container mx-auto px-6">
                    {/* Language Filter Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-slate-800/50 p-1 rounded-full border border-white/10 backdrop-blur-sm inline-flex">
                            <button
                                onClick={() => setActiveTab('ALL')}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'ALL' ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}`}
                            >
                                All Posts
                            </button>
                            <button
                                onClick={() => setActiveTab('VN')}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'VN' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-400 hover:text-white'}`}
                            >
                                🇻🇳 Tiếng Việt
                            </button>
                            <button
                                onClick={() => setActiveTab('EN')}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'EN' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-white'}`}
                            >
                                🇺🇸 English
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.filter(post => activeTab === 'ALL' || post.language === activeTab).map((post, index) => (
                            <BlogCard
                                key={index}
                                {...post}
                                language={post.language as 'EN' | 'VN'}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

const BlogCard = ({ image, category, date, title, desc, slug, delay, language = 'EN' }: { image: string, category: string, date: string, title: string, desc: string, slug: string, delay: number, language?: 'EN' | 'VN' }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="group bg-[#112240]/30 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all hover:-translate-y-1"
    >
        {/* Image Placeholder */}
        <div className="relative h-48 bg-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60 z-10"></div>
            {/* Ideally use Next/Image here, but using div for placeholder if image missing */}
            <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500">
                <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold border backdrop-blur-sm ${language === 'VN' ? 'bg-red-500/20 border-red-500/30 text-red-400' : 'bg-blue-500/20 border-blue-500/30 text-blue-400'}`}>
                    {language}
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold backdrop-blur-sm">
                    {category}
                </span>
            </div>
        </div>

        <div className="p-6">
            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{date}</span>
                </div>
                <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>AM Medtech Team</span>
                </div>
            </div>

            <Link href={`/blog/${slug}`} className="block">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {title}
                </h3>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {desc}
            </p>

            <Link href={`/blog/${slug}`} className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold hover:gap-3 transition-all">
                {language === 'VN' ? 'Đọc bài viết' : 'Read Article'} <ArrowRight size={16} />
            </Link>
        </div>
    </motion.div>
);

export default BlogPage;
