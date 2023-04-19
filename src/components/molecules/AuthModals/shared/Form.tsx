import SignInByPhone from '@components/molecules/AuthModals/SignInModal/SignInByPhone';
import SignInEmail from '@components/molecules/AuthModals/SignInModal/SignInEmail';
import SignUpEmail from '@components/molecules/AuthModals/SignUpModal/SignUpEmail';
import { AuthFormType } from '@components/molecules/AuthModals/types';

import Fade from '@components/atoms/Animation';

export const Form = ({
    isRegistration = false,
    closeModal,
    formType,
}: {
    isRegistration?: boolean;
    closeModal: () => void;
    formType: AuthFormType;
}) => {
    const isPhoneTypeForm =
        formType === AuthFormType.phone || formType === AuthFormType.phoneConfirm;

    if (isRegistration) {
        return (
            <>
                <Fade show={isPhoneTypeForm}>
                    <div>{isPhoneTypeForm && <SignInByPhone closeModal={closeModal} />}</div>
                </Fade>
                <Fade show={formType === AuthFormType.email}>
                    <div>
                        {formType === AuthFormType.email && <SignUpEmail closeModal={closeModal} />}
                    </div>
                </Fade>
            </>
        );
    }

    return (
        <>
            <Fade show={isPhoneTypeForm}>
                <div>{isPhoneTypeForm && <SignInByPhone closeModal={closeModal} />}</div>
            </Fade>
            <Fade show={formType === AuthFormType.email}>
                <div>
                    {formType === AuthFormType.email && <SignInEmail closeModal={closeModal} />}
                </div>
            </Fade>
        </>
    );
};
