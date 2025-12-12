import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Predictive Power: How AI is Transforming Pharma Sales Forecasting',
    description: 'Learn how Artificial Intelligence is moving pharma sales forecasting from guesswork to precision, optimizing inventory and revenue.',
    openGraph: {
        title: 'Predictive Power: How AI is Transforming Pharma Sales Forecasting | AM Medtech',
        description: 'Learn how Artificial Intelligence is moving pharma sales forecasting from guesswork to precision, optimizing inventory and revenue.',
        url: 'https://ammedtech.com/blog/ai-sales-forecasting',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/ai-supply-chain.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Sales Forecasting',
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
