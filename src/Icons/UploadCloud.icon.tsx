import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const UploadCloudIcon = ({ height, width, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 20.4 17.536"
        {...props}
    >
        <g id="downloadCloud" transform="translate(-0.6 -6.097)">
            <g id="Group_41262" transform="translate(6.38 12.733)">
                <g id="Group_41261" transform="translate(-0.3 -0.2)">
                    <g id="Path_28287" transform="translate(0 0)">
                        <StyledPath
                            id="Path_29541"
                            data-name="Path 29541"
                            d="M9,3.8a1.854,1.854,0,0,0-.2-.7L6.3.6A2.688,2.688,0,0,0,4.5-.2,2.732,2.732,0,0,0,2.6.6L.1,3.1,0,3.2a1.08,1.08,0,0,0-.3.7.908.908,0,0,0,.3.7.972.972,0,0,0,1.4-.1L3.3,2.6V9.9a.945.945,0,0,0,1,1,.945.945,0,0,0,1-1V2.5l1.9,2a.967.967,0,0,0,1.4,0A.867.867,0,0,0,9,3.8Z"
                            transform="translate(0.3 0.2)"
                            fill={fill}
                        />
                    </g>
                </g>
            </g>
            <g id="Group_41264" transform="translate(0.8 6.3)">
                <g id="Group_41263">
                    <g id="Path_28288">
                        <StyledPath
                            id="Path_29542"
                            data-name="Path 29542"
                            d="M20.2,9a4.779,4.779,0,0,1-1,2.8,4.61,4.61,0,0,1-2.6,1.5,1.086,1.086,0,0,1-1.2-.7v-.1a.919.919,0,0,1,.8-1.1,2.568,2.568,0,0,0,2.1-2.5,2.459,2.459,0,0,0-1.4-2.2,1.02,1.02,0,0,1-.5-.8V5.1a3.523,3.523,0,0,0-3.5-3.4h0A3.54,3.54,0,0,0,9.4,4.6c-.3.3-.5.6-.9.7a.905.905,0,0,1-1-.3,2.106,2.106,0,0,0-1.3-.5H6.1A1.58,1.58,0,0,0,4.5,6.1V7.4a.923.923,0,0,1-1,.9H3.4A1.735,1.735,0,0,0,1.7,9.9h0A1.606,1.606,0,0,0,2.2,11a1.286,1.286,0,0,0,1.2.4h.4a.987.987,0,0,1,.9,1,.9.9,0,0,1-.9.9H3.4a3.74,3.74,0,0,1-2.5-1A3.25,3.25,0,0,1-.2,9.8,3.631,3.631,0,0,1,2.5,6.4V6.1A3.7,3.7,0,0,1,6.1,2.6a4.529,4.529,0,0,1,1.6.3A4.887,4.887,0,0,1,9.1,1.1,5.876,5.876,0,0,1,12.7-.2h0A5.423,5.423,0,0,1,18.2,5v.4A4.226,4.226,0,0,1,20.2,9Z"
                            fill={fill}
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

UploadCloudIcon.defaultProps = {
    width: 18,
    height: 15.434,
};

export default UploadCloudIcon;
