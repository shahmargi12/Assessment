import styled from 'styled-components';
import Slider from 'react-slick';
import leftArrowImg from '../../assets/images/prev.png';
import rightArrowImg from '../../assets/images/next.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderProps = {
    width?: string;
};
export const StyledCardContainer = styled(Slider)<SliderProps>`
    display: flex;
    margin: 5px 0 24px 0px;
    width: 100%;
    padding-bottom: 10px;
    gap: 10px;

    .slick-prev,
    .slick-next {
        width: 30px;
        height: 30px;
        top: calc(50% - 15px);
        border-radius: 20px;
        border: solid 0px #d2d6dd;
        background-color: #fff;
        background-size: cover;
        background-position: center;
        z-index: 9;

        &:before,
        &:after {
            color: #000;
            content: '';
        }
    }

    .slick-prev {
        left: -5px;
        background-image: url('${leftArrowImg}') !important;
    }

    .slick-next {
        background-image: url('${rightArrowImg}') !important;
    }
    .slick-list {
        width: 100%;
    }

    .slick-track {
        display: flex;
        gap: 20px;

        .slick-slide {
            // width: 140px !important;
            > div {
                width: 100%;
            }
            @media (max-width: 1367px) {
                width: 150px;
            }

            @media (max-width: 767px) {
                width: 100% !important;
            }
        }
    }
`;

export const StyledCardWithoutCustomCss = styled(Slider)<SliderProps>`
    .slick-prev,
    .slick-next {
        width: 30px;
        height: 30px;
        border-radius: 20px;
        border: solid 0px #d2d6dd;
        background-color: #fff;
        background-size: cover;
        background-position: center;
        z-index: 9;
        top: 50%;

        &:before,
        &:after {
            color: #000;
            content: '';
        }
    }

    .slick-prev {
        left: -5px;
        background-image: url('${leftArrowImg}');
    }

    .slick-next {
        background-image: url('${rightArrowImg}');
    }

    .slick-track {
        display: flex;
        gap: 20px;
        .slick-slide {
            // width: 140px !important;
            width: ${({ width }) => width + 'px ' + '!important'};
            > div {
                width: 100%;
            }
        }
    }
`;
