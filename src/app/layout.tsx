import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/system';
import * as React from 'react';
import { Link } from '@nextui-org/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Weather app',
    description: 'Приложение погоды с поиском по городу',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NextUIProvider>
            <main className={'h-screen'}>
                <div className={'p-5 absolute'}>
                    <Link href="/">Домой</Link>
                </div>
                <div className={'flex content-center justify-center items-center flex-col h-full'}>
                    {children}
                </div>
            </main>
        </NextUIProvider>
        </body>
        </html>
    );
}
