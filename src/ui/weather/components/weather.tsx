'use client';

import { City, WeatherResponse } from '@/types/weather';
import { weatherRequest } from '@/lib/weather/actions';
import * as React from 'react';
import { Link } from '@nextui-org/link';
import Loading from '@/ui/loading';

type Props = {
    city: City
}

export default function Weather(props: Props) {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [weather, setWeather] = React.useState<WeatherResponse | null>(null);

    const getWeather = () => {
        setLoading(true);
        weatherRequest(props.city).then(result => {
            setWeather(result)
            setLoading(false);
        });
    }

    React.useEffect(() => {
        getWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading || weather === null) {
        return <Loading />
    }

    return <div className={'text-center'}>
        <div>{props.city.name}</div>
        <div>
            <Link target={'_blank'} href={`https://maps.yandex.ru/?ll=${props.city.lon},${props.city.lat}`}>
                {props.city.lat}, {props.city.lon}
            </Link>
        </div>
        <div>{weather?.main.temp.toFixed(1)}°C, ощущается как {weather?.main.feels_like.toFixed(1)}°C</div>
    </div>
}