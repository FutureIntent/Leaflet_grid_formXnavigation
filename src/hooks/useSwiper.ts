import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';

export const useSwiper = () => {
    const sliderRef = useRef<HTMLElement & { swiper: Swiper }>(null);
    const sliderPaginationRef = useRef<HTMLElement>(null);
    const thumbsSliderRef = useRef<HTMLElement>(null);
    const [shouldRenderSlider, setShouldRenderSlider] = useState(false);
    const nextSlide = () => sliderRef.current?.swiper.slideNext();
    const prevSlide = () => sliderRef.current?.swiper.slidePrev();

    useEffect(() => {
        if (sliderPaginationRef?.current) {
            setShouldRenderSlider(true);
        }
    }, [sliderPaginationRef, sliderRef]);

    return {
        sliderRef,
        sliderPaginationRef,
        thumbsSliderRef,
        shouldRenderSlider,
        nextSlide,
        prevSlide,
    };
};
