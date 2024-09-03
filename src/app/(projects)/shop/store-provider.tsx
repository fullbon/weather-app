import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { createShopStore } from '@/lib/shop/store/shop-store'
import { ShopStore } from '@/types/shop';

export type ShopStoreApi = ReturnType<typeof createShopStore>

export const ShopStoreContext = createContext<ShopStoreApi | undefined>(
    undefined,
)

export interface ShopStoreProviderProps {
    children: ReactNode
}

export const ShopStoreProvider = ({
    children,
}: ShopStoreProviderProps) => {
    const storeRef = useRef<ShopStoreApi>()
    if (!storeRef.current) {
        storeRef.current = createShopStore()
    }

    return (
        <ShopStoreContext.Provider value={storeRef.current}>
            {children}
        </ShopStoreContext.Provider>
    )
}

export const useShopStore = <T,>(
    selector: (store: ShopStore) => T,
): T => {
    const counterStoreContext = useContext(ShopStoreContext)

    if (!counterStoreContext) {
        throw new Error(`useShopStore must be used within ShopStoreProvider`)
    }

    return useStore(counterStoreContext, selector)
}