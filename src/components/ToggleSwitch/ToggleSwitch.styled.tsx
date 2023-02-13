import styled from 'styled-components';
import startIcon from '../../assets/images/new_student.svg';

type StatusLabelsProps = {
    inactiveLabel: string;
};

export const StyledStatusContainer = styled.div<StatusLabelsProps>`
    .switch-button {
        background: ${({ theme }) => theme.colors.primaryBlack10};
        border-radius: 30px;
        overflow: hidden;
        width: 26rem;
        height: 4.2rem;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 1px;
        position: relative;
        padding-right: 15rem;
        position: relative;

        &:before {
            content: ${({ inactiveLabel }) => "'" + inactiveLabel + "'"};
            position: absolute;
            padding-left: 15px;
            padding-right: 10px;
            background-image: url(${startIcon});
            top: 0;
            bottom: 0;
            right: 0px;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
            pointer-events: none;
            color: ${({ theme }) => theme.colors.primaryBlack80};
            font-size: 1.6rem;
            font-weight: 600;
            background-repeat: no-repeat;
            background-position: 0 center;
            background-size: 14px;
            font-family: inherit;
            line-height: 0px;
            letter-spacing: 0px;
        }

        &.checked {
            &:before {
                color: ${({ theme }) => theme.colors.fonts.color};
                font-size: 1.6rem;
                font-weight: 600;
            }
        }

        &.disabled {
            &:before {
                opacity: 0.5;
            }
        }

        &-checkbox {
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            z-index: 2;

            &:checked + .switch-button-label:before {
                transform: translateX(124px);
                transition: transform 100ms linear;
            }

            &[disabled] + .switch-button-label {
                opacity: 0.5;
            }

            & + .switch-button-label {
                position: relative;
                padding: 12px 0;
                display: block;
                user-select: none;
                pointer-events: none;
                font-family: inherit;
                line-height: 0px;
                letter-spacing: 0px;

                &:before {
                    content: '';
                    height: 90%;
                    width: 120%;
                    position: absolute;
                    left: 2px;
                    top: 8%;
                    border-radius: 30px;
                    transform: translateX(0);
                    transition: transform 100ms;
                    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);

                    background-color: ${({ theme }) => theme.colors.white};
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.33;
                    text-align: center;
                    color: ${({ theme }) => theme.colors.primaryBlack80};
                }

                .switch-button-label-span {
                    position: relative;
                    color: ${({ theme }) => theme.colors.primaryBlack80};
                    font-size: 1.6rem;
                    font-weight: 600;
                    left: 11px;
                    display: flex;
                    justify-content: center;
                    align-items: baseline;
                    gap: 6px;

                    &.checked {
                        color: ${({ theme }) => theme.colors.primaryBlack80};
                    }
                }
            }
        }
    }
`;
