import { props } from '@styled-system/should-forward-prop';
import { nanoid } from 'nanoid';
import { Children, ReactElement, RefObject } from 'react';
import styled from 'styled-components';
import {
    Controller,
    Navigation,
    Pagination,
    Thumbs,
    Virtual,
    EffectCreative,
    EffectFade,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

interface SliderProps extends SwiperProps {
    children?: ReactElement[] | ReactElement;
    showOverflow?: boolean;
    sliderRef?: RefObject<HTMLElement>;
    slider2Ref?: RefObject<HTMLElement>;
    paginationRef?: RefObject<HTMLElement>;
    showNumber?: boolean;
    shouldShrink?: boolean;
}

const StyledSwiper = styled(Swiper).withConfig({
    shouldForwardProp: (prop) => ![...props, 'showOverflow', 'shouldShrink'].includes(String(prop)),
})<Pick<SliderProps, 'showOverflow' | 'shouldShrink'> & { ref?: RefObject<HTMLElement> }>`
    max-width: 100vw;
    height: 100%;

    .swiper-slide {
        height: auto;
        flex-shrink: ${({ shouldShrink }) => (shouldShrink ? '1' : '0')};
    }

    ${({ showOverflow }) =>
        showOverflow &&
        `
        overflow: visible !important;
    `}
`;

const Slider = ({
    children,
    showOverflow = false,
    sliderRef,
    slider2Ref,
    paginationRef,
    showNumber,
    shouldShrink = false,
    ...rest
}: SliderProps) => (
    <StyledSwiper
        grabCursor
        shouldShrink={shouldShrink}
        modules={[Navigation, Pagination, Thumbs, Virtual, Controller, EffectCreative, EffectFade]}
        showOverflow={showOverflow}
        // centerInsufficientSlides
        ref={sliderRef}
        pagination={{
            el: paginationRef?.current,
            clickable: true,
            renderBullet: (index: number, className: string) =>
                `<p class='bullet ${className} ${showNumber ? 'bullet-number' : ''}'><span>${
                    showNumber ? index + 1 : ''
                }</span></p>`,
        }}
        {...rest}
    >
        {Children.toArray(children).map((child, index) => (
            <SwiperSlide key={nanoid()} virtualIndex={index}>
                {child}
            </SwiperSlide>
        ))}
    </StyledSwiper>
);

export default Slider;
