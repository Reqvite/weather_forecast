import './TripsList.css'

import { Trip } from '@/shared/types/trip'
import { TripCard } from '@/shared/ui'

type Props = {
    list: Trip[]
}

export const TripsList = ({list}: Props) => {
    return (
        <ul className='TripsList'>
            {list.map(trip => <li key={trip.id}><TripCard {...trip} /></li>)} 
        </ul>
    )
}

