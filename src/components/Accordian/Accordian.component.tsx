import React from 'react';
import Avatar from '../Avatar';
import Tooltip from '../Tooltip';
import Button from '../Button';
// import ThemeIcons from '@foster/ThemeIcons';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';
import profilePlaceholder from './../../assets/images/profilePlaceHolder.svg';
import { StyledAccordion, StyledAccordionContainer, StyledAccordionTypography } from './Accordian.styled';

type FormAccordionProps = {
    children: React.ReactNode;
    onChange: (idx: number) => void;
    getEmailAddress: (row: RowsData) => string | JSX.Element;
    onResendInvitation: (row: RowsData) => void;
    dataRow: RowsData;
    labels?: string;
    index: number;
    closePanel?: number;
    disable?: string;
};

export type RowsData = {
    email: string;
    name: string;
    roleId: number;
    roleName: string;
    statusId: number;
    statusLabel: string;
    userAvatar: string;
    userUUID: string;
};

function AccordionComponent({
    dataRow,
    children,
    getEmailAddress,
    onResendInvitation,
    onChange,
    index,
    closePanel = -1,
    disable,
}: FormAccordionProps): JSX.Element {
    const onChangePanel = (indexI: number) => {
        onChange(indexI);
        if (index === closePanel) {
            onChange(-1);
        }
    };

    return (
        <StyledAccordionContainer>
            <StyledAccordion
                expanded={closePanel === index}
                onChange={() => onChangePanel(index)}
                className={closePanel === index ? disable : ''}
            >
                <AccordionSummary
                // expandIcon={<ThemeIcons.DownArrowIcon height={8} width={14} />}
                >
                    <StyledAccordionTypography className="email-address-cell">
                        <div className="userNameChar">
                            <Avatar
                                url={dataRow.userAvatar ? dataRow.userAvatar : profilePlaceholder}
                                size="medium"
                                isAvatarColor
                            />
                        </div>
                        <div className="userDetails">
                            <label htmlFor=" ">
                                <Tooltip placement="right" title={dataRow?.name}>
                                    <span> {dataRow?.name}</span>
                                </Tooltip>
                            </label>
                            <span>{getEmailAddress(dataRow)}</span>
                        </div>
                    </StyledAccordionTypography>

                    <StyledAccordionTypography className="role-cell">{dataRow?.roleName}</StyledAccordionTypography>
                    <StyledAccordionTypography
                        className={dataRow?.statusLabel === 'Inactive' ? 'disabled' : 'status-cell'}
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                    >
                        {dataRow?.statusLabel === 'Pending' || dataRow?.statusLabel === 'invited-active' ? (
                            <Button variant="text" onClick={() => onResendInvitation(dataRow)}>
                                {capitalize('Resend Invite')}
                            </Button>
                        ) : (
                            capitalize(dataRow?.statusLabel === 'invited-inactive' ? 'inactive' : dataRow.statusLabel)
                        )}
                    </StyledAccordionTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{children}</Typography>
                </AccordionDetails>
            </StyledAccordion>
        </StyledAccordionContainer>
    );
}

export default AccordionComponent;
