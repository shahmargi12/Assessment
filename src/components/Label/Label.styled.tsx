import styled from 'styled-components';

type StyledLabelProp = {
    isRequired: boolean | undefined;
};

export const StyledLabelContainer = styled.label<StyledLabelProp>`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-family: ${({ theme }) => theme.fontFamily.normal};
    text-align: left;
    display: inline-block;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.63;
    margin-bottom: 0.8rem;
    &&:before {
        content: ${(props) => `"${props.isRequired ? '*' : ''}"`};
        color: ${({ theme }) => theme.colors.errorRed};
    }
`;
