import './TripsList.css'

import { Trip } from '@/shared/types/trip'
import { TripCard } from '@/shared/ui'

type Props = {
    list: Trip[]
    setModalIsOpen: (value: boolean) => void;
}

export const TripsList = (props: Props) => {
    const { setModalIsOpen,list } = props

    return (
        <ul className='TripsList'>
            <TripCard emptyCard onClick={setModalIsOpen}/>
            {list.map(trip => <li key={trip.id}><TripCard {...trip} /></li>)} 
        </ul>
    )
}

