import { useAppSelector } from '@hooks';
import { useUpdateProfile } from '@services/user/hooks';
import { selectUser } from '@store/user/selectors';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import { DropdownItemProps } from '@components/atoms/Form/Dropdown';
import InputActions from '@components/atoms/Form/InputActions';
import PhoneInput from '@components/atoms/Form/PhoneInput/PhoneInput';
import Typography from '@components/atoms/Typography';

const PhoneNumber = () => {
    const { t } = useTranslation();
    const user = useAppSelector(selectUser);
    const [countryCode, setCountryCode] = useState<DropdownItemProps | null>(null);

    const { mutate } = useUpdateProfile();
    const { register, handleSubmit, reset, formState } = useForm();

    const onSubmit = (val: any) => {
        // eslint-disable-next-line no-console
        console.log({ val });
        mutate({}, { onSuccess: () => reset() });
    };

    return (
        <Box mb={30}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10}>
                {t('Phone number')}
            </Typography>
            <Box display="flex" gridGap={10} flexDirection={{ _: 'column', tablet: 'row' }}>
                <Box backgroundColor={colors.greyLt} flex={1}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box position="relative" width="100%">
                            <PhoneInput
                                {...register('phoneNumber')}
                                defaultCountryCode={user?.phone?.countryCode}
                                defaultValue={user?.phone.number}
                                countryCode={countryCode}
                                onCountrySelect={setCountryCode}
                            />

                            {formState.dirtyFields.phoneNumber && (
                                <InputActions
                                    disabled={!!formState.errors.phoneNumber}
                                    onCancel={() => reset()}
                                />
                            )}
                        </Box>
                    </form>
                </Box>
                {user && !user?.phone.confirmed && (
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

export default PhoneNumber;
