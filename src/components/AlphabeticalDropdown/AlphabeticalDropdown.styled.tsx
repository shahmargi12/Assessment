import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';

type StyledDropDownProps = {
    isOpen: boolean;
    // checked: boolean;
};

export const StyledDropDownSelector = styled.div<StyledDropDownProps>`
    position: relative;

    .dropdownSelector {
        border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 5.2rem;
        width: 100%;
        border-radius: 1rem;
        gap: 20px;
        outline: 1px solid transparent;

        ${({ isOpen, theme }) => {
            if (isOpen) {
                return {
                    outlineColor: `${theme.colors.primaryBlack}`,
                    borderColor: `${theme.colors.primaryBlack}`,
                };
            }
        }}

        .leftSelector {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex: 1;
            margin-left: 15px;

            span {
                color: ${({ theme }) => theme.colors.primaryBlack60};
                font-family: ${({ theme }) => theme.fontFamily.normal};
                font-size: 1.6rem;
                font-weight: normal;

                &.required {
                    color: ${({ theme }) => theme.colors.alertColors.error.primary};
                    padding-right: 0.3rem;
                }
            }
        }

        .rightSelector {
            width: 14px;
            margin-right: 15px;
            .downIconTransition {
                transform: rotate(180deg);
            }

            .downIcon {
                transition: all 0.3s;
            }
        }
    }
`;

type StyledDropdownProps = {
    width?: string;
    dropdownPosition?: 'left' | 'right';
};

export const StyledDropdown = styled.div<StyledDropdownProps>`
    background-color: ${({ theme }) => theme.colors.white};
    width: ${({ width }) => (width ? width : '100%')};
    position: absolute;
    display: flex;
    flex-direction: column;
    inset: 55px ${({ dropdownPosition }) => (dropdownPosition === 'right' ? 0 : 'auto')} 0
        ${({ dropdownPosition }) => (dropdownPosition === 'left' ? '0' : 'auto')};
    height: 350px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    z-index: 10;

    @media (max-width: 767px) {
        width: 100%;
    }

    .dropdownHeader {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        min-height: 65px;
        padding: 13px 15px;
        gap: 20px;

        @media (max-width: 767px) {
            flex-flow: column;
            align-items: flex-start;
        }

        .searchContainer {
            border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
            display: flex;
            align-items: center;
            border-radius: 6px;
            width: 250px;
            height: 40px;
            padding: 0 10px;
            gap: 10px;

            input {
                font-family: ${({ theme }) => theme.fontFamily.normal};
                color: ${({ theme }) => theme.colors.primaryBlack};
                outline: none;
                border: none;
                width: 100%;
                font-size: 1.4rem;

                &:placeholder {
                    color: ${({ theme }) => theme.colors.primaryBlack60};
                }
            }
        }

        .alphabetsContainer {
            flex: 1;

            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;

                li {
                    list-style-type: none;

                    button {
                        font-family: ${({ theme }) => theme.fontFamily.normal};
                        color: ${({ theme }) => theme.colors.primaryBlack};
                        font-weight: 600;
                        font-size: 1.4rem;
                        opacity: 0.4;
                        background-color: transparent;

                        &.active {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .rightSideContainer {
            display: flex;
            align-items: center;
            gap: 60px;

            @media (max-width: 767px) {
                justify-content: space-between;
                width: 100%;
            }

            .selectAllContainer {
                display: flex;
                align-items: center;
                gap: 2px;

                span {
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    font-family: ${({ theme }) => theme.fontFamily.normal};
                }
            }
        }
    }

    .dropdownBody {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        padding: 13px 0px;
        height: 250px;
        overflow-x: auto;

        .heading {
            color: ${({ theme }) => theme.colors.primaryBlack40};
            font-size: 1.4rem;
            font-weight: 600;
            padding: 8.5px 15px;

            &:first-child {
                margin-top: 0;
            }
        }

        .item {
            width: 250px;
            padding: 0 15px;
        }

        .messageContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            h2 {
                color: ${({ theme }) => theme.colors.primaryBlack80};
            }
        }
    }
`;

export const StyledErrorContainer = styled.p`
    color: ${({ theme }) => theme.colors.alertColors.error.primary};
    border: none;
    margin-left: 0px;
    font-size: 1.5rem;
    line-height: 1.31;
    text-align: left;
    font-family: ${({ theme }) => theme.fontFamily.normal};
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
    & > .MuiTypography-body1 {
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-family: ${({ theme }) => theme.fontFamily.normal};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 200px;
        font-size: 1.4rem;
        font-weight: normal;
        line-height: 1.3;
        padding: 7px 0;
    }
`;
