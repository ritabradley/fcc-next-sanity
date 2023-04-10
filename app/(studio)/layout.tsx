import '../globals.css';

export const metadata = {
    title: 'My personal site',
    description: 'A personal site made with Next.js, TailwindCSS, Sanity.io, and TypeScript.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
