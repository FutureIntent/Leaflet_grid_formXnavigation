import { useTranslation } from 'next-i18next';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import Typography from '@components/atoms/Typography';

const DeleteAccount = () => {
    const { t } = useTranslation();

    return (
        <Box mb={60}>
            <div>
                <Button variant="night" size={SizePropsType.xs}>
                    <Typography variant="accent" color="var(--grey-dark)">
                        {t('Delete account')}
                    </Typography>
                </Button>
            </div>
        </Box>
    );
};

export default DeleteAccount;
