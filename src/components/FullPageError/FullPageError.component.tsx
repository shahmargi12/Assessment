import React from 'react';
import { StyledDivContainer } from './FullPageError.styled';

type FullPageErrorProp = {
    error: Error;
    /**
     * Default error text to show in full page error
     */
    errorText: string;
};

function FullPageError({ error, errorText }: FullPageErrorProp): JSX.Element {
    return (
        <StyledDivContainer>
            <p>{errorText}</p>
            <pre>{error.message}</pre>
        </StyledDivContainer>
    );
}
FullPageError.defaultProps = {
    error: new Error('Something happened'),
    errorText: 'Something just happened. Please reload/refresh the application',
};
export default FullPageError;
