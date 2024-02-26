import './TripCard.css'

import PlusIcon from "@/shared/assets/icons/plus-large-svgrepo-com.svg?react";
import { classNames, formatDate } from '@/shared/lib/helpers';
import { Trip } from '@/shared/types/entities';

import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

type Props = Trip & {
    emptyCard?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (value?: any) => void;
    isSelected?: boolean
}

export const TripCard = (props: Props) => {
    const { id, image, title, startDate, endDate, emptyCard, onClick, isSelected: isSelectedCard } = props
    const data = { id, image, title, startDate, endDate }
    
    if (emptyCard) {
        return <div className='tripCard' onClick={onClick} tabIndex={0}>
            <img src={'https://m.media-amazon.com/images/I/713UEK1kZLL._AC_UF1000,1000_QL80_.jpg'} className='tripCard__img'/>
            <div className='tripCard__infoBox'>
                <Button className='tripCard__Button' variant='outline'>Add trip <PlusIcon className='tripCard__ButtonSvg'/></Button>
            </div>
        </div>
    }
    return (
        <div className={classNames('tripCard')} onClick={() => onClick(data)} tabIndex={0}>
            <img src={image} className='tripCard__img'/>
            <div className={classNames('tripCard__infoBox', {isSelectedCard})}>
                <Text bold className='tripCard__title'>{title}</Text>
                <Text color='secondary' className='tripCard__date'>{formatDate(startDate!) } - {formatDate(endDate!)}</Text>
            </div>
        </div>
    )
}

