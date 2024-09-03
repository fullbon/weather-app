'use server';

import { CategoryProps } from '@/types/shop';

export async function fetchCategoriesFromFakeShop(): Promise<CategoryProps[]> {
    if (!process.env.FAKE_SHOP_API_URL) {
        throw new Error('Укажите путь к FakeShop');
    }

    const url: string = process.env.FAKE_SHOP_API_URL + '/categories';
    const response = await fetch(url);

    return await response.json();
}