import * as React from 'react';

import Star from '@/ui/rating/star';

type Props = {
    value: number,
    productId: number,
}

export default function Rating({value, productId}: Props) {
    return <div>
        <div></div>
        <div className={'flex'}>
            {
                [1,2,3,4,5].map(key => {
                    let starRating;
                    if (value - key > 1) {
                        starRating = 1;
                    } else if (value - key <= 0) {
                        starRating = 0;
                    } else {
                        starRating = value - key;
                    }
                    starRating = Math.round(starRating * 100);

                    return <Star
                            key={'star-' + productId + '-' + key}
                            index={'star-' + productId + '-' + key}
                            value={starRating}
                    />
                })
            }
        </div>
    </div>
}