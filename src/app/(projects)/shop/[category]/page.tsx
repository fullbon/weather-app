'use client';

import * as React from 'react';
import Product from '@/app/(projects)/shop/[category]/product';
import { useShopStore, } from '@/app/(projects)/shop/store-provider';
import Loading from '@/ui/loading';

type CategoryPageProps = {
    params: {
        category: string
    }
}

export default function Category({params}: CategoryPageProps) {
    const {
        products,
        fetchProducts,
        clearProducts
    } = useShopStore((state) => state);

    React.useEffect(() => {
        fetchProducts(params.category);

        return clearProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (products.length === 0) {
        return <Loading />
    }

    return <div>
        <div className={'flex flex-wrap items-center justify-center max-w-4xl'}>
            {products.map((product) => <Product
                key={'product-' + product.id}
                product={product}
            />)}
        </div>
    </div>;
}
