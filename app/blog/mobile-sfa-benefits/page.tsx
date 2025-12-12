import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Why Every Medical Representative Needs a Mobile SFA App',
    description: 'Discover how mobile Sales Force Automation (SFA) apps boost efficiency, reduce errors, and empower pharma sales reps.',
    openGraph: {
        title: 'Why Every Medical Representative Needs a Mobile SFA App | AM Medtech',
        description: 'Discover how mobile Sales Force Automation (SFA) apps boost efficiency, reduce errors, and empower pharma sales reps.',
        url: 'https://ammedtech.com/blog/mobile-sfa-benefits',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/route-planning.png',
                width: 1200,
                height: 630,
                alt: 'Mobile SFA App',
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
