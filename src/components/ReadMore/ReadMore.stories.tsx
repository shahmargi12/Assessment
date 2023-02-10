import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReadMoreComp from './ReadMore.component';

export default {
    title: 'ReadMore',
    component: ReadMoreComp,
    argTypes: {},
} as ComponentMeta<typeof ReadMoreComp>;

const Template: ComponentStory<typeof ReadMoreComp> = (args) => {
    return <ReadMoreComp {...args}></ReadMoreComp>;
};

export const ReadMore: ComponentStory<typeof ReadMoreComp> = Template.bind({});
ReadMore.args = {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam molestias voluptatem sapiente omnis officia, rerum praesentium tenetur ipsam magnam amet mollitia enim inventore beatae accusamus odit! Dignissimos temporibus odit iure aliquam magnam? Impedit voluptas tempora nam cumque.Doloribus suscipit dignissimos fugit, iure at molestias maxime, ut quisquam obcaecati ducimus similique',
    limit: 10,
};
