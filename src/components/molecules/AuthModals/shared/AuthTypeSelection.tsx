import { Google } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';

import { AuthTypeMenuButton } from '@components/molecules/AuthModals';
import { AuthFormType } from '@components/molecules/AuthModals/types';
import Mail from '@components/molecules/Icons/Mail';
import Phone from '@components/molecules/Icons/Phone';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const AuthTypeSelection = ({ setFormType }: { setFormType: (type: AuthFormType) => void }) => {
    const { t } = useTranslation('auth');

    return (
        <Box p="25px 40px" maxWidth={465} width="100%">
            <Typography variant="h3" color="var(--black-brand)">
                {t('signUp.signUp')}
            </Typography>
            <AuthTypeMenuButton
                onClick={() => setFormType(AuthFormType.phone)}
                icon={<Phone />}
                text={t('signUp.withPhoneNumber')}
                mt={20}
            />
            <AuthTypeMenuButton
                icon={<Mail />}
                text={t('signUp.withEmail')}
                mt={20}
                onClick={() => setFormType(AuthFormType.email)}
            />
            <AuthTypeMenuButton
                icon={<Google />}
                text={t('signUp.continueWithGoogleAccount')}
                mt={20}
            />
        </Box>
    );
};

export default AuthTypeSelection;
