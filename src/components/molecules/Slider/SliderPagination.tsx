import { props as defaultProps } from '@styled-system/should-forward-prop';
import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import styled from 'styled-components';

import Box from '../../atoms/Box';

const StyledBox = styled(Box).withConfig({
    shouldForwardProp: (prop) => ![...defaultProps, 'bulletColor'].includes(String(prop)),
})<{ bulletColor?: string }>`
    display: flex;
    align-items: center;
    height: 2.5rem;
    justify-content: center;

    .bullet {
        border: 2px solid ${({ bulletColor }) => bulletColor ?? 'var(--grey-dark)'};
        border-radius: 50%;
        display: inline-block;
        height: 0.9rem;
        width: 0.9rem;
        text-align: center;
        line-height: 0.9rem;
        color: var(--white);

        span {
            display: none;
        }

        &:not(:last-of-type) {
            margin-right: 1.25rem;
        }

        &.swiper-pagination-bullet-active {
            background-color: var(--blue-brand);
            border: 0;

            &.bullet-number {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;

                span {
                    display: inline-block;
                }
            }
        }
    }
`;

const SliderPagination = (props: PropsWithChildren<any>, ref: ForwardedRef<HTMLElement>) => {
    const { children, ...rest } = props;

    return (
        <StyledBox ref={ref} {...rest}>
            {children}
        </StyledBox>
    );
};

export default forwardRef(SliderPagination);
