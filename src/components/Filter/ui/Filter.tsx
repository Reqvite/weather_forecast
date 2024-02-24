import SearchIcon from "@/shared/assets/icons/search-svgrepo-com.svg?react";
import { ItemWithTitle } from "@/shared/types/trip";
import { Input } from "@/shared/ui"

import { useFilter } from "../model/useFilter";



type Props<T> = {
    list: T[];
    setList: (list: T[]) => void;
};

export const Filter = <T extends ItemWithTitle>(props: Props<T>) => {
    const { list, setList } = props 
    const { handleSearchChange} = useFilter(list, setList)

    return (
        <>
            <Input onChange={handleSearchChange} leftAddon={<SearchIcon />} placeholder="Search your trip" />
        </>
    )
}

