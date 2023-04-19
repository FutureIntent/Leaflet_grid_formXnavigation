import { hexToRgb } from '@utils/helpers';
import { ReactElement, forwardRef, ForwardedRef, useState } from 'react';
import Select, { StylesConfig, NamedProps as SelectProps } from 'react-select';
import styled from 'styled-components';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';
import shadows from '@theme/configs/shadows';
import space from '@theme/configs/space';
import zIndices from '@theme/configs/zIndices';

import { StyledLabel, StyledLabelText } from '@components/atoms/Form/Label';
import { fontsConfig } from '@components/atoms/Typography';
import { FONT_FAMILY, FONT_REGULAR } from '@components/atoms/Typography/Typography';

type DropdownSize = 'normal' | 'small';

export interface DropdownProps extends SelectProps {
    id?: string;
    color?: string;
    size?: DropdownSize;
    hasBorder?: boolean;
    isDark?: boolean;
    transparent?: boolean;
    label?: string;
    defaultValue?: { label: string; value: string };
    selected: DropdownItemProps | null;
    onChange?: (val: DropdownItemProps | null) => void;
    selectedPadding?: string | null;
    styles?: any;
}

export interface DropdownItemProps {
    value: string;
    label: string;
}

const Wrapper = styled.div<{ isFocused: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;

    label p {
        color: var(--grey-dark);
    }

    ${({ isFocused }) =>
        isFocused &&
        `
            label p {
                font-family: ${FONT_FAMILY};
                font-size: 10px;
                line-height: 13px;
                font-weight: ${FONT_REGULAR};
                transform: translateY(6px);
        
                ${mediaQueries.tablet} {
                    font-size: 12px;
                    line-height: 18px;
                }
               
            }
    `}
`;

const customStyles: StylesConfig<DropdownItemProps, false> = {
    container: (provided) => ({
        ...provided,
        border: `1px solid ${colors.grey}`,
        borderRadius: 4,
    }),
    control: (_, state) => {
        const {
            color = colors.ddInputText,
            isDisabled,
            transparent = false,
            hasBorder = true,
            isDark = false,
        } = state.selectProps;
        const colorMap = {
            border: `rgba(${hexToRgb(colors.blueBrand)}, 0.5)`,
            hoverBorder: `rgba(${hexToRgb(color)}, 0.5)`,
            background: isDark || transparent ? colors.greyLt : 'var(--dd-bg)',
        };

        return {
            'color': isDark ? 'var(--white)' : color,
            'minHeight': '40px',
            'opacity': isDisabled ? 0.32 : 1,
            'border': hasBorder ? `1px solid var(--grey)` : 'transparent',
            'borderRadius': space['2xs'],
            'display': 'flex',
            'padding': '0 8px 0 0',
            'background': colorMap.background,
            'zIndex': `${zIndices.dropdown}`,
            ...fontsConfig.link,
            '@media all and (min-width: 768px)': {
                minHeight: '45px',
            },
        };
    },
    option: (_, state) => {
        const { isSelected, selectProps } = state;
        const color = selectProps.color ?? colors.ddInputText;
        const backgroundColor = 'var(--dd-bg)';

        return {
            ...fontsConfig.link,
            'borderRadius': space['2xs'],
            'background': isSelected ? backgroundColor : 'transparent',
            'color': color,
            'cursor': 'pointer',
            'zIndex': `${zIndices.dropdown}`,
            ':hover': {
                background: `rgba(${hexToRgb(colors.greyDark)}, 0.5)`,
            },
        };
    },
    singleValue: (provided, props) => {
        const { color = 'var(--dd-input-text)' } = props.selectProps;

        return {
            ...provided,
            ...fontsConfig.paragraph2,
            cursor: 'pointer',
            top: '70%',
            marginLeft: 0,
            marginRight: 0,
            padding: props.selectProps.selectedPadding ?? '16px 60px 0 0px',
            color: props.selectProps.isDark ? 'var(--white)' : color,
        };
    },
    indicatorSeparator: () => ({ display: 'none' }),
    indicatorsContainer: (provided) => ({
        ...provided,
        'paddingLeft': '12px',
        '& > div': {
            padding: '0',
        },
        'color': colors.greyDark,
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
        path: {
            fill: state.selectProps.color,
        },
    }),
    menu: (provided) => ({
        ...provided,
        background: 'var(--dd-bg)',
        borderRadius: space['2xs'],
        boxShadow: shadows.card,
        marginTop: 1,
        zIndex: 91,
    }),
    menuList: (provided) => ({
        ...provided,
        padding: space.xs,
    }),
    valueContainer: (provided) => {
        const { transparent = false } = provided;

        return {
            ...provided,
            padding: '0 0 0 10px',
            backgroundColor: transparent ? 'transparent' : undefined,
        };
    },
    input: (provided) => ({
        ...provided,
        ...fontsConfig.paragraph2,
        'padding': '16px 37px 0 0px',
        'color': 'var(--dd-input-text)',
        '@media all and (min-width: 768px)': {
            padding: '16px 50px 0 0px',
        },
    }),
    noOptionsMessage: (provided) => ({ ...provided, ...fontsConfig.link }),
};

const Dropdown = (
    {
        selectedPadding = null,
        options,
        name,
        onChange = () => {},
        selected,
        defaultValue,
        label,
        styles,
        transparent,
        ...rest
    }: DropdownProps,
    ref: ForwardedRef<HTMLInputElement>,
): ReactElement => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <Wrapper isFocused={Boolean(selected?.value) || Boolean(defaultValue?.value) || isFocused}>
            <Select
                {...rest}
                styles={{ ...customStyles, ...styles }}
                selectedPadding={selectedPadding}
                placeholder=" "
                defaultValue={defaultValue}
                transparent={transparent}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                options={options}
                inputRef={ref}
            />
            {label && (
                <StyledLabel htmlFor={name}>
                    <StyledLabelText
                        as="p"
                        variant={{ _: 'caption', tablet: 'paragraph2' }}
                        color="var(--grey-dark)"
                    >
                        {label}
                    </StyledLabelText>
                </StyledLabel>
            )}
        </Wrapper>
    );
};

export default forwardRef(Dropdown);
