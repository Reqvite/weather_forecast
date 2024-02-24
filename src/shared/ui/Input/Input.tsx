import './input.css'

import { InputHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers';

import {Text} from '../Text/Text'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    leftAddon?: ReactNode,
    rightAddon?: ReactNode,
}

export const Input = (props: InputProps) => {
    const {className, label,leftAddon,rightAddon, ...otherProps } = props
    return (
        <label className={classNames('label', {}, [className])}>
            {label &&  <Text tag='span'>{label}</Text>}
            <div className='inputBox'>
                {leftAddon && <div className='leftAddon'>{leftAddon}</div>}
                <input
                    className={classNames('input', {}, [])}
                    {...otherProps}
                />
                {rightAddon &&  <div className='rightAddon'>{rightAddon}</div>} 
            </div>
        </label>
    );
};