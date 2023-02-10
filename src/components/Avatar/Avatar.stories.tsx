import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarComp from './Avatar.component';
import Grid, { GridItem } from '../Grid';

export default {
    title: 'Avatar',
    component: AvatarComp,
    argTypes: {},
} as ComponentMeta<typeof AvatarComp>;

const Template: ComponentStory<typeof AvatarComp> = (args) => {
    return (
        <div>
            <Grid col={2}>
                <GridItem description="Square / Rounded /With Picture">
                    <AvatarComp
                        {...args}
                        url="https://www.w3schools.com/howto/img_avatar2.png"
                        title="Something Else"
                        isSquare
                    />
                </GridItem>
                <GridItem description="Circle / Rounded /Without Picture">
                    <AvatarComp {...args} url={''} title="Something Else" size="medium" />
                </GridItem>
                <GridItem description="Square / Rounded /Without Picture">
                    <AvatarComp {...args} title="Something Else" isSquare />
                </GridItem>
                <GridItem description="Circle / Rounded / With Picture">
                    <AvatarComp
                        {...args}
                        url="https://www.w3schools.com/howto/img_avatar2.png"
                        title="Something Else"
                        size="medium"
                    />
                </GridItem>
            </Grid>
        </div>
    );
};

export const Avatar = Template.bind({});
