import { ChangeEvent, useState } from "react";

import { ItemWithTitle } from "@/shared/types/trip";


export const useFilter = <T extends ItemWithTitle>(list: T[], setTripsList: (list: T[]) => void) => {
    const [, setSearchValue] = useState<string>('');

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        applyFilters({search: e.target.value});
    };

    const applyFilters = ({search}: Record<string, string>) => {
        let filteredList = list;

        if (search) {
            filteredList = filteredList.filter((item: T) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }
       
        setTripsList(filteredList);
    };
    return {handleSearchChange};
};