import { Google } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { SpaceProps } from 'styled-system';

import { AuthFormType } from '@components/molecules/AuthModals/types';
import Mail from '@components/molecules/Icons/Mail';
import Phone from '@components/molecules/Icons/Phone';

import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import Typography from '@components/atoms/Typography';

export const ByEmailBtn = () => {
    const { t } = useTranslation('auth');

    return (
        <>
            <Mail />
            <Typography variant="accent" color="var(--blue-brand)" ml="3px">
                {t('signIn.useMailInstead')}
            </Typography>
        </>
    );
};

export const ByPhoneBtn = () => {
    const { t } = useTranslation('auth');

    return (
        <>
            <Phone />
            <Typography variant="accent" color="var(--blue-brand)" ml="3px">
                {t('signIn.usePhoneInstead')}
            </Typography>
        </>
    );
};

export const ContinueButton = () => {
    const { t } = useTranslation('auth');

    return (
        <Button variant="primary" size={SizePropsType.fullWidth} type="submit" form="signIn-form">
            <Typography variant="accent" color="var(--white)">
                {t('signIn.continue')}
            </Typography>
        </Button>
    );
};

export const ContinueWithGoogleButton = () => {
    const { t } = useTranslation('auth');

    return (
        <Button variant="secondary" disabled size={SizePropsType.fullWidth} mt="25px">
            <Google />
            <Typography variant="accent" color="var(--blue-brand)" ml="10px">
                {t('signIn.continueWithGoogle')}
            </Typography>
        </Button>
    );
};

export const AuthTypeChangeButton = ({
    formType,
    setFormType,
}: {
    formType: AuthFormType;
    setFormType: (type: AuthFormType) => void;
}) => {
    const handleClick = () =>
        setFormType(formType === AuthFormType.email ? AuthFormType.phone : AuthFormType.email);

    return (
        <Button variant="link" type="button" withIcon onClick={handleClick} mb="28px">
            {formType === AuthFormType.email ? <ByPhoneBtn /> : <ByEmailBtn />}
        </Button>
    );
};

const AuthTypeMenuButtonBase = styled(Button).attrs(() => ({
    variant: 'secondary',
    withIcon: true,
    size: 'fullWidth',
}))`
    justify-content: flex-start;
    padding-left: 15px;
    margin-bottom: 10px;
`;

export const AuthTypeMenuButton = ({
    onClick,
    icon,
    text,
    ...rest
}: { onClick?: () => void; icon: ReactNode; text: string } & SpaceProps) => (
    <AuthTypeMenuButtonBase onClick={onClick} {...rest}>
        {icon}
        <Typography variant="accent" color="var(--blue-brand)" ml={10}>
            {text}
        </Typography>
    </AuthTypeMenuButtonBase>
);
