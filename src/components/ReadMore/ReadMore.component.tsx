import React, { useState } from 'react';
import { StyledTextContainer, StyledReadMoreSpan } from './ReadMore.styled';

type ReadMoreProps = {
    text: string;
    limit: number;
    color: string;
    onClickMore?: (showMore: boolean) => void;
    isDialog?: boolean;
};

function ReadMoreComponent({ text, limit, color, onClickMore, isDialog }: ReadMoreProps): JSX.Element {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        if (isDialog === true) {
            onClickMore(true);
        } else {
            setIsReadMore(!isReadMore);
        }
    };

    return (
        <>
            <StyledTextContainer color={color}>
                {text ? (
                    isReadMore ? (
                        text.slice(0, limit)
                    ) : (
                        <p
                            className="text"
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        />
                    )
                ) : (
                    '-'
                )}
                {text && text.length - 1 > limit ? (
                    <StyledReadMoreSpan onClick={toggleReadMore} className="read-or-hide">
                        {isReadMore ? 'Read more' : 'View less'}
                    </StyledReadMoreSpan>
                ) : null}
            </StyledTextContainer>
        </>
    );
}

ReadMoreComponent.defaultProps = {
    color: '#4a4a48',
    isDialog: false,
};

export default ReadMoreComponent;
