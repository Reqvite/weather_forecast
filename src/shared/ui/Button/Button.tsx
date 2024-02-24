import './buttons.css'

import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers';

type ButtonVariants = 'filled' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    children?: ReactNode;
    variant?: ButtonVariants;
}


export const Button = (props: ButtonProps) => {
    const {
        children,
        variant = 'filled',
        ...otherProps
    } = props;

    return (
        <button className={classNames('button', {}, [variant])} {...otherProps}>
            {children}
        </button>
    );
}

