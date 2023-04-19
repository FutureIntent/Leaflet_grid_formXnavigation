import { E164Number } from 'libphonenumber-js/core';
import dynamic from 'next/dynamic';
import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import { DropdownItemProps } from '@components/atoms/Form/Dropdown';
import Typography, { fontsConfig } from '@components/atoms/Typography';

// const ReactPhoneInput = dynamic(() => import('react-phone-number-input/react-hook-form-input'));
const CountryCodeSelect = dynamic(() => import('@components/atoms/Form/CountryCodeSelect'));

const StyledLabel = styled.label`
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: end;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
`;

const StyledLabelText = styled(Typography)`
    bottom: 0;
    height: 100%;
    left: 10px;
    position: absolute;
    transform: translateY(14px);
    transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
    width: 100%;
`;

const StyledInputElement = styled.input`
    background-color: transparent;
    ${{ ...fontsConfig.paragraph2 }};
    min-height: 40px;
    padding: 16px 60px 0 10px;

    ${mediaQueries.tablet} {
        min-height: 45px;
    }

    &:focus
        ~ ${StyledLabel}
        ${StyledLabelText},
        &:not(:placeholder-shown)
        ~ ${StyledLabel}
        ${StyledLabelText} {
        font-size: 12px;
        transform: translateY(4px);
    }
`;

const PhoneInput = (
    {
        name,
        defaultCountryCode,
        defaultValue,
        countryCode,
        onCountrySelect,
        onChange = () => {},
    }: {
        name?: string;
        defaultValue?: E164Number;
        countryCode: DropdownItemProps | null;
        onChange?: (e: any) => void;
        onCountrySelect: (val: DropdownItemProps | null) => void;
        defaultCountryCode?: string;
    },
    ref: ForwardedRef<HTMLInputElement>,
) => {
    const [value, setValue] = useState<E164Number | null>(defaultValue || null);

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <Box display="flex" border="1px solid var(--grey)" borderRadius={4}>
            <Box flex="0 0 100px">
                <CountryCodeSelect
                    value={countryCode}
                    defaultCountryCode={defaultCountryCode}
                    onChange={onCountrySelect}
                />
            </Box>
            <Box position="relative" width="100%" backgroundColor="var(--dd-bg)">
                <StyledInputElement
                    placeholder=" "
                    defaultValue={defaultValue}
                    type="tel"
                    name={name}
                    maxLength={12}
                    onChange={handleValueChange}
                />
                <StyledLabel htmlFor={name}>
                    <StyledLabelText variant="paragraph2" color="var(--grey-dark)">
                        Phone number
                    </StyledLabelText>
                </StyledLabel>
            </Box>
            <input
                hidden
                name={name}
                ref={ref}
                value={`${countryCode?.value}${value}`}
                onChange={() => {}}
            />
        </Box>
    );
};

export default forwardRef(PhoneInput);
