import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Veda Studios',
  description: 'Assessment Veda Studios',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
