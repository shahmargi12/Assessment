import styled from 'styled-components';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

export const StyledRichTextPlugin = styled(RichTextPlugin)``;

export const StyledRTEContainer = styled.div`
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
    min-height: 200px;
    max-height: 500px;
    & .toolbar {
        height: 40px;
        padding: 10px 0 0 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
    }
    & .editor-input {
        font-size: 1.4rem;
        tab-size: 1;
        min-height: 150px;
        max-height: 150px;
        padding: 8px 17px;
        resize: none;
        font-family: ${({ theme }) => theme.fontFamily.normal};
        overflow-y: auto;

        &:focus-visible {
            outline: none;
        }
        ::-webkit-scrollbar {
            width: 0.5rem;
            height: 0.8rem;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #bbb;
            border-radius: 5px;
        }

        p {
            margin: 0;
            margin-block: 0;
        }

        .editor-text-bold {
            font-weight: bold;
        }

        .editor-text-italic {
            font-style: italic;
        }

        .editor-text-underline {
            text-decoration: underline;
        }
        .editor-list-ol {
            padding: 0;
            margin: 0;
            margin-left: 16px;
        }

        .editor-list-ul {
            padding: 0;
            margin: 0;
            margin-left: 16px;
        }

        .editor-listitem {
            margin: 8px 32px 8px 32px;
        }

        .editor-nested-listitem {
            list-style-type: none;
        }
    }
`;

export const StyledPlaceholder = styled.div`
    position: absolute;
    bottom: 124px;
    left: 17px;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primaryBlack80};
    font-family: ${({ theme }) => theme.fontFamily.normal};
    opacity: 0.4;
    pointer-events: none;
`;

export const StyledRelative = styled.div`
    position: relative;
`;
