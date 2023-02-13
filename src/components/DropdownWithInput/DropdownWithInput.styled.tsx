import styled from 'styled-components';

type DropdownWithInput = {
    dropdownWidth: string;
    inputWidth: string;
};

export const StyleDropdownWithInput = styled.div<DropdownWithInput>`
    display: flex;
    gap: 2rem;

    @media (max-width: 767px) {
        flex-direction: column;
    }

    > div {
        :nth-child(1) {
            ${({ dropdownWidth }) => {
                if (dropdownWidth) {
                    return { width: dropdownWidth };
                }
            }}

            @media (max-width: 767px) {
                width: 100%;
            }
        }
    }
    > div {
        :nth-child(2) {
            ${({ inputWidth }) => {
                if (inputWidth) {
                    return { width: inputWidth };
                }
            }}
            @media (max-width: 767px) {
                width: 100%;
                height: 52px;
            }
        }
    }
`;
