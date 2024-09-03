'use client';

import * as React from 'react';
import Card from '@/ui/shop/card/category';
import { useShopStore, } from '@/app/(projects)/shop/store-provider';
import Loading from '@/ui/loading';

export default function Shop() {
    const {categories, fetchCategories} = useShopStore((state) => state);

    React.useEffect(() => {
        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (categories.length === 0) {
        return <Loading />
    }

    return <div>
        <h1 className={'text-center'}>Выберите категорию</h1>
        <div className={'flex flex-wrap items-center justify-center max-w-4xl'}>
            {categories.map((category) => <Card key={category} name={category} />)}
        </div>
    </div>;
}
