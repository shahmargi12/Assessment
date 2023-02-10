import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TooltipComp from './Tooltip.component';

export default {
    title: 'Tooltip',
    component: TooltipComp,
    argTypes: {},
} as ComponentMeta<typeof TooltipComp>;

const Template: ComponentStory<typeof TooltipComp> = (args) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TooltipComp {...args}>
                <div style={{ width: '300px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis vel sed quia inventore
                    corporis laboriosam voluptas officia repudiandae obcaecati aliquam aut, reiciendis possimus, labore
                    natus eum? Quisquam, illo maiores!
                </div>
            </TooltipComp>
        </div>
    );
};

export const Tooltip: ComponentStory<typeof TooltipComp> = Template.bind({});
Tooltip.args = {
    title: 'Hi! I am Tooltip!',
};
