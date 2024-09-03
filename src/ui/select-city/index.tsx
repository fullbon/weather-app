'use client';

import * as React from 'react';
import {Autocomplete, AutocompleteItem} from "@nextui-org/autocomplete";
import { City } from '@/types/weather';
import { dadataRequest } from '@/lib/weather/actions';
import { useDebouncedCallback } from 'use-debounce';
import { Key } from '@react-types/shared';

type SelectCityProps = {
    onChange: (city: City) => void
}

export default function SelectCity(props: SelectCityProps) {
    const [search, setSearch] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [options, setOptions] = React.useState<City[]>([]);

    const loadOptions = useDebouncedCallback((query: string) => {
        setLoading(true);
        dadataRequest(search).then(cities => {
            setOptions(cities);
            setLoading(false);
        })
    }, 300);

    const handleChange = (key: Key | null) => {
        const city = options.find(o => o.name === key);
        if (city) {
            props.onChange(city);
        }
    }

    React.useEffect(() => {
        loadOptions(search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return <Autocomplete
        className="max-w-md"
        inputValue={search}
        isLoading={loading}
        items={options}
        label="Выберите город"
        placeholder="Начните писать..."
        variant="bordered"
        onInputChange={setSearch}
        onSelectionChange={handleChange}
    >
        {(item) => (
            <AutocompleteItem key={item.name}>
                {item.name}
            </AutocompleteItem>
        )}
    </Autocomplete>
}