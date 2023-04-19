import { hexToRgb } from '@utils/helpers';
import { availableLocales } from '@utils/locale';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { StylesConfig } from 'react-select';

import colors from '@theme/configs/colors';
import shadows from '@theme/configs/shadows';
import space from '@theme/configs/space';
import zIndices from '@theme/configs/zIndices';

import LanguageDropdown from '@components/molecules/LanguageDropdown/LanguageDropdown';

import { DropdownItemProps, DropdownProps } from '@components/atoms/Form/Dropdown';
import { fontsConfig } from '@components/atoms/Typography';

const customStyles: StylesConfig<DropdownItemProps, false> = {
    container: (provided) => ({
        ...provided,
        height: '100%',
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
            background: isDark || transparent ? 'transparent' : 'var(--dd-bg)',
        };

        return {
            'color': isDark ? 'var(--white)' : color,
            'minHeight': '40px',
            'opacity': isDisabled ? 0.32 : 1,
            'border': hasBorder ? `1px solid var(--grey)` : 'transparent',
            'borderRadius': space['2xs'],
            'padding': `0 ${space.xs}`,
            'display': 'flex',
            'background': colorMap.background,
            'z-index': `${zIndices.dropdown}`,
            ...fontsConfig.link,
        };
    },
    option: (_, state) => {
        const { isSelected, selectProps } = state;
        const color = selectProps.color ?? colors.ddInputText;
        const backgroundColor = 'var(--dd-bg)';

        return {
            ...fontsConfig.link,
            'padding': `${space.xs} ${space.md}`,
            'borderRadius': space['2xs'],
            'background': isSelected ? backgroundColor : 'transparent',
            'color': color,
            'cursor': 'pointer',
            'z-index': `${zIndices.dropdown}`,
            ':hover': {
                background: `rgba(${hexToRgb(color)}, 0.5)`,
            },
        };
    },
    singleValue: (provided, props) => {
        const { color = 'var(--dd-input-text)' } = props.selectProps;

        return {
            ...provided,
            'fontSize': '12px',
            'lineHeight': '15px',
            'fontWeight': 400,
            'cursor': 'pointer',
            'padding': props.selectProps.selectedPadding ?? '16px 60px 0 0px',
            'color': props.selectProps.isDark ? 'var(--white)' : color,
            '@media all and (min-width: 768px)': {
                fontSize: '17px',
                lineHeight: '21px',
            },
        };
    },
    indicatorSeparator: () => ({ display: 'none' }),
    indicatorsContainer: (provided) => ({
        ...provided,
        '& > div': {
            padding: '0',
        },
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
        marginTop: 0,
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
            padding: '2px 0 2px 10px',
            backgroundColor: transparent ? 'transparent' : undefined,
        };
    },
    input: (provided) => ({
        ...provided,
        'fontSize': '12px',
        'lineHeight': '15px',
        'fontWeight': 400,
        'padding': '16px 37px 0 0px',
        'color': 'var(--dd-input-text)',
        '@media all and (min-width: 768px)': {
            padding: '16px 50px 0 0px',
            fontSize: '17px',
            lineHeight: '21px',
        },
    }),
    noOptionsMessage: (provided) => ({ ...provided, ...fontsConfig.link }),
};

const GuestLanguageSelect = (props: Pick<DropdownProps, 'size' | 'isDark' | 'id'>) => {
    const router = useRouter();
    const { locale, defaultLocale } = router;

    const supportedLanguages = availableLocales.map((lang) => ({
        label: lang.toUpperCase(),
        value: lang,
    }));

    const [currentValue, setCurrentValue] = useState<DropdownItemProps>(
        supportedLanguages.filter((language) => language.value === locale).pop() ||
            supportedLanguages[0],
    );

    const onLanguageChange = (selected: DropdownItemProps | null) => {
        if (!selected) return;

        setCurrentValue(selected);
        router.push(
            {
                pathname: router.pathname,
                query: router.query,
            },
            undefined,
            { locale: selected?.value || '' },
        );
    };

    const defaultValue = supportedLanguages.find((language) => language.value === defaultLocale);

    return (
        <LanguageDropdown
            {...props}
            selected={currentValue}
            defaultValue={defaultValue}
            options={supportedLanguages}
            onChange={onLanguageChange}
            styles={customStyles}
        />
    );
};

export default GuestLanguageSelect;
