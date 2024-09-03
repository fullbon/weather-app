'use server';

import { CategoryProps, ProductProps } from '@/types/shop';

const checkEnv = () => {
    if (!process.env.FAKE_SHOP_API_URL) {
        throw new Error('Укажите путь к FakeShop');
    }
}

const response = async (url: string) => {
    checkEnv();
    const response = await fetch(process.env.FAKE_SHOP_API_URL + url);
    return await response.json();
}

export async function fetchCategoriesFromFakeShop(): Promise<CategoryProps[]> {
    return await response('/categories');
}

export async function fetchProductsFromFakeShop(category: string): Promise<ProductProps[]> {
    return await response('/category/' + category);
}