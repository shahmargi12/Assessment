import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid, { GridItem } from '../Grid';
import DropdownTheme from './DropdownThemeWrapper.component';
import { colourOptions, GroupedColorOptions, loadOptions } from './MockData';
export default {
    title: 'DropdownTheme',
    component: DropdownTheme,
    argTypes: {},
} as ComponentMeta<typeof DropdownTheme>;

const Template: ComponentStory<typeof DropdownTheme> = (args) => {
    const [items, setItems] = useState(colourOptions);
    const [value, setValue] = useState(null);
    const [groupedItems, setGroupedItems] = useState(GroupedColorOptions);
    const [groupedValue, setGroupedValue] = useState(null);

    return (
        <Grid col={2}>
            <GridItem description="Standard / Without Checkbox / Multi-Select">
                <DropdownTheme
                    {...args}
                    value={value}
                    items={items}
                    onChange={(item: any) => setValue(item)}
                    isCheckboxList={false}
                    isMulti={true}
                />
            </GridItem>
            <GridItem description="Standard / CheckboxList / Multi-Select / Creatable">
                <DropdownTheme
                    {...args}
                    value={value}
                    items={items}
                    onChange={(item: any) => setValue(item)}
                    isCheckboxList={true}
                    isMulti={true}
                    isCreatable
                    closeMenuOnSelect={false}
                />
            </GridItem>
            <GridItem description="Standard / Infinite Scroll / Multi-Select">
                <DropdownTheme
                    {...args}
                    value={value}
                    items={items}
                    onChange={(item: any) => setValue(item)}
                    isCheckboxList={false}
                    isMulti={true}
                    isInfinite
                    loadOptions={loadOptions}
                />
            </GridItem>
            <GridItem description="Standard / Infinite Scroll / Single-Select">
                <DropdownTheme
                    {...args}
                    value={value}
                    items={items}
                    onChange={(item: any) => setValue(item)}
                    isCheckboxList={false}
                    isMulti={false}
                    isInfinite
                    loadOptions={loadOptions}
                />
            </GridItem>
            <GridItem description="Standard / Group">
                <DropdownTheme
                    {...args}
                    value={groupedValue}
                    items={groupedItems}
                    onChange={(item: any) => setGroupedValue(item)}
                    isCheckboxList={false}
                    isMulti={false}
                />
            </GridItem>
        </Grid>
    );
};

export const DropdownNewTheme = Template.bind({});

DropdownNewTheme.args = {
    placeholder: 'Select Team Member',
    isCreatable: false,
    isMulti: false,
    noOptionsMessage: 'Not Found.',
    isSearchable: true,
    closeMenuOnSelect: true,
    hideSelectedOptions: false,
    isLoading: false,
    isFullwidth: true,
    onInputChange: (e: any) => {},
    isLimitedChips: true,
    maxChipsToShow: 3,
};
