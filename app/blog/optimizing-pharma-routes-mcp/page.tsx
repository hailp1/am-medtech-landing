import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

export const metadata: Metadata = {
    title: 'Optimizing Pharma Distribution with Smart Route Planning (MCP)',
    description: 'How Master Call Plans (MCP) reduce travel time and ensure 100% customer coverage in pharmaceutical distribution.',
    openGraph: {
        title: 'Optimizing Pharma Distribution with Smart Route Planning (MCP) | AM Medtech',
        description: 'How Master Call Plans (MCP) reduce travel time and ensure 100% customer coverage in pharmaceutical distribution.',
        url: 'https://ammedtech.com/blog/optimizing-pharma-routes-mcp',
        siteName: 'AM Medtech',
        images: [
            {
                url: '/blog/route-planning.png',
                width: 1200,
                height: 630,
                alt: 'Smart Route Planning',
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
};

export default function Page() {
    return <BlogPostClient />;
}
