'use client';

import * as React from 'react';
import Home from '@/ui/icons/home';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Back from '@/ui/icons/back';
import Compare from '@/ui/icons/compare';

export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()

    const handleBackClick = () => {
        router.back();
    }
    return <main className={'h-screen'}>
        <div className={'p-20 fixed left-0'}>
            <Link href='' onClick={handleBackClick}><Back /></Link>
        </div>
        <div className={'p-20 fixed right-0 flex flex-col gap-2'}>
            <Link title={'Домой'} href="/"><Home /></Link>
        </div>
        <div className={'p-40 flex content-center justify-center items-center flex-col'}>
            {children}
        </div>
    </main>
}