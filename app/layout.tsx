import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-work-sans',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata = {
  title: '4Trades.ai - Powering the people who build',
  description: 'Automation built for trades. Stay independent with AI agents that handle calls, scheduling, and office work.',
  keywords: ['4trades', 'trades automation', 'AI agents', 'independent trades', 'after hours calls'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>{children}</body>
    </html>
  );
}

