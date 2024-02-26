import './TripsList.css';

import React, { useState } from 'react';

import { Trip } from '@/shared/types/entities';
import { Button, TripCard } from '@/shared/ui';

type Props = {
    list: Trip[];
    setModalIsOpen: (value: boolean) => void;
    onItemClick: (trip: Trip) => void;
    selectedItem: Trip;
}

export const TripsList = (props: Props) => {
    const { setModalIsOpen, onItemClick, selectedItem, list } = props;
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 5;

    const handleNext = () => {
        if (startIndex + itemsPerPage < list.length) {
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    const handlePrevious = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    };

    return (
        <>
            <ul className='TripsList'>
                <TripCard emptyCard onClick={setModalIsOpen} />
                {list.slice(startIndex, startIndex + itemsPerPage).map(trip => (
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
                <Button variant='outline' onClick={handlePrevious} disabled={startIndex === 0}>Previous</Button>
                <Button onClick={handleNext} disabled={startIndex + itemsPerPage >= list.length}>Next</Button>
            </div>
        </>
    );
};