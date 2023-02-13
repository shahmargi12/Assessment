import React from 'react';
import { StyledMainContainer, StyledHeading, StyledPara } from './NoDataFound.styled';

type NoDataFoundProps = {
    url: string;
    altText?: string;
    height?: React.CSSProperties['height'];
    headingContent: string;
    description?: string;
    component?: JSX.Element;
};

const NoDataFound = ({
    url,
    altText,
    height,
    headingContent,
    description,
    component,
}: NoDataFoundProps): JSX.Element => (
    <StyledMainContainer height={height}>
        <img src={url} alt={altText} />
        <StyledHeading>{headingContent}</StyledHeading>
        {description ? <StyledPara>{description}</StyledPara> : ''}
        {component ? component : ''}
    </StyledMainContainer>
);

NoDataFound.defaultProps = {
    altText: '',
};

export default NoDataFound;
