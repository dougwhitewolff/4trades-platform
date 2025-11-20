import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}

