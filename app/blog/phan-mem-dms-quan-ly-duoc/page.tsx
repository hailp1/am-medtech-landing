import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Tại sao doanh nghiệp dược cần phần mềm DMS chuyên biệt?',
    description: 'Khám phá 5 bước thiết yếu để hiện đại hóa doanh nghiệp phân phối dược phẩm của bạn. Tìm hiểu cách DMS, AI và chiến lược Đa kênh thúc đẩy tăng trưởng.',
    openGraph: {
        title: 'Tại sao doanh nghiệp dược cần phần mềm DMS chuyên biệt? | AM Medtech',
        description: 'Khám phá 5 bước thiết yếu để hiện đại hóa doanh nghiệp phân phối dược phẩm của bạn. Tìm hiểu cách DMS, AI và chiến lược Đa kênh thúc đẩy tăng trưởng.',
        url: 'https://ammedtech.com/blog/phan-mem-dms-quan-ly-duoc',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/digital-transformation.jpg',
                width: 1200,
                height: 630,
                alt: 'Phần mềm DMS Dược phẩm',
            },
        ],
        locale: 'vi_VN',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
