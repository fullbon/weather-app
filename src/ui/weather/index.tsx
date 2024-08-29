'use client';

import { City } from '@/types/types';

type Props = {
    city: City
}

export default function Weather(props: Props) {
    return <div className={'text-center'}>
        <div>{props.city.name}</div>
        <div>Координаты: {props.city.lat} {props.city.lon}</div>
    </div>
}