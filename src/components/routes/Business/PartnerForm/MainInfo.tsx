import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Box from '@components/atoms/Box';
import { DropdownItemProps } from '@components/atoms/Form/Dropdown';
import Input from '@components/atoms/Form/Input/Input';
import PhoneInput from '@components/atoms/Form/PhoneInput/PhoneInput';

import { BusinessType } from '../../../../types/Business';

const MainInfo = ({ businessType }: { businessType: BusinessType }) => {
    const { t } = useTranslation();
    const { register } = useForm();
    const [countryCode, setCountryCode] = useState<DropdownItemProps | null>(null);

    return (
        <Box
            mt={25}
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minMax(255px, 1fr))"
            gridGap={20}
        >
            <Input name="companyName" label={t('Company name')} />
            {businessType === BusinessType.individual && (
                <Input name="surname" label={t('Surname')} />
            )}
            {businessType === BusinessType.company && (
                <>
                    <Input name="businessOwner" label={t('Business owner')} />
                    <Input name="registrationNumber" label={t('Registration number')} />
                    <Input name="vatNumber" label={t('VAT Number')} />
                </>
            )}
            <PhoneInput
                {...register('phoneNumber')}
                countryCode={countryCode}
                onCountrySelect={setCountryCode}
            />
            <Input type="email" name="email" label={t('E-mail')} />
        </Box>
    );
};

export default MainInfo;
