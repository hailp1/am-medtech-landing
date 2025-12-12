import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Driving Sales Performance with Real-time KPI Tracking',
    description: 'Moving beyond monthly reports: How real-time dashboards motivate rep behavior and drive pharmaceutical sales growth.',
    openGraph: {
        title: 'Driving Sales Performance with Real-time KPI Tracking | AM Medtech',
        description: 'Moving beyond monthly reports: How real-time dashboards motivate rep behavior and drive pharmaceutical sales growth.',
        url: 'https://ammedtech.com/blog/real-time-kpi-tracking',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/digital-transformation.jpg',
                width: 1200,
                height: 630,
                alt: 'Real-time KPI Tracking',
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
