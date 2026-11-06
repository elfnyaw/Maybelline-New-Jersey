import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maybelline New York | Make It Happen',
  description: 'Makeup for every version of you. Discover face, eye, and lip essentials from Maybelline New York.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
