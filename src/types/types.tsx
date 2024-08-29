export interface Location {
    lat: string,
    lon: string
}

export type DadataItem = {
    value: string,
    restricted_value: string,
    data: {
        area: string,
        city: string,
        country: string,
        geo_lat: string,
        geo_lon: string,
    }
}

export type DadataResponse = {
    suggestions: DadataItem[]
}

export interface City extends Location {
    name: string
}