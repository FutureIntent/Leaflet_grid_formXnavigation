import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import { responsiveStyleFactory } from '@utils/styles';
import styled from 'styled-components';
import { space, SpaceProps, variant } from 'styled-system';

import appTheme from '@theme/configs';

export enum CardSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
    auto = `auto`
}
export enum CardElevation {
    small = 'small',
    medium = 'medium',
}

export enum CardLayout {
    horizontal = 'horizontal',
    vertical = 'vertical',
}

const cardVariant = variant({
    prop: 'size',
    variants: {
        small: {
            maxWidth: '380px',
            minWidth: '280px',
        },
        medium: {
            minWidth: '290px',
        },
        large: {
            minWidth: responsiveStyleFactory({ _: '265px', tablet: '435px' }),
        },
        auto: {
            width: '100%'
        }
    },
});

const cardElevation = variant({
    prop: 'elevation',
    variants: {
        small: {
            boxShadow: appTheme.shadows.card,
        },
        medium: {
            boxShadow: appTheme.shadows.card2,
        },
    },
});

export interface CardProps {
    size?: CardSize;
    layout?: CardLayout;
    elevation?: CardElevation;
    hoverEffect?: boolean;
}

const Card = styled.div
    .attrs(({ elevation = CardElevation.medium, ...rest }: CardProps & SpaceProps) => ({
        elevation,
        ...rest,
    }))
    .withConfig({
        shouldForwardProp: (prop) =>
            ![...defaultFilteredProps, 'elevation', 'theme'].includes(String(prop)),
    })<CardProps>`
    background-color: var(--white);
    border-radius: ${({ theme }) => theme.space['2xs']};
    height: 100%;
    overflow: hidden;
    cursor: pointer;

    width: 100%;

    ${cardElevation};

    ${({ hoverEffect }) =>
        hoverEffect &&
        `
        transition: transform 0.2s ease-in-out;
        
        &:hover {
            transform: scale(1.05);
        }
        
        .poster {
            transform: scale(1.2);
            transition: transform 0.3s ease-in-out;
        }
    
        &:hover .poster {
            transform: scale(1);
        }
    `}

    &:not(:last-of-type),
    &:not(:first-of-type) {
        margin-right: 1rem;
    }

    ${cardVariant};

    ${({ layout }) =>
        layout === CardLayout.horizontal &&
        `
        display: flex;
    `}

    ${space};
`;

export default Card;
