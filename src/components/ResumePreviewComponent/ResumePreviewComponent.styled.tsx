import styled from 'styled-components';

type StyledResumePreviewType = {
    fixHeight: boolean;
};

export const StyledResumePreview = styled.div<StyledResumePreviewType>`
    .react-pdf__Page {
        position: initial !important;
        overflow-y: auto;
        width: 100% !important;

        ${({ fixHeight }) => {
            if (fixHeight) {
                return {
                    height: 'calc(100vh - 20rem)',
                };
            }
        }}

        .react-pdf__Page__canvas {
            margin: 0 auto;
            width: 100% !important;
            height: 100% !important;
        }
    }

    .react-pdf__Page__textContent {
        user-select: none;
        display: none;
    }

    @media (max-width: 1200px) {
        .react-pdf__Page {
            height: auto;

            .react-pdf__Page__canvas {
                height: auto !important;
            }
        }
    }

    @media (max-width: 767px) {
        &. {
            margin: auto;
            width: 65%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .react-pdf__Document {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .react-pdf__Page > canvas {
            max-width: 100%;
            height: auto !important;
        }
    }

    .enlargeContainer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .fullScreenIconContainer {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 100%;
            height: 100%;

            .fullScreenIcon {
                transform: scale(0);
                transition: transform 0.1s ease 0s;
                background-color: ${({ theme }) => theme.colors.white};
                position: absolute;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        &:hover {
            .fullScreenIcon {
                transform: scale(1);
            }

            .fullScreenIconContainer {
                background-color: ${({ theme }) => theme.colors.transparentSecondaryBg};
            }
        }
    }
`;
