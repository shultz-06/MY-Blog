import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { siteInfo } from '@/data/siteData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.title} | ${siteInfo.subtitle}`,
    template: `%s | ${siteInfo.title}`,
  },
  description: siteInfo.heading,
  keywords: ['portfolio', 'finance', 'operations', 'MBA', 'strategy'],
  authors: [{ name: siteInfo.title }],
  creator: siteInfo.title,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>
          <div className="2xl:max-w-[1920px] mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

