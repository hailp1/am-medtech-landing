import React from 'react';
import BlogPostClient from './BlogPostClient';

export const metadata = {
    title: 'DMS là gì? Tại sao doanh nghiệp Dược phẩm cần phần mềm DMS ngay hôm nay? | An Minh DMS',
    description: 'Tìm hiểu DMS là gì và tại sao phần mềm quản lý hệ thống phân phối (DMS) lại là yếu tố sống còn đối với các doanh nghiệp Dược phẩm trong kỷ nguyên số.',
    keywords: ['dms là gì', 'phần mềm dms', 'dms dược phẩm', 'quản lý phân phối', 'an minh dms'],
    openGraph: {
        title: 'DMS là gì? Giải pháp sống còn cho doanh nghiệp Dược phẩm',
        description: 'Tối ưu vận hành, kiểm soát tồn kho và đội ngũ bán hàng với phần mềm DMS chuyên biệt cho ngành Dược.',
        images: ['/blog/dms-definition.png'],
        locale: 'vi_VN',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
