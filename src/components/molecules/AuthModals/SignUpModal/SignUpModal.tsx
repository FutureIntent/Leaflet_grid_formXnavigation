import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { useModal } from '@hooks/useModal';

import {
    AuthTypeChangeButton,
    ContinueButton,
    ContinueWithGoogleButton,
    Form,
} from '@components/molecules/AuthModals';
import FormHeader from '@components/molecules/AuthModals/SignUpModal/FormHeader';
import AuthTypeSelection from '@components/molecules/AuthModals/shared/AuthTypeSelection';
import LeftSideBlock from '@components/molecules/AuthModals/shared/LeftSideBlock';
import { AuthFormType, AuthModalData } from '@components/molecules/AuthModals/types';
import Modal from '@components/molecules/Modal/Modal';

import Box from '@components/atoms/Box';
import Hr from '@components/atoms/Hr';

const ARIA_TITLE = 'sign-up-modal-title';
const ARIA_DESCRIPTION = 'sign-up-modal-description';

const SignUp = () => {
    const { t } = useTranslation('auth');
    const [formType, setFormType] = useState<AuthFormType>(AuthFormType.email);
    const { closeModal } = useModal<AuthModalData>('signUp');
    const { openModal: openSignInModal, data } = useModal<AuthModalData>('signIn');

    const handleOnClose = () => {
        closeModal();
    };

    return (
        <Modal
            name="signUp"
            onClose={handleOnClose}
            ariaTitle={ARIA_TITLE}
            ariaDescription={ARIA_DESCRIPTION}
        >
            <Box display="flex" minHeight={600}>
                <LeftSideBlock
                    ariaTitle={ARIA_TITLE}
                    handleOpenModal={openSignInModal}
                    title={t('form.alreadyHaveAccount')}
                    btnText={t('signIn.signIn')}
                />

                {data?.formType !== null ? (
                    <Box
                        p="25px 40px 65px"
                        maxWidth={465}
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <div>
                            <FormHeader authFormType={data?.formType} />

                            <Form formType={formType} isRegistration closeModal={handleOnClose} />
                        </div>

                        {data?.formType !== AuthFormType.phoneConfirm && (
                            <div>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    flexDirection="column"
                                    mb="50px"
                                >
                                    <AuthTypeChangeButton
                                        formType={formType}
                                        setFormType={setFormType}
                                    />
                                    <ContinueButton />
                                </Box>

                                <Hr text={t('signIn.or')} />

                                <ContinueWithGoogleButton />
                            </div>
                        )}
                    </Box>
                ) : (
                    <AuthTypeSelection setFormType={setFormType} />
                )}
            </Box>
        </Modal>
    );
};

export default SignUp;
