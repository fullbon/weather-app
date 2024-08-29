'use client';

import * as React from 'react';
import {Autocomplete, AutocompleteItem} from "@nextui-org/autocomplete";
import { City } from '@/types/types';
import { dadata } from '@/lib/actions';
import { useDebouncedCallback } from 'use-debounce';

type SelectCityProps = {
    onChange: (city: City) => void
}

export default function SelectCity(props: SelectCityProps) {
    const [search, setSearch] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [options, setOptions] = React.useState<City[]>([]);

    const loadOptions = useDebouncedCallback((query: string) => {
        setLoading(true);
        dadata(search).then(cities => {
            setOptions(cities);
            setLoading(false);
        })
    }, 300);

    const handleChange = (key) => {
        props.onChange(
            options.find(o => o.name === key) ?? null
        );
    }

    React.useEffect(() => {
        loadOptions(search);
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