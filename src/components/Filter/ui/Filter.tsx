import '../styles/Filter.css'

import SearchIcon from "@/shared/assets/icons/search-svgrepo-com.svg?react";
import { ItemWithTitle } from "@/shared/types/entities";
import { Dropdown, Input } from "@/shared/ui"

import { sortOptions } from '../model/options';
import { useFilter } from "../model/useFilter";



type Props<T> = {
    list: T[];
    setList: (list: T[]) => void;
};

export const Filter = <T extends ItemWithTitle>(props: Props<T>) => {
    const { list, setList } = props 
    const { handleSearchChange, handleSortByDateChange} = useFilter(list, setList)

    return (
        <div className='Filter'>
            <Input className="Filter__input" onChange={handleSearchChange} leftAddon={<SearchIcon />} placeholder="Search your trip" />
            <Dropdown className='Filter__dropdown' onChange={handleSortByDateChange} options={sortOptions} placeholder='Sort by -'/>
        </div>
    )
}

