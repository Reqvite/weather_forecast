import './TripsList.css'

import { Trip } from '@/shared/types/entities'
import { TripCard } from '@/shared/ui'

type Props = {
    list: Trip[]
    setModalIsOpen: (value: boolean) => void;
    onItemClick: (trip: Trip) => void;
    selectedItem: Trip;
}

export const TripsList = (props: Props) => {
    const { setModalIsOpen, onItemClick,selectedItem, list } = props

    return (
        <ul className='TripsList'>
            <TripCard emptyCard onClick={setModalIsOpen}/>
            {list.map(trip => <li key={trip.id}><TripCard isSelected={selectedItem.id === trip.id} onClick={onItemClick} {...trip} /></li>)} 
        </ul>
    )
}

