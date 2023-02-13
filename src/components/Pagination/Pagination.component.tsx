import React from 'react';
import Dropdown from './Dropdown.component';
import { Theme } from '../../theme/default';
import { StyledPaginationContainerNew, StyledPaginationContainer, StyledropdownContainer } from './Pagination.styled';

type FormPaginationProps = {
    value: string;
    defaultValue: number;
    items: {
        value: string;
        label: string;
    }[];
    onChangeRowLimit: (item: number) => void;
    totalRecords: number;
    onChangePagination: (value: number) => void;
    page: number | string;
    menuPlacement: string;
    color?: string;
    bgColor?: string;
    onChange?: (item: number) => void;
};

function PaginationNew({
    value,
    defaultValue,
    items,
    onChangeRowLimit,
    totalRecords,
    onChangePagination,
    menuPlacement,
    color,
    bgColor,
}: FormPaginationProps): JSX.Element {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        onChangePagination(value);
    };

    return (
        <StyledPaginationContainer>
            <StyledropdownContainer>
                <Dropdown
                    value={value}
                    defaultValue={defaultValue}
                    items={items}
                    onChange={(items: number) => {
                        onChangeRowLimit(items);
                    }}
                    placeholder={value}
                    menuPlacement={menuPlacement}
                    isMulti={false}
                    isSearchable={false}
                    closeMenuOnSelect={true}
                    hideSelectedOptions={false}
                    onFocus={undefined}
                    onInputChange={() => {}}
                />
            </StyledropdownContainer>
            <StyledPaginationContainerNew
                count={totalRecords}
                onChange={handleChange}
                shape="rounded"
                iColor={color}
                bColor={bgColor}
            />
        </StyledPaginationContainer>
    );
}

PaginationNew.defaultProps = {
    color: Theme.colors.white,
};

export default PaginationNew;
