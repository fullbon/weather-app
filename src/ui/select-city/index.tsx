'use client';

import * as React from 'react';
import {Autocomplete, AutocompleteItem} from "@nextui-org/autocomplete";
import { Location } from '@/types/types';
import { request } from '@/api/request';

type SelectCityProps = {
    onChange: (location: Location) => void
}

export default function SelectCity(props: SelectCityProps) {
    const [search, setSearch] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [options, setOptions] = React.useState([{name: 'Москва'}]);

    const loadOptions = () => {
        setLoading(true);
        request('')
        setLoading(false);
    }

    React.useEffect(() => {
        loadOptions()
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
    >
        {(item) => (
            <AutocompleteItem key={item.name} className="capitalize">
                {item.name}
            </AutocompleteItem>
        )}
    </Autocomplete>
}