import { Spinner } from '@nextui-org/spinner';
import * as React from 'react';

type Props = {
    label?: string
}

export default function Loading(props: Props) {
    return <div>
        <Spinner size="lg" color="success" label={props.label ?? 'Загрузка'} />
    </div>
}