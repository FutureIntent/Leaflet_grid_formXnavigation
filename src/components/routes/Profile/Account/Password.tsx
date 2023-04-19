import { useTranslation } from 'next-i18next';

import { InputAsForm } from '@components/molecules/InputAsForm';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const Password = () => {
    const { t } = useTranslation();

    return (
        <Box mb={30}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10}>
                {t('Password')}
            </Typography>
            <InputAsForm name="password" label="Password" type="password" />
        </Box>
    );
};

export default Password;
