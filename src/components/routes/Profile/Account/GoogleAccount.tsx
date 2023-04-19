import { useTranslation } from 'next-i18next';

import Box from '@components/atoms/Box';
import Input from '@components/atoms/Form/Input';
import Typography from '@components/atoms/Typography';

const GoogleAccount = () => {
    const { t } = useTranslation();

    return (
        <Box mb={60}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10}>
                {t('Google account')}
            </Typography>
            <Input type="email" label="Google account" name="googleAccount" />
        </Box>
    );
};

export default GoogleAccount;
