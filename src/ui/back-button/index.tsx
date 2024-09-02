import * as React from 'react';
import { Link } from '@nextui-org/link';

type Props = {
    onClick: Function,
    children: React.ReactElement
}

export default function BackButton(props: Props) {
    return <React.Fragment>
        <Link href="#" onPress={props.onClick}>{props.children ?? 'Назад'}</Link>
    </React.Fragment>;
}