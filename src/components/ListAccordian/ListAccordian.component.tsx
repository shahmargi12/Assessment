import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Icons from '../../Icons';
import {
    StyledListContainer,
    StyledLeftContainer,
    StyledRightContainer,
    StyledTitle,
    StyledContainer,
    StyledListing,
} from './ListAccordian.styled';

type LabelValue = {
    value: string;
    label: string;
    createdAt: string;
};

type InnerLabelList = {
    degrees: LabelValue;
    mapperUUID: string;
    programmes: LabelValue[];
    streams: LabelValue;
};

type List = {
    outerLabel: string;
    innerLabelList: InnerLabelList[];
};

type ListAccordianProp = {
    list: List[];
};

function ListAccordianComponent({ list }: ListAccordianProp): JSX.Element {
    return (
        <>
            <StyledContainer>
                {list &&
                    list.map((listDetail, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<Icons.DownArrowIcon width={13} height={13} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <StyledTitle>{listDetail.outerLabel}</StyledTitle>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {listDetail.innerLabelList &&
                                        listDetail.innerLabelList.map((row, index) => {
                                            return (
                                                <StyledListing key={index}>
                                                    <StyledListContainer>
                                                        <StyledLeftContainer>
                                                            <span>
                                                                {listDetail.innerLabelList[index] &&
                                                                    listDetail.innerLabelList[index].streams &&
                                                                    listDetail.innerLabelList[index].streams.label}
                                                            </span>
                                                            <p>
                                                                -
                                                                {listDetail.innerLabelList[index] &&
                                                                    listDetail.innerLabelList[index].degrees &&
                                                                    listDetail.innerLabelList[index].degrees.label}
                                                            </p>
                                                        </StyledLeftContainer>
                                                        <div className="rightSideRow">
                                                            {row &&
                                                                row.programmes &&
                                                                row.programmes.map((item, ind: number) => {
                                                                    return (
                                                                        <StyledRightContainer
                                                                            isLastChild={
                                                                                row.programmes.length - 1 === ind
                                                                            }
                                                                            isOddIndex={ind % 2 !== 0}
                                                                            key={ind}
                                                                        >
                                                                            {item.label}
                                                                        </StyledRightContainer>
                                                                    );
                                                                })}
                                                        </div>
                                                    </StyledListContainer>
                                                </StyledListing>
                                            );
                                        })}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </StyledContainer>
        </>
    );
}
ListAccordianComponent.defaultProps = {};
export default ListAccordianComponent;
