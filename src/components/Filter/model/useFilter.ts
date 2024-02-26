import { ChangeEvent, useState } from "react";

import { ItemWithTitle } from "@/shared/types/entities";

export const useFilter = <T extends ItemWithTitle>(list: T[], setTripsList: (list: T[]) => void) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedSortByDate, setSelectedSortByDate] = useState<string>('');


    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        applyFilters({search: e.target.value, sortByDate: selectedSortByDate});
    };

    const handleSortByDateChange =  (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedSortByDate(e.target.value);
        applyFilters({search: searchValue,  sortByDate: e.target.value});
    };

    const applyFilters = ({ search, sortByDate }: Record<string, string>) => {
        let filteredList = [...list];

        if (search) {
            filteredList = filteredList.filter((item: T) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        switch (sortByDate) {
        case 'startDate':
            //@ts-expect-error ///
            filteredList.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
            break;
        default:
            break;
        }

        setTripsList(filteredList);
    };
    return {handleSearchChange, handleSortByDateChange};
};