import { useAppSelector } from '@hooks';
import { selectUser } from '@store/user/selectors';
import { EmailSchema } from '@utils/validationSchemas';
import { useTranslation } from 'next-i18next';

import { InputAsForm } from '@components/molecules/InputAsForm';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import Typography from '@components/atoms/Typography';

const Email = () => {
    const { t } = useTranslation();
    const user = useAppSelector(selectUser);

    return (
        <Box mb={30}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10}>
                {t('Email')}
            </Typography>
            <Box display="flex" gridGap={10} flexDirection={{ _: 'column', tablet: 'row' }}>
                <Box flex={1}>
                    <InputAsForm
                        name="email"
                        label="Email"
                        value={user?.email.email}
                        type="email"
                        validationSchema={EmailSchema}
                    />
                </Box>
                {user && !user?.email.confirmed && (
                    <Button variant="secondary" size={SizePropsType.xs} p="0.75rem 1.75rem">
                        <Typography variant="accent" color="blueBrand">
                            Confirm
                        </Typography>
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default Email;
