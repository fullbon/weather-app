'use client';

import * as React from 'react';
import styles from './page.module.css';
import SelectCity from '@/ui/select-city';
import { Location } from '@/types/types';
import { Button } from '@nextui-org/button';

export default function Home() {
    const handleChangeCity = (location: Location) => {
        console.log(location);
    };

    return (
        <main className={styles.main}>
            <SelectCity onChange={handleChangeCity} />
            <Button className={'mt-3'} color={'primary'}>Показать погоду</Button>
        </main>
    );
}
