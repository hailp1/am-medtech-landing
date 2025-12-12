'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock, Share2, Tag } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BlogPostClient = () => {
    return (
        <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
            <Navbar />

            <motion.div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-50 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ scaleX: 0 }}
            />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-8 flex items-center justify-between">
                        <Link href="/blog" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Quay lại Blog
                        </Link>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold">
                                Quản lý đội ngũ
                            </span>
                        </div>
                    </div>

                    <header className="mb-12 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Bí quyết Quản lý Trình dược viên (TDV) đi tuyến hiệu quả bằng công nghệ GPS
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
                        >
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-cyan-500" />
                                <span>AM Medtech Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-cyan-500" />
                                <span>04/12/2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-cyan-500" />
                                <span>6 phút đọc</span>
                            </div>
                        </motion.div>
                    </header>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-cyan-900/20"
                    >
                        <Image
                            src="/blog/tdv-gps.png"
                            alt="GPS Tracking App Interface"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                    </motion.div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white">
                        <p className="lead text-xl text-slate-300 mb-8">
                            "Trình dược viên hôm nay đi đâu?" luôn là câu hỏi đau đầu của các Giám đốc kinh doanh. Với đặc thù công việc di chuyển liên tục bên ngoài, việc quản lý đội ngũ TDV sao cho vừa chặt chẽ, vừa tạo động lực là một bài toán khó. Công nghệ GPS tích hợp trong phần mềm DMS chính là lời giải.
                        </p>

                        <h2>1. Thách thức trong quản lý đội ngũ "lính đánh thuê"</h2>
                        <p>
                            Đội ngũ Trình dược viên (TDV) là cầu nối quan trọng nhất giữa công ty dược và nhà thuốc. Tuy nhiên, quản lý họ gặp nhiều khó khăn:
                        </p>
                        <ul>
                            <li>**Không kiểm soát được thời gian thực:** Không biết nhân viên đang ở nhà thuốc hay ở nhà riêng.</li>
                            <li>**Báo cáo ảo:** Nhân viên báo cáo đã viếng thăm nhưng thực tế không đi, hoặc đi không đúng tuyến.</li>
                            <li>**Hiệu suất thấp:** Thời gian di chuyển nhiều hơn thời gian bán hàng do không có lộ trình tối ưu.</li>
                        </ul>

                        <h2>2. GPS Tracking: Giám sát hay Hỗ trợ?</h2>
                        <p>
                            Nhiều nhân viên lo ngại GPS là để "theo dõi". Tuy nhiên, ở góc độ quản lý hiện đại, GPS là công cụ **hỗ trợ**:
                        </p>
                        <ul>
                            <li>**Chứng minh năng lực:** Dữ liệu GPS là bằng chứng khách quan nhất về sự chăm chỉ của nhân viên.</li>
                            <li>**An toàn:** Biết được vị trí nhân viên để hỗ trợ khi có sự cố trên đường.</li>
                            <li>**Tối ưu tuyến (MCP):** Hệ thống gợi ý lộ trình ngắn nhất, giúp nhân viên đi được nhiều điểm hơn với ít công sức hơn.</li>
                        </ul>

                        <h2>3. Quy trình "Viếng thăm chuẩn" trên App DMS</h2>
                        <p>
                            An Minh DMS thiết lập quy trình chuẩn hóa 5 bước cho mỗi lần viếng thăm, đảm bảo chất lượng công việc:
                        </p>
                        <ol>
                            <li>**Check-in:** Nhân viên phải có mặt tại phạm vi 50m quanh nhà thuốc mới có thể bấm Check-in (xác thực bằng GPS).</li>
                            <li>**Chụp ảnh trưng bày:** Chụp ảnh kệ hàng, biển bảng để báo cáo Trade Marketing.</li>
                            <li>**Kiểm tồn:** Cập nhật số lượng tồn kho thực tế tại điểm bán.</li>
                            <li>**Lên đơn hàng:** Ghi nhận đơn đặt hàng mới.</li>
                            <li>**Check-out:** Kết thúc viếng thăm, hệ thống tự động tính thời gian làm việc tại điểm.</li>
                        </ol>

                        <div className="my-8 p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                            <h4 className="text-blue-400 font-bold mb-2 text-lg">🚀 Lợi ích thực tế</h4>
                            <p className="mb-0 text-slate-300">
                                Doanh nghiệp sử dụng tính năng giám sát GPS của An Minh DMS ghi nhận **tỷ lệ tuân thủ tuyến tăng từ 60% lên 95%** chỉ sau 2 tháng triển khai.
                            </p>
                        </div>

                        <h2>Kết luận</h2>
                        <p>
                            Quản lý bằng công nghệ không phải là sự gò bó, mà là sự giải phóng. Giải phóng quản lý khỏi sự nghi ngờ, và giải phóng nhân viên khỏi những báo cáo thủ công rườm rà.
                        </p>
                    </div>

                    <div className="mt-16 p-8 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/30 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Trải nghiệm tính năng GPS Tracking ngay</h3>
                        <p className="text-slate-300 mb-6">Xem demo trực tiếp cách An Minh DMS quản lý hàng trăm nhân viên trên bản đồ số.</p>
                        <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all transform hover:scale-105">
                            Đăng ký Demo <ArrowLeft className="rotate-180" size={20} />
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                            {['GPS Tracking', 'Quản lý nhân sự', 'Sales Force', 'MCP', 'Hiệu suất'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full flex items-center gap-1">
                                    <Tag size={12} /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
