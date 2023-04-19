import { useAppSelector } from '@hooks';
import { useUpdateProfile } from '@services/user/hooks';
import { selectUser } from '@store/user/selectors';
import { hexToRgb } from '@utils/helpers';
import { availableLocales, localesMap } from '@utils/locale';
import { useState } from 'react';
import { StylesConfig } from 'react-select';

import colors from '@theme/configs/colors';
import space from '@theme/configs/space';
import zIndices from '@theme/configs/zIndices';

import LanguageDropdown from '@components/molecules/LanguageDropdown/LanguageDropdown';

import { DropdownItemProps, DropdownProps } from '@components/atoms/Form/Dropdown';
import { fontsConfig } from '@components/atoms/Typography';

const selectStyles: StylesConfig<DropdownItemProps, false> = {
    container: (provided) => ({
        ...provided,
        border: `1px solid ${colors.grey}`,
        borderRadius: '4px',
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
            'height': '100%',
            'color': isDark ? 'var(--white)' : color,
            'minHeight': '40px',
            'opacity': isDisabled ? 0.32 : 1,
            'border': hasBorder ? `1px solid var(--grey)` : 'transparent',
            'borderRadius': space['2xs'],
            'padding': `0 ${space.xs} 0 0`,
            'display': 'flex',
            'background': colorMap.background,
            'z-index': `${zIndices.dropdown}`,
            ...fontsConfig.link,
            '@media all and (min-width: 768px)': {
                minHeight: '45px',
            },
        };
    },
    singleValue: (provided, props) => {
        const { color = 'var(--dd-input-text)' } = props.selectProps;

        return {
            ...provided,
            'top': '70%',
            'fontSize': '12px',
            'lineHeight': '15px',
            'fontWeight': 400,
            'cursor': 'pointer',
            'marginLeft': 0,
            'marginRight': 0,
            'padding': props.selectProps.selectedPadding ?? '16px 60px 0 0px',
            'color': props.selectProps.isDark ? 'var(--white)' : color,
            '@media all and (min-width: 768px)': {
                fontSize: '17px',
                lineHeight: '21px',
            },
        };
    },
    indicatorsContainer: (provided) => ({
        ...provided,
        'color': colors.greyDark,
        '& > div': {
            padding: '0',
        },
    }),
};

const UserLanguageSelect = (props: Pick<DropdownProps, 'size' | 'isDark' | 'id'>) => {
    const { mutate } = useUpdateProfile();
    const user = useAppSelector(selectUser);

    const supportedLanguages = availableLocales.map((lang) => ({
        label: localesMap[lang].name,
        value: lang,
    }));

    const [currentValue, setCurrentValue] = useState<DropdownItemProps>(
        supportedLanguages.filter((language) => language.value === user?.profile?.language).pop() ||
            supportedLanguages[0],
    );

    if (!user?.id) return null;

    const onLanguageChange = (selected: DropdownItemProps | null) => {
        if (!selected) return;

        setCurrentValue(selected);

        mutate({ language: selected.value });
    };

    const defaultValue = supportedLanguages.find(
        (language) => language.value === user?.profile.language,
    );

    return (
        <LanguageDropdown
            {...props}
            label="Language"
            transparent
            styles={selectStyles}
            selected={currentValue}
            options={supportedLanguages}
            defaultValue={defaultValue}
            onChange={onLanguageChange}
        />
    );
};

export default UserLanguageSelect;
