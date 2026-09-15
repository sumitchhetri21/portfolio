import type { Metadata, Viewport } from 'next';
import { Inter, Caveat, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['700', '800'],
});

export const metadata: Metadata = {
  title: 'JD — Little Corner of the Internet',
  description: 'Interactive glassmorphism portfolio of JD — Student, Creator, and Football Enthusiast.',
  keywords: ['Portfolio', 'Glassmorphism', 'Next.js', 'Tailwind CSS', 'Developer', 'Creator'],
  authors: [{ name: 'JD' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${caveat.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
