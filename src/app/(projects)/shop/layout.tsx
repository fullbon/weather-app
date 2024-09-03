'use client';

import * as React from 'react';
import { ShopStoreProvider } from './store-provider';
import Compare from '@/ui/icons/compare';
import Link from 'next/link';
import Basket from '@/ui/icons/basket';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ShopStoreProvider>
            <div className={'p-20 fixed right-0 top-12 flex flex-col gap-2'}>
                <Link title={'Список сравнения'} href="/"><Compare /></Link>
                <Link title={'Корзина'} href="/"><Basket /></Link>
            </div>
            {children}
        </ShopStoreProvider>
    );
}
