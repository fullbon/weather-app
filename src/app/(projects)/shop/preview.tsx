import { Link } from '@nextui-org/link';

export default function ShopPreview() {
    return <div>
        <p>
            Магазин одежды с возможностью наполнять корзину. Здесь используется стейт-менеджер Zustand для кросскомпонентного управления состоянием и API <Link href={'https://fakestoreapi.com/docs'}>FakeShop</Link>
        </p>
    </div>
}