import React, {ReactNode} from 'react';

interface TagProps {
    className: string
    color: string
    children: ReactNode
}

const Tag = ({className, color, children}:TagProps) => {

    return (
        <p className={className} style={{background: color}}>
            {children}
        </p>
    );
};

export default Tag;