import './TripsList.css';

import { useRef } from 'react';

import { Trip } from '@/shared/types/entities';
import { Button, TripCard } from '@/shared/ui';

type Props = {
    list: Trip[];
    setModalIsOpen: (value: boolean) => void;
    onItemClick: (trip: Trip) => void;
    selectedItem: Trip;
}

const scrollValue = 200

export const TripsList = (props: Props) => {
    const { setModalIsOpen, onItemClick, selectedItem, list } = props;
    const tripsListRef = useRef<HTMLUListElement>(null);

    const scrollLeft = () => {
        if (tripsListRef.current) {
            tripsListRef.current.scrollLeft -= scrollValue;
        }
    };

    const scrollRight = () => {
        if (tripsListRef.current) {
            tripsListRef.current.scrollLeft += scrollValue; 
        }
    };

    return (
        <>
            <ul className='TripsList' ref={tripsListRef}>
                <TripCard emptyCard onClick={setModalIsOpen} />
                {list.map(trip => (
                    <li key={trip.id}>
                        <TripCard
                            isSelected={selectedItem.id === trip.id}
                            onClick={onItemClick}
                            {...trip}
                        />
                    </li>
                ))}
            </ul>
            <div className='TripsList__pagination'>
                <Button variant='outline' onClick={scrollLeft}>Previous</Button>
                <Button onClick={scrollRight}>Next</Button>
            </div>
        </>
    );
};