export interface Location {
    lat: string,
    lon: string
}

export type DadataItem = {
    value: string,
    restricted_value: string,
    data: {
        city: string,
        city_with_type: string,
        geo_lat: string,
        geo_lon: string,
    }
}

export type DadataResponse = {
    suggestions: DadataItem[]
}

export interface City extends Location {
    name: string;
}

export type WeatherResponse = {
    weather: {
        id: number,
        main: string,
        description: string
        icon: string
    }[],
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    sys: {
        sunrise: number,
        sunset: number
    }
}