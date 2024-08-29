'use server'

import { RequestInit } from 'undici-types/fetch';
import { City, DadataResponse } from '@/types/types';

const request = async (
    url: string,
    { method = 'GET', data = undefined, headers = {} }: RequestInit
) => {
    let body: string = '';

    if (data !== undefined) {
        if (method === 'GET') {
            const queryParams = new URLSearchParams(data).toString();

            if (queryParams !== '') {
                url += '?' + queryParams;
            }
        } else {
            body = JSON.stringify(data);
        }
    }

    if (headers['Content-Type'] === undefined) {
        headers['Content-Type'] = 'application/json';
    }

    if (headers['Accept'] === undefined) {
        headers['Accept'] = 'application/json';
    }

    return await fetch(
        url,
        {
            method,
            headers,
            body,
        }
    );
};

export async function dadata(search: string): Promise<City[]> {
    const response = await request(
        process.env.DADATA_API_URL,
        {
            method: 'POST',
            data: {
                query: search,
                from_bound: { value: "city" },
                to_bound: { value: "city" }
            },
            headers: {
                "Authorization": "Token " + process.env.DADATA_API_KEY
            }
        }
    )
    const data: DadataResponse = await response.json();

    return data.suggestions.map(s => ({
        name: s.data.city_with_type,
        lat: s.data.geo_lat,
        lon: s.data.geo_lon,
    }));
}