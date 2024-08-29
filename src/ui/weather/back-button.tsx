import * as React from 'react';
import { Link } from '@nextui-org/link';

type Props = {
    onClick: Function
}

export default function BackButton(props) {
    return <React.Fragment>
        <Link href="#" onPress={props.onClick}>Выбрать город</Link>
    </React.Fragment>;
}