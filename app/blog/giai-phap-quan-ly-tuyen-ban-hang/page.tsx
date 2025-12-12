import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Giải pháp quản lý tuyến bán hàng (MCP) tối ưu cho doanh nghiệp dược',
    description: 'Tối ưu hóa quy trình phân phối dược phẩm với Master Call Plan (MCP). Giảm chi phí vận hành và tăng độ phủ thị trường.',
    openGraph: {
        title: 'Giải pháp quản lý tuyến bán hàng (MCP) tối ưu cho doanh nghiệp dược | AM Medtech',
        description: 'Tối ưu hóa quy trình phân phối dược phẩm với Master Call Plan (MCP). Giảm chi phí vận hành và tăng độ phủ thị trường.',
        url: 'https://ammedtech.com/blog/giai-phap-quan-ly-tuyen-ban-hang',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/route-planning.png',
                width: 1200,
                height: 630,
                alt: 'Quản lý tuyến bán hàng MCP',
            },
        ],
        locale: 'vi_VN',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
