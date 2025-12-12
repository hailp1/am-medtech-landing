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
                                    Chuyển đổi số
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Calendar size={14} /> 02/12/2024
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> 5 phút đọc
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                Tại sao doanh nghiệp dược cần phần mềm DMS chuyên biệt?
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
                                alt="Phần mềm DMS Dược phẩm"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="lead text-xl text-slate-300 mb-8">
                            Ngành dược phẩm đang đứng trước ngã rẽ quan trọng. Các mô hình phân phối truyền thống, dựa vào quy trình thủ công và dữ liệu rời rạc, không còn đủ sức đáp ứng nhu cầu của một thị trường đang thay đổi nhanh chóng. Chuyển đổi số không chỉ là xu hướng; đó là chiến lược sinh tồn.
                        </p>

                        <h2>1. Số hóa Quản lý Tồn kho</h2>
                        <p>
                            Nền tảng của bất kỳ chuỗi cung ứng hiệu quả nào là khả năng hiển thị theo thời gian thực. Chuyển từ theo dõi bằng bảng tính sang <strong>Hệ thống Quản lý Phân phối (DMS)</strong> dựa trên đám mây cho phép:
                        </p>
                        <ul>
                            <li>Giám sát tồn kho theo thời gian thực trên nhiều kho bãi.</li>
                            <li>Cảnh báo hạn sử dụng tự động để giảm lãng phí (FEFO - Hết hạn trước, Xuất trước).</li>
                            <li>Theo dõi lô hàng (Batch tracking) để quản lý thu hồi nhanh chóng nếu cần thiết.</li>
                        </ul>

                        <h2>2. Trao quyền cho Đội ngũ Bán hàng với Dữ liệu</h2>
                        <p>
                            Trình dược viên là những chiến binh tiền tuyến của bạn. Trang bị cho họ các công cụ di động cung cấp quyền truy cập tức thì vào:
                        </p>
                        <ul>
                            <li>Lịch sử mua hàng và hạn mức tín dụng của khách hàng.</li>
                            <li>Tình trạng tồn kho trực tiếp để ngăn chặn đơn hàng không thể thực hiện.</li>
                            <li>Đề xuất chương trình khuyến mãi và chiết khấu cá nhân hóa.</li>
                        </ul>
                        <p>
                            Điều này chuyển vai trò của họ từ những người "ghi đơn hàng" đơn thuần thành các tư vấn viên chiến lược cho nhà thuốc.
                        </p>

                        <div className="my-12 p-8 bg-[#112240] rounded-2xl border-l-4 border-cyan-500">
                            <h4 className="text-xl font-bold text-white mb-2">Bạn có biết?</h4>
                            <p className="text-slate-300 mb-0">
                                Các công ty triển khai công cụ bán hàng tích hợp AI ghi nhận mức tăng doanh thu trung bình <strong>15-20%</strong> ngay trong năm đầu tiên áp dụng.
                            </p>
                        </div>

                        <h2>3. Đảm bảo tuân thủ GSP/GDP bằng Công nghệ</h2>
                        <p>
                            Tuân thủ là yếu tố không thể thương lượng. Các hệ thống kỹ thuật số tự động tạo ra dấu vết kiểm toán (audit trails), giám sát điều kiện nhiệt độ cho các sản phẩm dây chuyền lạnh (tích hợp IoT), và đảm bảo rằng mọi bước của quy trình phân phối đều tuân thủ Thực hành Tốt Bảo quản và Phân phối thuốc.
                        </p>

                        <hr className="my-12 border-white/10" />

                        <h3>Kết luận</h3>
                        <p>
                            Chuyển đổi số là một hành trình, không phải là đích đến. Bằng cách bắt đầu với những lĩnh vực cốt lõi này, các nhà phân phối dược phẩm có thể xây dựng một hoạt động vận hành linh hoạt, hiệu quả và lấy khách hàng làm trung tâm, sẵn sàng cho tương lai.
                        </p>
                        <p>
                            Tại <strong>AM Medtech</strong>, chúng tôi chuyên hướng dẫn các doanh nghiệp dược phẩm vượt qua quá trình chuyển đổi này với hệ sinh thái giải pháp được thiết kế riêng.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogPostClient;
