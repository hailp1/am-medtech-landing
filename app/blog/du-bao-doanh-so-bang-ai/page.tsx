import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Sức mạnh tiên tri: AI đang thay đổi dự báo doanh số ngành dược như thế nào?',
    description: 'Tìm hiểu cách Trí tuệ nhân tạo (AI) chuyển đổi dự báo bán hàng dược phẩm từ phỏng đoán sang chính xác, tối ưu hóa tồn kho và doanh thu.',
    openGraph: {
        title: 'Sức mạnh tiên tri: AI đang thay đổi dự báo doanh số ngành dược như thế nào? | AM Medtech',
        description: 'Tìm hiểu cách Trí tuệ nhân tạo (AI) chuyển đổi dự báo bán hàng dược phẩm từ phỏng đoán sang chính xác, tối ưu hóa tồn kho và doanh thu.',
        url: 'https://ammedtech.com/blog/du-bao-doanh-so-bang-ai',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/ai-supply-chain.jpg',
                width: 1200,
                height: 630,
                alt: 'Dự báo doanh số bằng AI',
            },
        ],
        locale: 'vi_VN',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
