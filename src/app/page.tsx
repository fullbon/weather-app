import { Link } from '@nextui-org/link';
import WeatherPreview from '@/app/(projects)/weather/preview';

export default function Home() {
    return <div className={'p-40'}>
        <h1>Проекты</h1>
        <h2><Link className={'text-2xl'} href={'/weather'}>Погода в городе</Link></h2>
        <WeatherPreview />
    </div>
}