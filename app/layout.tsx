import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Outfit } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { Navbar } from '@/components/Navbar';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: 'Kopi Paras — Cinematic Coffee Rituals',
  description:
    'An Awwwards-level scrollytelling experience for Kopi Paras, a cinematic coffee brand crafted for deep focus and slow mornings.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-kopi-ink text-kopi-cream antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

