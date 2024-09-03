import { ProductProps } from '@/types/shop';
import Rating from '@/ui/rating';
import Image from 'next/image';

type ProductCardProps = {
    product: ProductProps
}

export default function Product({ product }: ProductCardProps) {
    return <div className={'flex m-10 w-80 h-80 group relative shadow-lg hover:shadow-2xl transition delay-10 '}>
        <div className={'w-fit h-[100%] p-5 flex flex-wrap items-center content-between justify-center cursor-pointer'}>
            <div className={'h-[55%] mt-5'}>
                <div className={'w-fit h-full m-auto'}><img className={'w-fit h-full'} src={product.image} alt={product.description} /></div>
            </div>
            <div className={'w-full'}>
                <div className={'py-2 text-sm'}>{product.title}</div>
                <div className={'flex justify-between w-full'}>
                    <Rating value={product.rating.rate} productId={product.id} />
                    <div className={'text-red-700'}>{product.price} $</div>
                </div>
            </div>
        </div>
        <div className={'bg-white h-12 shadow-lg w-full p-3 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-11 transition delay-20'}>
            <div className={'flex justify-between'}>
                <div>В список сравнения</div>
                <div>В корзину</div>
            </div>
        </div>
    </div>
}