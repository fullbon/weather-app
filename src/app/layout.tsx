import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/system';
import * as React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Портфолио',
    description: 'Пет проекты для самообучения',
};

export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NextUIProvider>
            {children}
        </NextUIProvider>
        </body>
        </html>
    );
}
