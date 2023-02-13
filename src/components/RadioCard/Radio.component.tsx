import React from 'react';
import Tooltip from '../Tooltip';
import Icons from '../../Icons';
import { Theme } from '../../theme/default';
import { StyledRadioGroup, StyledRadio, StyledFormControlLabel, StyledTitle, StyledHint } from './Radio.styled';

type RadioItem = {
    label: string;
    value: string;
    key: number | string;
    disabled?: boolean;
    isTooltip?: boolean;
    tooltipText?: string;
    title?: string;
    hint?: string;
};

type RadioProps = {
    /**
     * Items that you want to render inside radio group
     */
    items: RadioItem[];
    /**
     * Selected radio's value
     */
    selectedItemValue: string;
    /**
     * Radio group name that you want to give, not visible anywhere in UI but for accessiblity purpose
     */
    radioGroupName: string;
    /**
     * Callback to handle when user clicks on any radio
     */
    handleChange: (value: string) => void;
    /**
     * Size of the radio
     */
    size: 'small' | 'medium';
    type: 'horizontal' | 'vertical';
    height?: number;
    width?: number;
};

const CustomizedLabel = ({ label, isTooltip, tooltipText, title, hint }: Partial<RadioItem>): JSX.Element => {
    return (
        <>
            {title && <StyledTitle>{title}</StyledTitle>}
            <p>
                {label}
                {isTooltip && (
                    <Tooltip placement="right" title={tooltipText}>
                        <span className="tooltipIcon">
                            <Icons.InfoIcon height={17} width={17} />
                        </span>
                    </Tooltip>
                )}
            </p>
            {hint && <StyledHint>{hint}</StyledHint>}
        </>
    );
};

function RadioComp({
    items,
    selectedItemValue,
    radioGroupName,
    handleChange,
    size,
    type,
    height,
    width,
}: RadioProps): JSX.Element {
    return (
        <StyledRadioGroup
            aria-label={radioGroupName?.toLowerCase() + ' Radio '}
            name={radioGroupName}
            value={selectedItemValue}
            onChange={(e, selectedValue) => handleChange(selectedValue)}
            classes={{
                root: type === 'vertical' ? 'customRootVertical' : 'customRootHorizontal',
            }}
        >
            {items.map((item) => (
                <StyledFormControlLabel
                    value={item.value}
                    control={
                        <StyledRadio
                            checkedIcon={<Icons.RadioSelectedIcon height={height} width={width} />}
                            icon={
                                <Icons.RadioButtonIcon
                                    height={height}
                                    width={width}
                                    fill={Theme.colors.primaryBlack30}
                                />
                            }
                            checked={selectedItemValue === item.value}
                            color="primary"
                            size={size}
                        />
                    }
                    label={
                        <CustomizedLabel
                            label={item.label}
                            isTooltip={item.isTooltip}
                            tooltipText={item.tooltipText}
                            title={item.title}
                            hint={item.hint}
                        />
                    }
                    key={item.key}
                    disabled={item.disabled}
                />
            ))}
        </StyledRadioGroup>
    );
}
RadioComp.defaultProps = {
    size: 'medium',
    height: 22,
    width: 22,
};
export default RadioComp;
