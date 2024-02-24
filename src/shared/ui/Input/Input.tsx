import './input.css'

import { InputHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers';

import {Text} from '../Text/Text'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    leftAddon?: ReactNode,
    rightAddon?: ReactNode,
    fullWidth?: boolean,
}

export const Input = (props: InputProps) => {
    const {className, label,leftAddon,rightAddon,fullWidth = false, ...otherProps } = props
    return (
        <label className={classNames('label', {}, [className])}>
            {label &&  <Text size='medium' tag='span'>{label}</Text>}
            <div className='inputBox'>
                {leftAddon && <div className='leftAddon'>{leftAddon}</div>}
                <input
                    className={classNames('input', {fullWidth: fullWidth}, [])}
                    {...otherProps}
                />
                {rightAddon &&  <div className='rightAddon'>{rightAddon}</div>} 
            </div>
        </label>
    );
};