import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps, variant } from 'styled-system';

import ArrowButton from '@components/molecules/Icons/ArrowButton';

type ArrowVariants = 'top' | 'bottom' | 'left' | 'right';

const arrowVariant = variant({
    prop: 'variant',
    variants: {
        top: {
            transform: 'rotate(90deg)',
        },
        bottom: {
            transform: 'rotate(-90deg)',
        },
        left: {
            transform: 'rotate(180deg)',
        },
        right: {
            transform: 'rotate(0)',
        },
    },
});
const Arrow = styled(ArrowButton)<{ variant: ArrowVariants } & SpaceProps & ColorProps>`
    ${space};
    ${color};
    ${arrowVariant};
`;

export default Arrow;
