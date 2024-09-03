import { createStore } from 'zustand/vanilla';
import { ShopState, ShopStore } from '@/types/shop';
import {
    fetchCategoriesFromFakeShop,
    fetchProductsFromFakeShop,
} from '@/lib/shop/actions';

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
                .then(categories => set((state) => ({categories})))
        },
        fetchProducts: (category: string) => {
            fetchProductsFromFakeShop(category)
                .then(products => set((state) => ({products})))
        },
        clearProducts: () => set((state) => ({products: []}))
    }));
};