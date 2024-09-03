import { Link } from '@nextui-org/link';
import WeatherPreview from '@/app/(projects)/weather/preview';
import ShopPreview from '@/app/(projects)/shop/preview';

export default function Home() {
    return <div className={'p-40 flex flex-col'}>
        <h1>Проекты</h1>
        <br />
        <h2><Link className={'text-2xl'} href={'/weather'}>Погода в городе</Link></h2>
        <WeatherPreview />
        <br />
        <h2><Link className={'text-2xl'} href={'/shop'}>Магазин</Link></h2>
        <ShopPreview />
    </div>
}