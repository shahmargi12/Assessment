import styled from 'styled-components';

type ContainerProps = {
    height?: React.CSSProperties['height'];
};

export const StyledMainContainer = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: ${({ height }) => (height ? height : 'calc(100vh - 200px)')};

    img {
        height: 22rem;
    }
`;

export const StyledHeading = styled.h2`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-size: 2.2rem;
    line-height: 1.38;
    text-align: center;
`;

export const StyledPara = styled.span`
    color: ${({ theme }) => theme.colors.primaryBlack80};
    font-weight: normal;
    font-size: 1.4rem;
    text-align: center;
    margin-top: -10px;
    line-height: 1.6;
`;
