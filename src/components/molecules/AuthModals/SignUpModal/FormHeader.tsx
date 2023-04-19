import { useTranslation } from 'next-i18next';

import { AuthFormType } from '@components/molecules/AuthModals/types';

import Typography from '@components/atoms/Typography';

const FormHeader = ({ authFormType }: { authFormType?: AuthFormType }) => {
    const { t } = useTranslation('auth');
    const isConfirmForm = authFormType === AuthFormType.phoneConfirm;

    let modalTitle = '';

    switch (true) {
        case authFormType === AuthFormType.phone:
            modalTitle = t('signUp.signUpWithPhone');
            break;
        case authFormType === AuthFormType.phoneConfirm:
            modalTitle = t('form.enterSmsCode');
            break;
        case authFormType === AuthFormType.email:
            modalTitle = t('signUp.signUpWithEmail');
            break;
        default:
            modalTitle = t('signUp.signUp');
            break;
    }

    return (
        <Typography variant="h3" color="var(--black-brand)" mb={isConfirmForm ? '9px' : '31px'}>
            {modalTitle}
        </Typography>
    );
};

export default FormHeader;
