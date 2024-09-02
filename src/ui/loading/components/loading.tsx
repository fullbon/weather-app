import { Spinner } from '@nextui-org/spinner';
import * as React from 'react';

type Props = {
    label?: string
}

export default function Loading(props: Props) {
    return <div>
        <Spinner size="xl" color="success" label={props.label ?? 'Загрузка'} />
    </div>
}