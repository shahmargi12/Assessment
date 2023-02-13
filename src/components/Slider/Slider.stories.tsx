import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SliderComp from './Slider.component';

export default {
    title: 'Slider',
    component: SliderComp,
    argTypes: {},
} as ComponentMeta<typeof SliderComp>;

const Card = () => <div style={{ height: '400px', width: '400px', backgroundColor: 'lightblue' }}></div>;

const Template: ComponentStory<typeof SliderComp> = (args) => {
    return (
        <SliderComp {...args}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </SliderComp>
    );
};

export const Slider: ComponentStory<typeof SliderComp> = Template.bind({});
Slider.args = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    useWithoutCustomCss: false,
    autoplay: true,
};
