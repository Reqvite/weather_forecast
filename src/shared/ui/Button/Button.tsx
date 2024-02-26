import './buttons.css'

import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers';

type ButtonVariants = 'filled' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
    children?: ReactNode;
    variant?: ButtonVariants;
}


export const Button = (props: ButtonProps) => {
    const {
        disabled,
        className,
        children,
        variant = 'filled',
        ...otherProps
    } = props;

    return (
        <button className={classNames('button', {'button__disabled': disabled}, [variant, className])} {...otherProps}>
            {children}
        </button>
    );
}

