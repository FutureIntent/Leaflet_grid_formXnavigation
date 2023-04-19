import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import Box from '@components/atoms/Box';
import Dropdown from '@components/atoms/Form/Dropdown';
import TextArea from '@components/atoms/Form/TextArea';

const Business = () => {
    const { t } = useTranslation();
    const [selectedBusiness, setSelectedBusiness] = useState<{
        label: string;
        value: string;
    } | null>(null);
    const options = [
        { value: 'option1', label: 'GYM' },
        { value: 'option2', label: 'Park' },
        { value: 'option3', label: 'SPA' },
    ];

    const handleBusinessSelect = (value: { label: string; value: string } | null) =>
        setSelectedBusiness(value);

    return (
        <Box mt={25} display="flex" flexDirection="column" gridGap={20}>
            <Dropdown
                onChange={handleBusinessSelect}
                options={options}
                selected={selectedBusiness}
                name="business"
                label={t('Type of business')}
            />
            <TextArea name="description" label={t('Business description')} />
        </Box>
    );
};

export default Business;
