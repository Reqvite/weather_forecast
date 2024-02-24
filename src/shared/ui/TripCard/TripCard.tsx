import './TripCard.css'

import { formatDate } from '@/shared/lib/helpers';

import { Text } from '../Text/Text';

type Props = {
    image: string;
    title: string;
    startDate: string;
    endDate: string;
}

export const TripCard = (props: Props) => {
    const {image, title, startDate, endDate} = props
    return (
        <div className='tripCard'>
            <img src={image} className='tripCard__img'/>
            <div className='tripCard__infoBox'>
                <Text bold className='tripCard__title'>{title}</Text>
                <Text color='secondary' className='tripCard__date'>{formatDate(startDate) } - {formatDate(endDate)}</Text>
            </div>
        </div>
    )
}

