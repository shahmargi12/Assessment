import React from 'react';
import { StyledTag } from './Tag.styled';

export type TagComp = {
    label: string;
    type: 'average' | 'best' | 'worse' | 'primaryLight' | 'userRole';
    size: 'small' | 'medium';
};

const Tag = ({ type, label, size }: TagComp): JSX.Element => {
    return (
        <StyledTag type={type} size={size}>
            {label}
        </StyledTag>
    );
};

export default Tag;
