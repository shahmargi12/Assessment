import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FiltersSkeleton from './FiltersSkeleton.component';

export default {
    title: 'FiltersSkeleton',
    component: FiltersSkeleton,
    argTypes: {},
} as ComponentMeta<typeof FiltersSkeleton>;

const Template: ComponentStory<typeof FiltersSkeleton> = (args) => {
    return (
        <>
            <FiltersSkeleton {...args} isLoading={true} />
        </>
    );
};

export const Normal = Template.bind({});
