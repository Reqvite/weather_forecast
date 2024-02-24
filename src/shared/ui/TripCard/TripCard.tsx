import './TripCard.css'

import PlusIcon from "@/shared/assets/icons/plus-large-svgrepo-com.svg?react";
import { formatDate } from '@/shared/lib/helpers';

import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

type Props = {
    image?: string;
    title?: string;
    startDate?: string;
    endDate?: string;
    emptyCard?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (value?: any) => void;
}

export const TripCard = (props: Props) => {
    const { image, title, startDate, endDate, emptyCard, onClick } = props
    
    if (emptyCard) {
        return <div className='tripCard' onClick={onClick}>
            <img src={'data:image/png;base64,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'} className='tripCard__img'/>
            <div className='tripCard__infoBox'>
                <Button className='tripCard__Button' variant='outline'>Add trip <PlusIcon className='tripCard__ButtonSvg'/></Button>
            </div>
        </div>
    }
    return (
        <div className='tripCard' onClick={onClick}>
            <img src={image} className='tripCard__img'/>
            <div className='tripCard__infoBox'>
                <Text bold className='tripCard__title'>{title}</Text>
                <Text color='secondary' className='tripCard__date'>{formatDate(startDate!) } - {formatDate(endDate!)}</Text>
            </div>
        </div>
    )
}

