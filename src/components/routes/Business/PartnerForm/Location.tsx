import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
import countryList from 'react-select-country-list';

import Box from '@components/atoms/Box';
import Dropdown, { DropdownItemProps } from '@components/atoms/Form/Dropdown';
import Input from '@components/atoms/Form/Input/Input';

const Location = () => {
    const { t } = useTranslation();
    const [country, setCountry] = useState<DropdownItemProps | null>(null);
    const options = useMemo(() => countryList().getData(), []) as DropdownItemProps[];

    const handleCountrySelect = (selected: DropdownItemProps | null) => {
        if (!selected) return;

        setCountry(selected);
    };

    return (
        <Box
            mt={25}
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minMax(255px, 1fr))"
            gridGap={20}
        >
            <Dropdown
                onChange={handleCountrySelect}
                options={options}
                selected={country}
                name="country"
                label={t('Country')}
            />
            <Input name="state" label={t('State (optional)')} />
            <Input name="city" label={t('City')} />
            <Input name="zip" label={t('ZIP Code')} />
            <Input name="street" label={t('Street')} />
            <Input name="apartment" label={t('Number / apartment')} />
        </Box>
    );
};

export default Location;
