import styled from 'styled-components';

const HEADER_TOP = '50px';
const HEADER_MAX_WIDTH = '200px';

type HeaderNavigationListStyleProps = {
    hiddenClass: boolean;
};

export const HeaderNavigationListStyle = styled.div<HeaderNavigationListStyleProps>`
    top: ${HEADER_TOP};
    position: absolute;
    padding-top: 30px;

    ${({ hiddenClass }) => {
        if (hiddenClass) {
            return { display: 'none', pointerEvents: 'none' };
        } else {
            return { pointerEvents: 'all' };
        }
    }}

    .headerNavigationContainer {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primaryBlack};
        max-width: ${`${HEADER_MAX_WIDTH}`};
        padding: 10px 0;
        border-radius: 8px;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

        &:hover {
            display: block;
        }

        &:before,
        &:after {
            background: ${({ theme }) => theme.colors.white};
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
            content: '';
            width: 20px;
            height: 20px;
            position: absolute;
            top: 20px;
            left: 50%;
            margin-left: -0.5em;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            z-index: -1;
        }

        .headerItem {
            width: ${`${HEADER_MAX_WIDTH}`};
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.primaryBlack};
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            position: relative;
            padding: 10px 20px;
            font-size: 1.6rem;

            &:hover {
                background-color: ${({ theme }) => theme.colors.lightGray};

                .subHeader {
                    display: block;
                }
            }

            .subHeader {
                background: ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.primaryBlack};
                max-width: ${`${HEADER_MAX_WIDTH}`};
                position: absolute;
                display: none;
                padding: 7px 0;
                border-radius: 8px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
                left: ${HEADER_MAX_WIDTH};
                margin-left: 1px;
                top: 0px;
            }
        }
    }
`;
