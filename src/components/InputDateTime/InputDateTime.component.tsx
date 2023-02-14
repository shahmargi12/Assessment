import React, { SyntheticEvent } from 'react';
import DatePicker from 'rsuite/DatePicker';
import getHours from 'date-fns/getHours';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import getMinutes from 'date-fns/getMinutes';
import getSeconds from 'date-fns/getSeconds';
import { StyledRequiredSpan, StyledPlaceholder } from './InputDateTime.styled';
import '../../../node_modules/rsuite/DateRangePicker/styles/index.less';

type InputDateTimeCompProp = {
    id?: string;
    value: Date;
    handleChange: (value: Date | null, event: SyntheticEvent<Element, Event>) => void;
    minDateTime?: Date;
    disabled?: boolean;
    placeholder?: string;
    format?: string;
    dateValidationType?: 'min' | 'max';
    maxDateTime?: Date;
    required?: boolean;
};

const InputDateTimeComponent = ({
    id,
    value,
    handleChange,
    minDateTime,
    disabled,
    placeholder,
    format,
    dateValidationType,
    maxDateTime,
    required,
}: InputDateTimeCompProp): JSX.Element => {
    const getDateTimeComparision = (date: Date | undefined): boolean => {
        if (dateValidationType === 'min' && minDateTime && date) {
            if (isSameDay(date, minDateTime)) {
                return false;
            }
            return isBefore(date, minDateTime);
        }
        if (dateValidationType === 'max' && maxDateTime && date) {
            if (isSameDay(date, maxDateTime)) {
                return false;
            }
            return isAfter(date, maxDateTime);
        }
        return false;
    };

    const disabledDateTime = (timeValue: number, type: string, date: Date | undefined, selectedDate: Date): boolean => {
        if (date && isSameDay(date, selectedDate)) {
            const hr = getHours(date);
            const hrSelectedDate = getHours(selectedDate);
            const mins = getMinutes(date);
            const minsSelectedDate = getMinutes(selectedDate);
            const seconds = getSeconds(date);
            switch (type) {
                case 'hour':
                    return timeValue < hr;
                case 'min':
                    return hr === hrSelectedDate ? timeValue < mins : false;
                case 'second':
                    return hr === hrSelectedDate && mins === minsSelectedDate ? timeValue < seconds : false;
            }
        }
        return false;
    };

    const getPlaceholder = () => {
        if (required)
            return (
                <StyledPlaceholder>
                    <StyledRequiredSpan>*</StyledRequiredSpan>
                    {placeholder}
                </StyledPlaceholder>
            );

        return <StyledPlaceholder>{placeholder}</StyledPlaceholder>;
    };

    return (
        <DatePicker
            id={id}
            placeholder={getPlaceholder()}
            format={format}
            disabledDate={(date) => getDateTimeComparision(date)}
            ranges={[
                {
                    label: 'Now',
                    value: new Date(),
                },
            ]}
            disabledHours={(hr, date) => disabledDateTime(hr, 'hour', minDateTime, date)}
            disabledMinutes={(mins, date) => disabledDateTime(mins, 'min', minDateTime, date)}
            disabledSeconds={(seconds, date) => disabledDateTime(seconds, 'second', minDateTime, date)}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            placement="autoVerticalStart"
            key={new Date(value).toString()}
            block
        />
    );
};

InputDateTimeComponent.defaultProps = {
    placeholder: 'yyyy-MM-dd HH:mm',
    format: 'yyyy-MM-dd HH:mm',
    dateValidationType: 'min',
    handleChange: () => {
        console.log('change');
    },
};

export default InputDateTimeComponent;
