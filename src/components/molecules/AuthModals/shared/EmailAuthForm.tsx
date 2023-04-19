import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import PasswordEye from '@components/molecules/Icons/general/PasswordEye';
import PasswordEyeOff from '@components/molecules/Icons/general/PasswordEyeOff';

import Box from '@components/atoms/Box';
import Input from '@components/atoms/Form/Input/Input';
import { Spinner } from '@components/atoms/Spinner';

const PasswordStrength = dynamic(() => import('@components/atoms/Form/PasswordStrength'));

const InputWrapper = styled.div`
    margin: 0 -10px;

    input {
        color: var(--black-brand);

        &::placeholder {
            color: var(--grey-dark);
        }
    }

    > div:first-of-type {
        margin-bottom: 15px;
    }
`;

const PasswordIcon = ({ show, onClick }: { show: boolean; onClick: () => void }) => (
    <Box onClick={onClick} cursor="pointer">
        {!show ? (
            <PasswordEye color="#ACACCC" size="medium" />
        ) : (
            <PasswordEyeOff color="#ACACCC" size="medium" />
        )}
    </Box>
);

const EmailAuthForm = ({
    loading,
    onSubmit,
}: {
    loading: boolean;
    onSubmit: ({ email, password }: { email: string; password: string }) => void;
}) => {
    const { t } = useTranslation('auth');
    const [showPassword, setShowPassword] = useState(false);

    const emailValidationSchema = yup
        .object({
            email: yup.string().email(t('form.errors.email')).required(),
            password: yup
                .string()
                .min(8, t('form.errors.passwordShort'))
                .max(32, t('form.errors.passwordLong'))
                .required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: yupResolver(emailValidationSchema) });

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <form id="signIn-form" onSubmit={handleSubmit(onSubmit)}>
            {loading ? (
                <Box display="flex" justifyContent="center">
                    <Box width={80} height={80}>
                        <Spinner />
                    </Box>
                </Box>
            ) : (
                <InputWrapper>
                    <>
                        <Input {...register('email')} type="email" label={t('form.email')} />
                        {errors?.email?.message}
                        <Input
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            label={t('form.password')}
                            icon={<PasswordIcon show={showPassword} onClick={handleShowPassword} />}
                        />
                        <PasswordStrength
                            value={watch('password')}
                            errorMsg={errors?.password?.message as FieldError['message']}
                        />
                    </>
                </InputWrapper>
            )}
        </form>
    );
};

export default EmailAuthForm;
