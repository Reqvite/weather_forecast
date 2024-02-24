import './StickyContentLayout.css';

import { memo, ReactElement } from "react";

interface StickyContentLayoutProps {
  className?: string;
  content: ReactElement;
  right?: ReactElement;
  tag?: keyof JSX.IntrinsicElements;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, content, right, tag: Tag = "div" } = props;

    return (
        <Tag className={`mainLayout ${className}`}>
            <div className="content">{content}</div>
            {right && <div className="right">{right}</div>}
        </Tag>
    );
});

