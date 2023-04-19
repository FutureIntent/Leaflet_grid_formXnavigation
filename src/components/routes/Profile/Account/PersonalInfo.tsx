import { BirthdayPicker } from '@components/routes/Profile/Account/BirthdayPicker';
import { useAppSelector } from '@hooks';
import { useUpdateProfile } from '@services/user/hooks';
import { selectUser } from '@store/user/selectors';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';

import theme from '@theme/configs';

import { InputAsForm } from '@components/molecules/InputAsForm';
import { UserLanguageSelect } from '@components/molecules/LanguageDropdown';
import { UploadPhoto } from '@components/molecules/UploadPhoto';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';
import { FONT_BOLD } from '@components/atoms/Typography/Typography';

const nameSchema = yup.object({
    name: yup.string().required(),
});

const PersonalInfo = () => {
    const { t } = useTranslation();
    const user = useAppSelector(selectUser);
    const { mutate } = useUpdateProfile();

    const handleOnChange = (val: any) => {
        mutate(val);
    };

    return (
        <Box mb={20}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10} fontWeight={FONT_BOLD}>
                {t('Personal info')}
            </Typography>
            <Box display="flex" gridGap={30} flexDirection={{ _: 'column', tablet: 'row' }}>
                <Box
                    aspectRatio={1}
                    maxWidth={{ _: 190, tablet: 120 }}
                    width="100%"
                    position="relative"
                    borderRadius={theme.space['2xs']}
                    overflow="hidden"
                >
                    <UploadPhoto />
                </Box>

                <Box
                    display="grid"
                    gridTemplateColumns={{ _: '1fr', tablet: '1fr 1fr' }}
                    width="100%"
                    gridGap="1rem"
                >
                    <InputAsForm
                        name="name"
                        label="Name"
                        value={user?.profile?.name}
                        validationSchema={nameSchema}
                    />
                    <InputAsForm
                        name="surname"
                        label="Surname"
                        value={user?.profile?.surname}
                        validationSchema={nameSchema}
                    />

                    <div>
                        <BirthdayPicker onChange={handleOnChange} />
                    </div>

                    <div>
                        <UserLanguageSelect />
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default PersonalInfo;
