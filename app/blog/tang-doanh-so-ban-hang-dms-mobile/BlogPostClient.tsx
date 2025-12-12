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
                                Tăng trưởng doanh số
                            </span>
                        </div>
                    </div>

                    <header className="mb-12 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Tăng trưởng 30% doanh số bán hàng nhờ tự động hóa quy trình đặt hàng trên Mobile
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
                                <span>4 phút đọc</span>
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
                            src="/blog/sales-growth.png"
                            alt="Sales Growth Chart"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                    </motion.div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white">
                        <p className="lead text-xl text-slate-300 mb-8">
                            Trong kinh doanh, tốc độ là tiền bạc. Quy trình đặt hàng truyền thống qua giấy tờ, điện thoại hay Zalo đang trở thành "nút thắt cổ chai" kìm hãm sự phát triển của nhiều doanh nghiệp Dược. Giải pháp đặt hàng tự động trên Mobile App chính là chìa khóa để tháo gỡ nút thắt này.
                        </p>

                        <h2>1. "Nỗi đau" của quy trình đặt hàng thủ công</h2>
                        <p>
                            Hãy tưởng tượng quy trình cũ: TDV ghi đơn ra sổ &rarr; Chụp ảnh gửi Zalo về kế toán &rarr; Kế toán gõ lại vào Excel/Phần mềm &rarr; Kho soạn hàng.
                        </p>
                        <p>
                            Quy trình này tiềm ẩn vô số rủi ro:
                        </p>
                        <ul>
                            <li>**Sai sót:** Ghi nhầm mã thuốc, nhầm số lượng, chữ xấu không đọc được.</li>
                            <li>**Độ trễ:** Đơn sáng đặt, chiều mới nhập, sáng mai mới giao. Khách hàng chờ lâu sẽ đổi ý mua của đối thủ.</li>
                            <li>**Mất cơ hội:** Không nhớ hết chương trình khuyến mãi để tư vấn thêm cho khách (Upsell).</li>
                        </ul>

                        <h2>2. Mobile App: Vũ khí bán hàng sắc bén</h2>
                        <p>
                            Với ứng dụng An Minh DMS trên điện thoại, quy trình bán hàng được rút gọn tối đa:
                        </p>
                        <ul>
                            <li>**Catalog điện tử:** Hình ảnh sản phẩm trực quan, thông tin hoạt chất, công dụng đầy đủ.</li>
                            <li>**Tồn kho Real-time:** Biết ngay hàng còn hay hết để tư vấn, tránh tình trạng "bán vịt trời".</li>
                            <li>**Gợi ý thông minh:** Hệ thống tự động nhắc nhở các chương trình khuyến mãi đang chạy, gợi ý sản phẩm bán chạy.</li>
                            <li>**Đặt hàng 1 chạm:** Chọn sản phẩm, chọn khuyến mãi, bấm gửi. Đơn hàng về hệ thống trung tâm trong 1 giây.</li>
                        </ul>

                        <h2>3. Kết quả: Tăng trưởng 30% là điều trong tầm tay</h2>
                        <p>
                            Khi loại bỏ được các thao tác thủ công rườm rà, TDV có nhiều thời gian hơn để chăm sóc khách hàng và tìm kiếm khách hàng mới.
                        </p>
                        <p>
                            Đồng thời, việc tư vấn chính xác và giao hàng nhanh chóng giúp tăng sự hài lòng của nhà thuốc, từ đó tăng tỷ lệ quay lại đặt hàng (Retention Rate).
                        </p>

                        <div className="my-8 p-6 bg-green-900/20 border border-green-500/30 rounded-xl">
                            <h4 className="text-green-400 font-bold mb-2 text-lg">📈 Case Study</h4>
                            <p className="mb-0 text-slate-300">
                                Một khách hàng của An Minh DMS tại TP.HCM đã ghi nhận mức tăng trưởng doanh số **32%** chỉ sau 3 tháng chuyển đổi từ đặt hàng qua Zalo sang sử dụng App Mobile.
                            </p>
                        </div>

                        <h2>Kết luận</h2>
                        <p>
                            Đừng để quy trình lạc hậu kìm hãm doanh nghiệp của bạn. Hãy trang bị cho đội ngũ chiến binh của mình vũ khí tốt nhất để chiến thắng trên thị trường.
                        </p>
                    </div>

                    <div className="mt-16 p-8 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/30 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Tăng tốc doanh số ngay hôm nay</h3>
                        <p className="text-slate-300 mb-6">Liên hệ với An Minh DMS để được tư vấn giải pháp Mobile App phù hợp nhất.</p>
                        <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all transform hover:scale-105">
                            Nhận tư vấn miễn phí <ArrowLeft className="rotate-180" size={20} />
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                            {['Mobile App', 'Tăng doanh số', 'Tự động hóa', 'Bán hàng', 'Công nghệ'].map((tag) => (
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
