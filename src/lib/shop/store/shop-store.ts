import { createStore } from 'zustand/vanilla';
import { ShopState, ShopStore } from '@/types/shop';
import { fetchCategoriesFromFakeShop } from '@/lib/shop/actions';

export const defaultInitState: ShopState = {
    categories: [],
    products: [],
};

export const createShopStore = (
    initState: ShopState = defaultInitState
) => {
    return createStore<ShopStore>()((set) => ({
        ...initState,
        fetchCategories: () => {
            fetchCategoriesFromFakeShop()
                .then(categories => {
                    console.log({ categories })
                    return set((state) => ({categories}))
                })
        },
    }));
};