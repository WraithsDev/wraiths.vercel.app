import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wraiths Dev',
  description: ' Hi, I’m @Wraiths I\'m currently learning I am currently living in Antalya, Turkey.',
  themeColor: '#30953c',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/emojis/753954444902924339.png',
  openGraph: {
    images: 'https://cdn.discordapp.com/emojis/753954444902924339.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
