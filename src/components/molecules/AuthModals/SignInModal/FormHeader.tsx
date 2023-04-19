import { useTranslation } from 'next-i18next';

import { AuthFormType } from '@components/molecules/AuthModals/types';

import Typography from '@components/atoms/Typography';

const FormHeader = ({ authFormType }: { authFormType?: AuthFormType }) => {
    const { t } = useTranslation('auth');
    const isConfirmForm = authFormType === AuthFormType.phoneConfirm;

    let modalTitle = '';

    if (isConfirmForm) {
        modalTitle = t('form.enterSmsCode');
    } else {
        modalTitle = t('signIn.signInRequired');
    }

    return (
        <Typography variant="h3" color="var(--black-brand)" mb={isConfirmForm ? '9px' : '31px'}>
            {modalTitle}
        </Typography>
    );
};

export default FormHeader;
