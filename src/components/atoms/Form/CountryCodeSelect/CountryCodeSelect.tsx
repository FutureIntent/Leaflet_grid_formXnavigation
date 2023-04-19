// eslint-disable-next-line import/no-extraneous-dependencies
import { hexToRgb } from '@utils/helpers';
import { CountryCode } from 'libphonenumber-js/core';
import { useTranslation } from 'next-i18next';
import { ReactElement, useMemo } from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import {
    components,
    OptionProps,
    MenuListComponentProps,
    StylesConfig,
    SingleValueProps,
} from 'react-select';
import { FixedSizeList } from 'react-window';
import styled from 'styled-components';
import { space } from 'styled-system';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';
import appSpaces from '@theme/configs/space';
import zIndices from '@theme/configs/zIndices';

import ArrowDown from '@components/molecules/Icons/ArrowDown';

import Box from '@components/atoms/Box';
import FlagIcon from '@components/atoms/CountryFlag/FlagIcon';
import Dropdown, { DropdownItemProps } from '@components/atoms/Form/Dropdown';
import Typography, { fontsConfig } from '@components/atoms/Typography';

const FlagWrapper = styled.div`
    display: flex;
    height: 11px;
    line-height: 1;
    margin-right: 6px;
    ${space};

    ${mediaQueries.tablet} {
        height: 15px;
    }

    svg {
        height: 100%;
        width: 100%;
    }
`;

const ArrowIcon = (): ReactElement => <ArrowDown size="micro" color="inherit" />;

export const PhoneNumberWithFlag = ({ value, label }: DropdownItemProps) => (
    <Box display="flex" alignItems="center" p="0 5px">
        <FlagWrapper>
            <FlagIcon countryCode={label} />
        </FlagWrapper>
        <Typography variant="paragraph2" color="var(--brand-black)">
            {`${value}`}
        </Typography>
    </Box>
);

interface CountryCodeSelectProps {
    value: DropdownItemProps | null;
    onChange: (value: DropdownItemProps | null) => void;
    defaultCountryCode?: string;
}

const SelectedOption = (props: SingleValueProps<DropdownItemProps>) => {
    const {
        data: { label },
    } = props;
    if (!label) return null;

    return (
        <components.SingleValue {...props}>
            <Box display="flex" alignItems="center">
                <FlagWrapper>
                    <FlagIcon countryCode={label} />
                </FlagWrapper>
                <Typography
                    variant="paragraph2"
                    color="var(--brand-black)"
                    display="inline-block"
                >{`+${getCountryCallingCode(label as CountryCode)}`}</Typography>
            </Box>
        </components.SingleValue>
    );
};

const Option = (props: OptionProps<DropdownItemProps, false>) => {
    const {
        data: { label, value },
    } = props;

    return (
        <components.Option {...props}>
            <PhoneNumberWithFlag label={label} value={value} />
        </components.Option>
    );
};

const MenuList = (props: MenuListComponentProps<DropdownItemProps, false>) => {
    const { options, children, getValue } = props;
    const height = 32;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;

    return (
        <components.MenuList {...props}>
            <FixedSizeList
                itemData={{ options }}
                height={400}
                width="auto"
                itemSize={height}
                itemCount={options.length}
                overscanCount={5}
                initialScrollOffset={initialOffset}
            >
                {({ index, style }) => (
                    <div style={style}>
                        {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            children[index]
                        }
                    </div>
                )}
            </FixedSizeList>
        </components.MenuList>
    );
};

const customStyles: StylesConfig<DropdownItemProps, false> = {
    option: (_, state) => {
        const { isSelected, selectProps } = state;
        const color = selectProps.color ?? colors.ddInputText;
        const backgroundColor = 'var(--dd-bg)';

        return {
            ...fontsConfig.link,
            'borderRadius': appSpaces['2xs'],
            'background': isSelected ? backgroundColor : 'transparent',
            'color': color,
            'cursor': 'pointer',
            'zIndex': `${zIndices.dropdown}`,
            'padding': `5px 0`,
            ':hover': {
                background: `rgba(${hexToRgb(color)}, 0.5)`,
            },
        };
    },
    input: (provided) => ({
        ...provided,
        ...fontsConfig.paragraph2,
        'padding': '16px 50px 0 0px',
        'color': 'var(--dd-input-text)',
        '@media all and (min-width: 768px)': {
            padding: '16px 60px 0 0px',
        },
    }),
    singleValue: (provided, props) => {
        const { color = 'var(--dd-input-text)' } = props.selectProps;

        return {
            ...provided,
            'display': 'flex',
            'alignItems': 'center',
            'fontSize': '12px',
            'lineHeight': '15px',
            'fontWeight': 400,
            'cursor': 'pointer',
            'padding': '15px 0 0',
            'color': props.selectProps.isDark ? 'var(--white)' : color,
            '@media all and (min-width: 768px)': {
                fontSize: '17px',
                lineHeight: '21px',
            },
        };
    },
    control: (_, state) => {
        const { color = colors.ddInputText, isDisabled, isDark = false } = state.selectProps;
        const colorMap = {
            border: `rgba(${hexToRgb(colors.blueBrand)}, 0.5)`,
            hoverBorder: `rgba(${hexToRgb(color)}, 0.5)`,
            background: isDark ? 'transparent' : 'var(--dd-bg)',
        };

        return {
            'color': isDark ? 'var(--white)' : color,
            'minHeight': '40px',
            'height': '100%',
            'opacity': isDisabled ? 0.32 : 1,
            'borderRight': `1px solid var(--grey)`,
            'borderRadius': appSpaces['2xs'],
            'padding': `0 ${appSpaces.xs} 0 0`,
            'display': 'flex',
            'background': colorMap.background,
            'zIndex': `${zIndices.dropdown}`,
            ...fontsConfig.link,
            '@media all and (min-width: 768px)': {
                minHeight: '45px',
            },
        };
    },
};

const CountryCodeSelect = ({
    value,
    onChange,
    defaultCountryCode,
    ...rest
}: CountryCodeSelectProps) => {
    const { t } = useTranslation('auth');
    const options = useMemo(
        () =>
            getCountries().map((country) => ({
                label: country,
                value: `+${getCountryCallingCode(country)}`,
            })),
        [],
    );

    const defValue = options.find((val) => val.value === `+${defaultCountryCode}`);

    return (
        <Dropdown
            label={t('Country')}
            selected={value}
            defaultValue={defValue}
            onChange={onChange}
            options={options}
            isSearchable
            selectedPadding="10px 0 0"
            styles={customStyles}
            {...rest}
            components={{
                Option,
                MenuList,
                SingleValue: SelectedOption,
                DropdownIndicator: ArrowIcon,
            }}
        />
    );
};

export default CountryCodeSelect;
