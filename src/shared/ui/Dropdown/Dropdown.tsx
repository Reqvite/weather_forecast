import './Dropdown.css'; 

import { SelectHTMLAttributes } from 'react';

import ArrowDown from "@/shared/assets/icons/down-arrow2-svgrepo-com.svg?react";
import { classNames } from '@/shared/lib/helpers';
import { ItemWithTitle } from '@/shared/types/entities';

import { Text } from '../Text/Text';

interface Props extends SelectHTMLAttributes<HTMLSelectElement>  {
    className?: string;
     options: ItemWithTitle[];
    label?: string
    placeholder?: string;
}

export const Dropdown = (props:Props) => {
    const { className, options,placeholder, label, ...otherProps } = props

    return (
        <label className={classNames('label', {}, [className])} >
            {label && <Text size='medium' tag='span'>{label}</Text>}
            <div className="dropdown-container">
                <ArrowDown className='dropdown-container__leftAddon'/>
                <select className='dropdown-container__select'  {...otherProps}>
                    {placeholder && <option value="">{placeholder}</option>}
                    {options.map((option, index) => (
                        <option key={index} value={option.title}>{option.title}</option>
                    ))}
                </select>
            </div>
        
        </label>
    )
};
