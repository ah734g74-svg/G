import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'نبض يومي | Nabd Daily',
  description: 'مقالات أصلية وعملية في الحياة اليومية والتقنية والتعلم والصحة العامة.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  alternates: { languages: { ar: '/', en: '/en' } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
