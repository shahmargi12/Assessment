import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import Button from './Skeleton.component';
import SkeletonComponent from './Skeleton.component';

export default {
    title: 'Skeleton',
    component: SkeletonComponent,
    argTypes: {},
} as ComponentMeta<typeof SkeletonComponent>;

const Template: ComponentStory<typeof SkeletonComponent> = (args) => {
    return (
        <>
            <SkeletonComponent {...args} variant={'circular'} height={40} width={40} />
            <SkeletonComponent {...args} variant={'text'} width={300} />
            <SkeletonComponent {...args} variant={'rectangular'} animation={'wave'} />
        </>
    );
};

export const Skeleton = Template.bind({});
