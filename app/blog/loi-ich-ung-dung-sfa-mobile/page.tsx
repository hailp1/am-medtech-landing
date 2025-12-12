import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Tại sao mọi Trình Dược Viên đều cần ứng dụng SFA Mobile?',
    description: 'Khám phá cách ứng dụng Tự động hóa Lực lượng Bán hàng (SFA) trên di động tăng hiệu quả, giảm sai sót và trao quyền cho trình dược viên.',
    openGraph: {
        title: 'Tại sao mọi Trình Dược Viên đều cần ứng dụng SFA Mobile? | AM Medtech',
        description: 'Khám phá cách ứng dụng Tự động hóa Lực lượng Bán hàng (SFA) trên di động tăng hiệu quả, giảm sai sót và trao quyền cho trình dược viên.',
        url: 'https://ammedtech.com/blog/loi-ich-ung-dung-sfa-mobile',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/route-planning.png',
                width: 1200,
                height: 630,
                alt: 'Ứng dụng SFA Mobile',
            },
        ],
        locale: 'vi_VN',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
