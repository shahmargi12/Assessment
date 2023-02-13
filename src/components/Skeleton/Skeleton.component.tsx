import React from 'react';
import { StyledSkelton } from './Skeleton.styled';

type SkeletonProps = {
    animation?: false | 'wave' | 'pulse';
    variant?: 'text' | 'rectangular' | 'circular';
    width?: string | number;
    height?: string | number;
};

function SkeletonComponent({ animation, variant, width, height }: SkeletonProps): JSX.Element {
    return <StyledSkelton animation={animation} variant={variant} width={width} height={height} />;
}
SkeletonComponent.defaultProps = {
    animation: 'wave',
    width: 210,
    height: 20,
};
export default SkeletonComponent;
