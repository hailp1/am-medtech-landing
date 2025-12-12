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
                            <ArrowLeft size={16} /> Quay lại Blog
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                                    Công nghệ di động
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> 03/12/2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 4 phút đọc
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Tại sao mọi Trình Dược Viên đều cần ứng dụng SFA Mobile?
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
                                alt="Ứng dụng SFA Mobile"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            Thời của những cuốn sổ tay dày cộp và viết đơn hàng trên giấy than đã qua rồi. Trong kỷ nguyên số, một Trình Dược Viên (TDV) không có ứng dụng Tự động hóa Lực lượng Bán hàng (SFA) trên di động giống như đi chiến đấu mà bị trói một tay.
                        </p>

                        <h2>Văn phòng trong túi áo</h2>
                        <p>
                            Một ứng dụng SFA di động hợp nhất mọi thứ TDV cần vào một thiết bị duy nhất. Nó không chỉ là về việc nhận đơn hàng; đó là về việc truy cập thông tin tức thì.
                        </p>

                        <h3>Các tính năng chính của SFA hiện đại:</h3>
                        <ul>
                            <li><strong>e-Detailing:</strong> Trình chiếu sản phẩm tương tác trên máy tính bảng, làm cho bài giới thiệu trở nên hấp dẫn hơn đối với bác sĩ.</li>
                            <li><strong>Kiểm tra tồn kho tức thì:</strong> Không bao giờ hứa hẹn một đơn hàng mà bạn không thể giao. Kiểm tra tồn kho kho bãi theo thời gian thực.</li>
                            <li><strong>Chế độ Offline:</strong> Cần thiết cho các khu vực xa xôi có kết nối kém. Đồng bộ dữ liệu tự động khi có mạng trở lại.</li>
                        </ul>

                        <h2>Tăng cường Hiệu quả và Chính xác</h2>
                        <p>
                            Nhập liệu thủ công dễ xảy ra sai sót. Chữ viết tay khó đọc có thể dẫn đến giao nhầm hàng và khách hàng tức giận. Ứng dụng loại bỏ rủi ro này. Đơn hàng được ghi lại kỹ thuật số và gửi trực tiếp đến hệ thống ERP, giảm thời gian xử lý từ vài ngày xuống còn vài phút.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Lợi ích Hiệu suất</h4>
                            <p className="text-slate-300 mb-0">
                                Các nghiên cứu cho thấy ứng dụng SFA giúp nhân viên tiết kiệm trung bình <strong>90 phút mỗi ngày</strong> cho các công việc hành chính—thời gian có thể dành cho 2-3 cuộc gọi bán hàng thêm.
                            </p>
                        </div>

                        <h2>Kết luận</h2>
                        <p>
                            Trao quyền cho lực lượng bán hàng của bạn bằng công nghệ di động không phải là chi phí; đó là khoản đầu tư vào năng suất. Nó chuyên nghiệp hóa đội ngũ của bạn và cung cấp tốc độ cũng như độ chính xác mà các nhà thuốc hiện đại yêu cầu.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
