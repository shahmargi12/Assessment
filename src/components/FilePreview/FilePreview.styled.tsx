import styled from 'styled-components';

export const StyledPreviewMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(35, 55, 87, 0.6);
`;
export const StyledContainer = styled.div`
    // width: auto;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    margin-top: 10rem;
`;

export const StyledPreviewHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;
export const StyledPreviewBody = styled.div`
    .previewImage {
        width: auto;
        max-width: 100rem;
        object-fit: cover;
        object-position: center;
        border-radius: 0.8rem;
    }
`;
