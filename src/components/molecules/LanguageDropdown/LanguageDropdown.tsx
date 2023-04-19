import { ReactElement } from 'react';
import { OptionProps, SingleValueProps, components } from 'react-select';
import styled from 'styled-components';

import ArrowDown from '@components/molecules/Icons/ArrowDown';

import CountryFlag from '@components/atoms/CountryFlag';
import Dropdown, { DropdownItemProps, DropdownProps } from '@components/atoms/Form/Dropdown';

const FlagContainer = styled.div`
    align-items: center;
    display: flex;
`;

const FlagField = (data: DropdownItemProps): ReactElement | null => {
    const { value: locale, label } = data;

    return (
        <FlagContainer>
            {label}
            <CountryFlag locale={locale} ml="xs" />
        </FlagContainer>
    );
};

const SingleValueWithIcon = (props: SingleValueProps<DropdownItemProps>): ReactElement | null => {
    const { data } = props;
    return (
        <components.SingleValue {...props}>
            <FlagField {...data} />
        </components.SingleValue>
    );
};

const OptionWithIcon = (props: OptionProps<DropdownItemProps, false>): ReactElement => {
    const { data } = props;
    return (
        <components.Option {...props}>
            <FlagField {...data} />
        </components.Option>
    );
};

const ArrowIcon = (): ReactElement => <ArrowDown size="micro" color="inherit" />;

const LanguageDropdown = ({
    options,
    defaultValue,
    selected,
    onChange,
    ...rest
}: DropdownProps): ReactElement => {
    const { id } = rest;

    return (
        <Dropdown
            {...rest}
            hasBorder={false}
            isSearchable={false}
            selectedPadding="0"
            inputId={`languageDropDown-${id}`}
            size="small"
            color="var(--black-brand)"
            options={options}
            defaultValue={defaultValue}
            selected={selected}
            onChange={onChange}
            components={{
                Option: OptionWithIcon,
                SingleValue: SingleValueWithIcon,
                DropdownIndicator: ArrowIcon,
            }}
        />
    );
};

export default LanguageDropdown;
