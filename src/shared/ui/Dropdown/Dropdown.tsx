import './Dropdown.css'; 

import { SelectHTMLAttributes } from 'react';

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
            {label &&  <Text size='medium' tag='span'>{label}</Text>}
            <select className="dropdown-container" {...otherProps}>
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option, index) => (
                    <option key={index} value={option.title}>{option.title}</option>
                ))}
            </select>
        </label>
    )
};
