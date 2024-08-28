import { RequestInit } from 'undici-types/fetch';

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

    return await fetch(
        url,
        {
            method,
            headers,
            body,
        }
    );
};

export { request };