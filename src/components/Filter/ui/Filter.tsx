import SearchIcon from "@/shared/assets/icons/search-svgrepo-com.svg?react";
import { Input } from "@/shared/ui"

import { ItemWithTitle } from "../model/types";
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

