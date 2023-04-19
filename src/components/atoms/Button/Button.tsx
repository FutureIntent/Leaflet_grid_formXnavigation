import { hexToRgb } from '@utils/helpers';
import styled from 'styled-components';
import {
    variant as styledVariant,
    SizeProps,
    space,
    SpaceProps,
    BorderProps,
    border,
    flexbox,
    FlexboxProps,
} from 'styled-system';

import { Theme } from '@theme/configs';
import colors from '@theme/configs/colors';

import ButtonBase from '../ButtonBase';

export type ButtonVariants = 'primary' | 'secondary' | 'night' | 'link';
export enum SizePropsType {
    xs = 'xs',
    small = 'small',
    large = 'large',
    fullWidth = 'fullWidth',
    auto = 'auto',
}

export interface ButtonProps extends SpaceProps, BorderProps, FlexboxProps {
    variant?: ButtonVariants;
    size?: SizeProps<Theme, SizePropsType> | SizePropsType;
    withIcon?: boolean;
}

const variants = styledVariant({
    prop: 'variant',
    variants: {
        primary: {
            'flex-shrink': 0,
            'color': 'var(--white)',
            'backgroundColor': 'var(--blue-brand)',
            'transition': 'background-color .2s ease-in-out',
            '&:hover': {
                'background-color': `rgba(${hexToRgb(colors.blueBrand)}, 0.8)`,
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        secondary: {
            'flex-shrink': 0,
            'color': 'var(--blue-brand)',
            'backgroundColor': 'transparent',
            'border': '1px solid var(--blue-brand)',
            'transition': 'background-color .2s ease-in-out',
            '&:hover': {
                'background-color': `rgba(${hexToRgb(colors.blueBrand)}, 0.15)`,
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        night: {
            'flex-shrink': 0,
            'color': 'var(--white)',
            'backgroundColor': 'transparent',
            'border': '1px solid var(--grey-dark)',
            'transition': 'background-color .2s ease-in-out',
            '&:hover': {
                'background-color': `rgba(${hexToRgb(colors.greyDark)}, 0.2)`,
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        link: {
            'color': 'var(--blue-brand)',
            'backgroundColor': 'transparent',
            '&:hover': {
                opacity: 0.75,
            },
            '&:disabled': {
                opacity: 0.32,
            },
            'padding': 0,
        },
    },
});

const sizeVariants = styledVariant({
    prop: 'size',

    variants: {
        auto: {
            minWidth: 'unset',
        },
        xs: {
            minWidth: '7rem',
            padding: '0.5rem 1.75rem',
        },
        small: {
            minWidth: '10rem',
            padding: '0.5rem 1.75rem',
        },
        large: {
            minWidth: '12.5rem',
            padding: '1rem 2.6rem',
        },
        fullWidth: {
            minWidth: '100%',
            padding: '1rem 2.6rem',
        },
    },
});

const Button = styled(ButtonBase).attrs(
    (props: ButtonProps): ButtonProps => ({
        variant: props.variant || 'primary',
        size: props.size || SizePropsType.large,
        withIcon: props.withIcon || false,
    }),
)<ButtonProps>`
    border-radius: ${({ theme }) => theme.space['2xs']};
    white-space: nowrap;
    display: flex;
    align-items: center;

    ${({ variant, withIcon }) =>
        variant !== 'link' &&
        `
            justify-content: ${withIcon ? 'flex-end' : 'center'};
    `};

    ${sizeVariants};
    ${space};
    ${variants};

    ${border};

    ${({ withIcon, variant }) =>
        withIcon &&
        variant !== 'link' &&
        `
            svg {
                margin-left: 0.8rem
            }
        `}

    ${flexbox}
`;

export default Button;
