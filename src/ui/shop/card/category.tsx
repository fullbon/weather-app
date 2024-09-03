import Link from 'next/link';
import { CategoryProps } from '@/types/shop';

type Props = {
    name: CategoryProps,
}

export default function Card({ name }: Props) {
    return <Link href={'/shop/' + name} className={'m-10 w-60 h-60 flex items-center justify-center rounded border-blue-100 border-solid border-3 cursor-pointer shadow-md hover:shadow-xl transition  delay-10 '}>
        {name}
    </Link>
}