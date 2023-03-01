'use client';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from 'react';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof document !== undefined) {
      require('bootstrap/dist/js/bootstrap.bundle');
    }
  }, []);

  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
