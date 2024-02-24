import './text.css'

import { ReactNode } from "react";

import { classNames } from "@/shared/lib/helpers";

type sizes = "small" | "medium" | "large";
type colors = 'primary' | 'secondary' | 'white' | 'accent'
type TagName = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';

type Props = {
    className?: string; 
    size?: sizes;
    children: ReactNode;
    bold?: boolean
    color?: colors
    tag?: TagName;
}

export const Text = (props: Props) => {
    const { children, className, size = 'small', bold = false, color = 'primary', tag: Tag = 'p' } = props;
    return (
        <Tag  className={classNames('text', {bold: bold && 'bold'}, [className, size, color ])}>
            {children}
        </Tag>
    );
}

