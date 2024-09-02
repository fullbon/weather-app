'use client';

import { City, WeatherResponse } from '@/types/types';
import { weatherRequest } from '@/lib/actions';
import * as React from 'react';
import {Spinner} from "@nextui-org/spinner";
import { Link } from '@nextui-org/link';

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
    }, []);

    if (loading || weather === null) {
        return <div>
            <Spinner size="xl" color="success" label={'Загрузка'} />
        </div>
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