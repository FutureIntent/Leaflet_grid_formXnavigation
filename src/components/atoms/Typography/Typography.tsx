import { useActiveViewportSize } from '@hooks';
import { props } from '@styled-system/should-forward-prop';
import { ComponentClass, ReactNode, ReactElement } from 'react';
import type { UseActiveViewportSizeReturn } from 'src/hooks/useActiveViewportSize';
import styled from 'styled-components';
import {
    variant as styledVariant,
    space,
    color as textColor,
    typography,
    textAlign,
    SpaceProps,
    TextAlignProps,
    TypographyProps as TypographyBaseProps,
    display,
    DisplayProps,
    ResponsiveValue,
    VerticalAlignProps,
    verticalAlign,
} from 'styled-system';

import { Device, deviceList } from '@theme/configs/breakpoints';

export const FONT_FAMILY = 'Manrope, san-serif';
export const FONT_HEAVY = 900;
export const FONT_BOLD = 700;
export const FONT_REGULAR = 400;

export type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'paragraph'
    | 'paragraph2'
    | 'caption'
    | 'accent'
    | 'homeBanner'
    | 'link';

type TypographyVariant = Variant | ({ _: Variant } & { [key in Device]?: Variant });

type TransformText = 'capitalize' | 'lowercase' | 'uppercase' | 'none';

export interface TypographyProps
    extends SpaceProps,
        TextAlignProps,
        TypographyBaseProps,
        VerticalAlignProps,
        DisplayProps {
    variant?: TypographyVariant;
    color?: ResponsiveValue<string>;
    hoverColor?: ResponsiveValue<string>;
    hideOverflow?: boolean;
    as?: ComponentClass | string | null;
    children: ReactNode;
    transformText?: TransformText;
    id?: string | null;
    whiteSpace?: string;
}

interface StyledTypographyProps extends TypographyProps {
    variant: TypographyVariant;
}

export const fontsConfig = {
    h1: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '36px',
        'fontWeight': FONT_HEAVY,
        '@media all and (min-width: 768px)': {
            fontSize: '56px',
        },
    },
    h2: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '27px',
        'fontWeight': FONT_HEAVY,
        '@media all and (min-width: 768px)': {
            fontSize: '36px',
        },
    },
    h3: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '21px',
        'fontWeight': FONT_HEAVY,
        '@media all and (min-width: 768px)': {
            fontSize: '28px',
        },
    },
    paragraph: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '15px',
        'fontWeight': FONT_REGULAR,
        '@media all and (min-width: 768px)': {
            fontSize: '18px',
        },
    },
    paragraph2: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '12px',
        'fontWeight': FONT_REGULAR,
        '@media all and (min-width: 768px)': {
            fontSize: '16px',
        },
    },
    caption: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '10px',
        'fontWeight': FONT_REGULAR,
        '@media all and (min-width: 768px)': {
            fontSize: '12px',
        },
    },
    accent: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '18px',
        'fontWeight': FONT_BOLD,
        '@media all and (min-width: 768px)': {
            fontSize: '15px',
        },
    },
    homeBanner: {
        fontFamily: FONT_FAMILY,
        fontSize: '24px',
        fontWeight: FONT_REGULAR,
    },
    link: {
        fontFamily: FONT_FAMILY,
        fontSize: '16px',
        fontWeight: FONT_REGULAR,
    },
};

const typographyVariant = styledVariant({
    prop: 'variant',
    variants: fontsConfig,
});

const getAsProp = (
    variant: TypographyVariant,
    activeViewportSize: UseActiveViewportSizeReturn,
): string => {
    const variantMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        paragraph: 'p',
        paragraph2: 'p',
        caption: 'p',
        accent: 'span',
        homeBanner: 'p',
        link: 'p',
    };

    // Variant is of simple string variant="h1" approach
    if (typeof variant === 'string') {
        return variantMap[variant];
    }

    // Variant is of complex object type variant={{ _: 'h2', laptop: 'h1' }}
    // Variant has key of current activeViewportSize
    if (variant[activeViewportSize]) {
        return variantMap[variant[activeViewportSize]!];
    }

    // Variant does not contain activeViewportSize key. Return the closest one.
    let closestVariantDevice = deviceList
        .slice(
            0,
            deviceList.findIndex((device) => device === activeViewportSize),
        )
        .reverse()
        .find((device) => {
            if (Object.prototype.hasOwnProperty.call(variant, device)) {
                return true;
            }

            return false;
        });

    // Variant does not contain any closest key from deviceList. Return default _ value.
    if (!closestVariantDevice) {
        closestVariantDevice = 'laptopS';
    }

    return variantMap[variant[closestVariantDevice]!];
};

const StyledTypography = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        ![...props, 'color', 'hoverColor', 'transformText', 'hideOverflow', 'whiteSpace'].includes(String(prop)),
})<StyledTypographyProps>`
    margin: 0;
    padding: 0;
    text-decoration: none;
    line-height: 125%;
    ${typographyVariant};
    ${display};
    ${textColor};
    ${textAlign};
    ${space};
    ${typography};
    ${verticalAlign};

    ${({ transformText }: { transformText?: TransformText }) =>
        transformText ? `text-transform: ${transformText};` : null}

    ${({ whiteSpace }: { whiteSpace?: string }) =>
        whiteSpace ? `white-space: ${whiteSpace};` : null}

    ${({ hoverColor }: { hoverColor?: ResponsiveValue<string> }) =>
        hoverColor &&
        `
            &:hover {
                color: ${hoverColor};
            }
    `}

    ${({ hideOverflow = true }: { hideOverflow?: boolean }) =>
        hideOverflow &&
        `
            text-overflow: ellipsis;
            overflow: hidden;
    `}
`;

const Typography = ({
    variant = 'paragraph',
    color,
    hoverColor,
    as = null,
    children,
    transformText,
    hideOverflow = true,
    id = null,
    whiteSpace = 'normal',
    ...rest
}: TypographyProps): ReactElement => {
    const activeViewportSize = useActiveViewportSize();
    const asPropFromVariant = getAsProp(variant, activeViewportSize);

    return (
        <StyledTypography
            id={id}
            variant={variant}
            transformText={transformText}
            color={color}
            hoverColor={hoverColor}
            as={as || asPropFromVariant}
            hideOverflow={hideOverflow}
            whiteSpace = {whiteSpace}
            {...rest}
        >
            {children}
        </StyledTypography>
    );
};

export default Typography;
