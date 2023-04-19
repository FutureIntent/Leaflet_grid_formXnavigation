import { useTranslation } from 'next-i18next';
import { ChangeEvent } from 'react';

import Box from '@components/atoms/Box';
import Input from '@components/atoms/Form/Input';

import Search from '@components/molecules/Icons/Search';

const SearchInput = ({
    handleOnChange,
}: {
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
    const { t } = useTranslation();

    return (
        <Box position="relative">
            <Input
                name="search"
                label={t('Name or Address')}
                onChange={handleOnChange}
                icon={<Search size="medium2" color="var(--grey-dark)" />}
            />
        </Box>
    );
};

export default SearchInput;
