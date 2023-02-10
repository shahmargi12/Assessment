import React, { useEffect, useRef, useState } from 'react';
import Tooltip from '../Tooltip';

type OverflowTipProp = {
    children: JSX.Element;
    title: string;
};

const OverflowTipComponent = ({ children, title }: OverflowTipProp): JSX.Element => {
    const [isOverflow, setIsOverflow] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const child = React.cloneElement(children, { ref: elementRef });

    useEffect(() => {
        if (elementRef.current) {
            setIsOverflow(elementRef.current.scrollWidth >= elementRef.current.clientWidth);
        }
    }, [isOverflow]);

    return (
        <Tooltip title={title} disableHoverListener={!isOverflow}>
            {child}
        </Tooltip>
    );
};

export default OverflowTipComponent;
