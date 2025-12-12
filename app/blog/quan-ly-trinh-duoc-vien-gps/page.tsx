import React from 'react';
import BlogPostClient from './BlogPostClient';

export const metadata = {
    title: 'Bí quyết Quản lý Trình dược viên (TDV) đi tuyến hiệu quả bằng công nghệ GPS | An Minh DMS',
    description: 'Làm thế nào để giám sát đội ngũ trình dược viên hiệu quả mà không gây áp lực? Khám phá giải pháp quản lý tuyến bán hàng bằng GPS của An Minh DMS.',
    keywords: ['quản lý trình dược viên', 'giám sát tdv', 'gps tracking', 'phần mềm dms', 'quản lý nhân viên thị trường'],
    openGraph: {
        title: 'Bí quyết Quản lý Trình dược viên (TDV) hiệu quả',
        description: 'Giải pháp giám sát và hỗ trợ đội ngũ bán hàng thị trường với công nghệ định vị GPS chính xác.',
        images: ['/blog/tdv-gps.png'],
        locale: 'vi_VN',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
