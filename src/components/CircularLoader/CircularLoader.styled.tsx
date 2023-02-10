import styled from 'styled-components';

type CircularProgressProps = {
    height?: string;
    color?: string;
};

export const StyledCircularLoaderContainer = styled.div<CircularProgressProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${({ height }) => {
        if (height) {
            return {
                height: height,
            };
        }
    }}

    .MuiCircularProgress-root {
        color: ${({ color }) => color};
    }
`;
