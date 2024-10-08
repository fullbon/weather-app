'use client';

import * as React from 'react';
import SelectCity from '@/ui/select-city';
import { City } from '@/types/weather';
import { Button } from '@nextui-org/button';
import Weather from '@/ui/weather';
import BackButton from '@/ui/back-button';

export default function CityWeather() {
    const [city, setCity] = React.useState<City | null>(null);
    const [showWeather, setShowWeather] = React.useState<boolean>(false);

    const handleConfirmCity = () => {
        if (city !== null) {
            setShowWeather(true);
        }
    }

    const handleClickBack = () => {
        setShowWeather(false);
        setCity(null);
    }

    if (city !== null && showWeather) {
        return <React.Fragment>
            <Weather city={city} />
            <BackButton onClick={handleClickBack}>Выбрать город</BackButton>
        </React.Fragment>
    }

    return (
        <React.Fragment>
            <SelectCity onChange={setCity} />
            <Button
                disabled={city === null}
                onClick={handleConfirmCity}
                color={city === null ? 'default' : 'primary'}
                className={'mt-3'}
            >
                Показать погоду
            </Button>
        </React.Fragment>
    );
}
