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

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-50 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ scaleX: 0 }} // This would normally be linked to scroll position
            />

            <article className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Breadcrumb & Back */}
                    <div className="mb-8 flex items-center justify-between">
                        <Link href="/blog" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Quay lại Blog
                        </Link>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold">
                                Kiến thức & Giải pháp
                            </span>
                        </div>
                    </div>

                    {/* Header */}
                    <header className="mb-12 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            DMS là gì? Tại sao doanh nghiệp Dược phẩm cần phần mềm DMS ngay hôm nay?
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
                                <span>5 phút đọc</span>
                            </div>
                        </motion.div>
                    </header>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-cyan-900/20"
                    >
                        <Image
                            src="/blog/dms-definition.png"
                            alt="DMS Dashboard Visualization"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white">
                        <p className="lead text-xl text-slate-300 mb-8">
                            Trong bối cảnh thị trường Dược phẩm cạnh tranh khốc liệt, việc quản lý thủ công bằng sổ sách hay Excel không còn đủ để doanh nghiệp bứt phá. Đây là lúc **DMS (Distribution Management System)** trở thành "vũ khí bí mật" của các nhà quản lý. Vậy DMS là gì và nó giải quyết bài toán gì cho ngành Dược?
                        </p>

                        <h2>1. DMS là gì?</h2>
                        <p>
                            **DMS** viết tắt của **Distribution Management System** (Hệ thống Quản lý Phân phối). Đây là giải pháp phần mềm chuyên dụng giúp các doanh nghiệp sản xuất và phân phối quản lý toàn bộ hoạt động bán hàng từ trụ sở công ty đến các nhà phân phối, đại lý và điểm bán lẻ (nhà thuốc, quầy thuốc).
                        </p>
                        <p>
                            Khác với ERP (tập trung vào nguồn lực nội bộ), DMS tập trung tối ưu hóa **"chiến trường" bên ngoài** - nơi đội ngũ kinh doanh (Sales/Trình dược viên) tiếp xúc với khách hàng hàng ngày.
                        </p>

                        <h2>2. Tại sao Doanh nghiệp Dược phẩm "sống chết" phải có DMS?</h2>
                        <p>
                            Ngành Dược có những đặc thù riêng biệt như quản lý lô date, hàng cận date, quy định giá bán chặt chẽ và mạng lưới phân phối rộng khắp. Dưới đây là 3 lý do cốt tử:
                        </p>

                        <h3>a. "Điểm mù" về tồn kho và độ phủ</h3>
                        <p>
                            Không có DMS, bạn sẽ không biết chính xác hàng hóa đang nằm ở đâu trên thị trường. Nhà thuốc A báo hết hàng, nhưng thực tế trong kho vẫn còn? DMS cung cấp số liệu **real-time (thời gian thực)** về tồn kho tại từng điểm bán, giúp luân chuyển hàng hóa thông minh, giảm thiểu hàng hết hạn (date).
                        </p>

                        <h3>b. Giám sát đội ngũ Trình dược viên (TDV)</h3>
                        <p>
                            TDV có thực sự đi thăm nhà thuốc không? Hay chỉ ngồi quán cà phê "chấm công"?
                            Với tính năng **GPS Tracking** và **Check-in/Check-out** tại điểm bán, DMS giúp giám sát lộ trình di chuyển, đảm bảo nhân viên tuân thủ tuyến bán hàng (MCP) đã được phân công.
                        </p>

                        <h3>c. Tự động hóa quy trình đặt hàng</h3>
                        <p>
                            Thay vì ghi chép giấy tờ rồi về nhập lại vào máy tính (dễ sai sót), TDV có thể lên đơn ngay trên ứng dụng Mobile. Đơn hàng được chuyển tức thì về kế toán duyệt và kho xuất hàng. Thời gian xử lý đơn hàng giảm từ **24h xuống còn 5 phút**.
                        </p>

                        <div className="my-8 p-6 bg-cyan-900/20 border border-cyan-500/30 rounded-xl">
                            <h4 className="text-cyan-400 font-bold mb-2 text-lg">💡 Con số biết nói</h4>
                            <p className="mb-0 text-slate-300">
                                Theo thống kê, các doanh nghiệp áp dụng DMS giúp **tăng 25% năng suất** làm việc của nhân viên kinh doanh và **giảm 30% chi phí** vận hành hệ thống phân phối.
                            </p>
                        </div>

                        <h2>3. Các tính năng cốt lõi của An Minh DMS</h2>
                        <ul className="space-y-2">
                            <li>✅ **Giám sát định vị GPS:** Theo dõi vị trí và lộ trình nhân viên trên bản đồ số.</li>
                            <li>✅ **Quản lý tuyến bán hàng (MCP):** Phân tuyến thông minh, đảm bảo tần suất viếng thăm.</li>
                            <li>✅ **Đặt hàng trên Mobile:** Catalog sản phẩm điện tử, lên đơn nhanh chóng, gợi ý khuyến mãi.</li>
                            <li>✅ **Quản lý trưng bày:** Chụp ảnh trưng bày tại điểm bán, chấm điểm trưng bày.</li>
                            <li>✅ **Báo cáo thông minh:** Dashboard trực quan về doanh số, độ phủ, hiệu quả làm việc.</li>
                        </ul>

                        <h2>Kết luận</h2>
                        <p>
                            Chuyển đổi số không còn là lựa chọn, mà là con đường bắt buộc. Việc triển khai phần mềm DMS không chỉ giúp doanh nghiệp Dược phẩm "giữ nhà" (quản lý chặt chẽ) mà còn là đòn bẩy để "tấn công" (mở rộng thị trường) hiệu quả hơn.
                        </p>
                        <p>
                            **An Minh DMS** tự hào là giải pháp được thiết kế "may đo" cho đặc thù ngành Dược Việt Nam. Hãy để chúng tôi đồng hành cùng sự phát triển của bạn.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 p-8 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/30 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Sẵn sàng tối ưu hóa hệ thống phân phối?</h3>
                        <p className="text-slate-300 mb-6">Đăng ký ngay để được tư vấn và trải nghiệm Demo miễn phí giải pháp An Minh DMS.</p>
                        <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all transform hover:scale-105">
                            Liên hệ tư vấn ngay <ArrowLeft className="rotate-180" size={20} />
                        </Link>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                            {['DMS', 'Phần mềm quản lý', 'Ngành Dược', 'Chuyển đổi số', 'Logistics'].map((tag) => (
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
