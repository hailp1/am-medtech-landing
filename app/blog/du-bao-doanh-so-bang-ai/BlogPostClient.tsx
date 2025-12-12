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
                            <ArrowLeft size={16} /> Quay lại Blog
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                                    Trí tuệ nhân tạo (AI)
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> 03/12/2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 7 phút đọc
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Sức mạnh tiên tri: AI đang thay đổi dự báo doanh số ngành dược như thế nào?
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
                                alt="Dự báo doanh số bằng AI"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            Dự báo doanh số từ lâu đã mang tính nghệ thuật hơn là khoa học trong ngành dược phẩm. Việc dựa vào các bảng tính lịch sử và cảm tính thường dẫn đến tình trạng thiếu hàng hoặc tồn kho quá mức. Trí tuệ nhân tạo (AI) đang thay đổi cuộc chơi bằng cách biến dữ liệu thành những dự đoán chính xác.
                        </p>

                        <h2>Vượt xa các bảng tính Excel</h2>
                        <p>
                            Các phương pháp dự báo truyền thống nhìn vào những gì đã xảy ra năm ngoái để dự đoán năm tới. Nhưng chúng thất bại trong việc tính toán các biến số động như:
                        </p>
                        <ul>
                            <li>Bùng phát dịch bệnh (ví dụ: cường độ mùa cúm).</li>
                            <li>Thay đổi giá của đối thủ cạnh tranh.</li>
                            <li>Thay đổi về quy định pháp luật.</li>
                        </ul>
                        <p>
                            Các thuật toán AI tiếp nhận tất cả các điểm dữ liệu này để tạo ra một dự báo động, sống và điều chỉnh theo thời gian thực.
                        </p>

                        <h2>Lợi ích của Dự báo bằng AI</h2>
                        <h3>1. Tối ưu hóa Tồn kho</h3>
                        <p>
                            Bằng cách dự đoán chính xác nhu cầu ở cấp độ SKU cho từng khu vực, các nhà phân phối có thể duy trì lượng hàng tồn kho tinh gọn hơn mà không gặp rủi ro thiếu hàng. Điều này giải phóng vốn lưu động trước đây bị kẹt trong kho an toàn.
                        </p>

                        <h3>2. Phân bổ Nguồn lực Chiến lược</h3>
                        <p>
                            Biết được khu vực nào có khả năng tăng nhu cầu cho phép các giám đốc bán hàng triển khai những nhân viên giỏi nhất của họ đến nơi cần thiết nhất, tối đa hóa tiềm năng doanh thu.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Số liệu tác động</h4>
                            <p className="text-slate-300 mb-0">
                                Dự báo dựa trên AI có thể giảm sai số dự báo lên đến <strong>50%</strong> và giảm doanh số bị mất do thiếu hàng tới <strong>65%</strong>.
                            </p>
                        </div>

                        <h2>Triển khai AI trong Quy trình làm việc của bạn</h2>
                        <p>
                            Bạn không cần một đội ngũ khoa học dữ liệu để tận dụng AI. Các nền tảng DMS hiện đại như của AM Medtech bao gồm các mô-đun phân tích tích hợp sẵn xử lý các tác vụ nặng nhọc. Hệ thống tự động phân tích dữ liệu bán hàng của bạn và trình bày các thông tin chi tiết có thể hành động trên một bảng điều khiển đơn giản.
                        </p>

                        <h2>Kết luận</h2>
                        <p>
                            Tương lai của bán hàng dược phẩm là dự báo. Những ai áp dụng các công cụ AI ngay hôm nay sẽ có lợi thế cạnh tranh đáng kể, phản ứng với những thay đổi của thị trường trước khi chúng thực sự xảy ra.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
