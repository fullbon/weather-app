'use server';

import { City, DadataResponse, WeatherResponse } from '@/types/types';

export async function dadataRequest(search: string): Promise<City[]> {
    if (!process.env.DADATA_API_URL) {
        throw new Error('Укажите путь к DaData');
    }

    const url: string = process.env.DADATA_API_URL;
    const method = 'POST';
    const body = {
        query: search,
        from_bound: { value: "city" },
        to_bound: { value: "city" }
    };
    const headers = {
        "Authorization": "Token " + process.env.DADATA_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    const response = await fetch(
        url,
        { method, body: JSON.stringify(body), headers }
    );

    const data: DadataResponse = await response.json();

    return data.suggestions.map(s => ({
        name: s.data.city_with_type,
        lat: s.data.geo_lat,
        lon: s.data.geo_lon,
    }));
}

export async function weatherRequest(city: City): Promise<WeatherResponse> {
    if (!process.env.OPEN_WEATHER_MAP_API_URL) {
        throw new Error('Укажите путь к OpenWeatherMap');
    }

    const url = process.env.OPEN_WEATHER_MAP_API_URL
        + '?lat=' + city.lat
        + '&lon=' + city.lon
        + '&lang=ru'
        + '&units=metric'
        + '&appid=' + process.env.OPEN_WEATHER_MAP_API_KEY;

    const response = await fetch(
        url,
        {
            method: 'GET',
        }
    );
    return await response.json();
}