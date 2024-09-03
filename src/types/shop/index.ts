export type CategoryProps = string;

export type ProductProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RatingProps
};

export type RatingProps = {
    rate: number,
    count: number
};


export type ShopState = {
    categories: CategoryProps[],
    products: ProductProps[],
};

export type ShopActions = {
    fetchCategories: () => void,
};

export type ShopStore = ShopState & ShopActions;