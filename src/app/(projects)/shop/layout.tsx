'use client';

import * as React from 'react';
import { ShopStoreProvider } from './store-provider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ShopStoreProvider>
            {children}
        </ShopStoreProvider>
    );
}
