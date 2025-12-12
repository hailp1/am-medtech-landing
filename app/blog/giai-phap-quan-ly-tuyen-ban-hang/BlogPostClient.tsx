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
                            <ArrowLeft size={16} /> Quay lại Blog
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                                    Quản lý Vận hành
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> 02/12/2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 6 phút đọc
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Giải pháp quản lý tuyến bán hàng (MCP) tối ưu cho doanh nghiệp dược
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
                                alt="Quản lý tuyến bán hàng MCP"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            Trong thị trường dược phẩm cạnh tranh khốc liệt, hiệu quả của đội ngũ Trình Dược Viên (TDV) ảnh hưởng trực tiếp đến doanh thu. Master Call Plan (MCP) hay Kế hoạch tuyến bán hàng không chỉ là một lịch trình; đó là tài sản chiến lược giúp tối ưu hóa độ phủ thị trường và tối đa hóa năng suất của mỗi nhân viên.
                        </p>

                        <h2>Thách thức của việc phân tuyến thủ công</h2>
                        <p>
                            Theo truyền thống, các tuyến bán hàng thường được lập dựa trên địa lý hoặc cảm tính. Điều này thường dẫn đến:
                        </p>
                        <ul>
                            <li><strong>Độ phủ không đồng đều:</strong> Các nhà thuốc tiềm năng cao bị bỏ sót hoặc thăm viếng quá ít, trong khi các điểm bán nhỏ lẻ lại được chăm sóc quá mức cần thiết.</li>
                            <li><strong>Lãng phí thời gian:</strong> TDV dành nhiều thời gian di chuyển hơn là bán hàng do lộ trình di chuyển "zíc-zắc" không hợp lý.</li>
                            <li><strong>Thiếu sự kiểm soát:</strong> Quản lý không có cái nhìn thực tế về việc liệu kế hoạch có được tuân thủ hay không.</li>
                        </ul>

                        <h2>Giải pháp MCP Thông minh từ AM Medtech</h2>
                        <p>
                            Hệ thống Quản lý Phân phối (DMS) hiện đại của AM Medtech tích hợp khả năng lập kế hoạch tuyến thông minh ngay trong quy trình làm việc cốt lõi. Đây là cách nó chuyển đổi hoạt động vận hành:
                        </p>

                        <h3>1. Lập lịch dựa trên Tần suất (Frequency)</h3>
                        <p>
                            Không phải tất cả khách hàng đều giống nhau. Hệ thống cho phép phân loại nhà thuốc (ví dụ: Platinum, Gold, Silver) và tự động gán tần suất viếng thăm (ví dụ: F4 - Hàng tuần, F2 - 2 tuần/lần). Điều này đảm bảo khách hàng tốt nhất của bạn luôn nhận được sự chăm sóc xứng đáng.
                        </p>

                        <h3>2. Tối ưu hóa Tuyến đường trực quan</h3>
                        <p>
                            Với bản đồ tích hợp, quản lý có thể nhìn thấy vị trí khách hàng và gán họ vào các ngày cụ thể (ví dụ: "Tuyến Thứ 2"). Cách tiếp cận trực quan này làm nổi bật ngay lập tức các điểm bất hợp lý—nếu một tuyến Thứ 2 trải dài hai đầu thành phố, bạn sẽ thấy và sửa ngay lập tức.
                        </p>

                        <h3>3. Theo dõi Tuân thủ theo thời gian thực</h3>
                        <p>
                            Một kế hoạch chỉ tốt khi nó được thực thi. Chức năng check-in GPS xác minh rằng TDV thực sự đã đến điểm bán. Hệ thống so sánh giữa <em>Kế hoạch (Planned)</em> và <em>Thực tế (Actual)</em>, cung cấp "Điểm tuân thủ" rõ ràng cho từng nhân viên.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Câu chuyện thành công</h4>
                            <p className="text-slate-300 mb-0">
                                Một đối tác của chúng tôi đã giảm <strong>25%</strong> chi phí xăng xe đi lại trong khi tăng số lượng viếng thăm hàng ngày từ 12 lên 15 điểm/nhân viên, chỉ bằng cách tối ưu hóa MCP sử dụng mô-đun Quản lý Tuyến của chúng tôi.
                            </p>
                        </div>

                        <h2>Kết luận</h2>
                        <p>
                            Quản lý Tuyến thông minh là "trái ngọt dễ hái" để tăng hiệu quả. Nó không đòi hỏi thêm nỗ lực từ phía nhân viên nhưng mang lại lợi ích to lớn về năng suất. Bằng cách số hóa MCP, bạn biến thời gian di chuyển lãng phí thành thời gian bán hàng quý giá.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
