import React from 'react';
import { StyledCardContainer, StyledCardWithoutCustomCss } from './Slider.styled';

type SliderProp = {
    children: JSX.Element;
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow: number;
    slidesToScroll?: number;
    minWidth?: string;
    useWithoutCustomCss?: boolean;
    responsive?: { breakpoint: number; settings: { slidesToShow: number } }[];
    autoplay: boolean;
    alignLeft?: boolean;
    swipeToSlide?: boolean;
};

const Slider = ({
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    children,
    swipeToSlide,
    minWidth,
    useWithoutCustomCss,
    responsive,
    autoplay,
}: SliderProp): JSX.Element => {
    const SliderComponent = useWithoutCustomCss ? StyledCardWithoutCustomCss : StyledCardContainer;
    return (
        <SliderComponent
            dots={dots}
            infinite={infinite}
            speed={speed}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            width={minWidth}
            autoplay={autoplay}
            responsive={responsive}
            swipeToSlide={swipeToSlide}
        >
            {children}
        </SliderComponent>
    );
};

Slider.defaultProps = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    useWithoutCnumberustomCss: false,
    autoplay: false,
};

export default Slider;
