import Link from 'next/link';
import '../globals.css';

export const metadata = {
    title: 'My personal site',
    description: 'A personal site made with Next.js, TailwindCSS, Sanity.io, and TypeScript.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className='max-w-3xl py-10 mx-auto'>
                <header>
                    <Link
                        className='bg-gradient-to-l from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-lg font-bold text-transparent'
                        href='/'
                    >
                        Rita
                    </Link>
                </header>
                <main className='py-20'>{children}</main>
            </body>
        </html>
    );
}
