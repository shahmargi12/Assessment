import * as React from 'react';
import {
    StyledCheckboxSkelton,
    StyledLabelSkelton,
    StyledRowContainer,
    StyledHeaderSkeleton,
    StyledContainer,
} from './FiltersSkeleton.styled';

type FiltersSkeletonProps = {
    isLoading: boolean;
};

function FiltersSkeleton({ isLoading: boolean }: FiltersSkeletonProps): JSX.Element {
    return (
        <StyledContainer>
            <StyledHeaderSkeleton />
            <StyledRowContainer>
                <StyledCheckboxSkelton />
                <StyledLabelSkelton />
            </StyledRowContainer>
            <StyledRowContainer>
                <StyledCheckboxSkelton />
                <StyledLabelSkelton />
            </StyledRowContainer>
            <StyledRowContainer>
                <StyledCheckboxSkelton />
                <StyledLabelSkelton />
            </StyledRowContainer>
            <StyledRowContainer>
                <StyledCheckboxSkelton />
                <StyledLabelSkelton />
            </StyledRowContainer>
        </StyledContainer>
    );
}

FiltersSkeleton.defaultProps = {
    isLoading: true,
};

export default FiltersSkeleton;
