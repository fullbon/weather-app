import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/system';
import styles from '@/app/layout.module.css';
import * as React from 'react';

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
                    <main className={styles.main}>
                    {children}
                    </main>
                </NextUIProvider>
            </body>
        </html>
    );
}
