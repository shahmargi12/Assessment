import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useCharacterLimit } from '../Shared/useCharacterLimit';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

let textEncoderInstance: null | TextEncoder = null;

const StyledCharRelative = styled.div`
    position: relative;
    & .characters-limit {
        position: absolute;
        top: -21rem;
        right: 5px;
        font-size: 15px;
        color: ${({ theme }) => theme.colors.primaryBlack};
    }
    & .characters-limit-exceeded {
        color: ${({ theme }) => theme.colors.alertColors.error.primary};
    }
`;

function textEncoder(): null | TextEncoder {
    if (window.TextEncoder === undefined) {
        return null;
    }

    if (textEncoderInstance === null) {
        textEncoderInstance = new window.TextEncoder();
    }

    return textEncoderInstance;
}

function utf8Length(text: string) {
    const currentTextEncoder = textEncoder();

    if (currentTextEncoder === null) {
        // http://stackoverflow.com/a/5515960/210370
        const m = encodeURIComponent(text).match(/%[89ABab]/g);
        return text.length + (m ? m.length : 0);
    }

    return currentTextEncoder.encode(text).length;
}

function CharacterLimitPlugin({
    charset = 'UTF-8',
    limit = 10000,
}: {
    charset: 'UTF-8' | 'UTF-16';
    limit: number;
}): JSX.Element {
    const [editor] = useLexicalComposerContext();

    const [remainingCharacters, setRemainingCharacters] = useState(limit);

    const characterLimitProps = useMemo(
        () => ({
            remainingCharacters: setRemainingCharacters,
            strlen: (text: string) => {
                if (charset === 'UTF-8') {
                    return utf8Length(text);
                } else if (charset === 'UTF-16') {
                    return text.length;
                } else {
                    throw new Error('Unrecognized charset');
                }
            },
        }),
        [charset],
    );

    useCharacterLimit(editor, limit, characterLimitProps);

    return (
        <StyledCharRelative>
            <span className={`characters-limit ${remainingCharacters < 0 ? 'characters-limit-exceeded' : ''}`}>
                {remainingCharacters}
            </span>
        </StyledCharRelative>
    );
}

export default CharacterLimitPlugin;
