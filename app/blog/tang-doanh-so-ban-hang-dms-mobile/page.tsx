import React from 'react';
import BlogPostClient from './BlogPostClient';

export const metadata = {
    title: 'Tăng trưởng 30% doanh số bán hàng nhờ tự động hóa quy trình đặt hàng trên Mobile | An Minh DMS',
    description: 'Khám phá cách ứng dụng đặt hàng trên Mobile giúp rút ngắn thời gian lên đơn, giảm sai sót và thúc đẩy tăng trưởng doanh số vượt bậc cho doanh nghiệp Dược.',
    keywords: ['tăng doanh số', 'đặt hàng mobile', 'sales automation', 'app bán hàng', 'an minh dms'],
    openGraph: {
        title: 'Tăng trưởng 30% doanh số nhờ Mobile App',
        description: 'Tự động hóa quy trình bán hàng, chốt đơn nhanh chóng ngay tại điểm bán.',
        images: ['/blog/sales-growth.png'],
        locale: 'vi_VN',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
