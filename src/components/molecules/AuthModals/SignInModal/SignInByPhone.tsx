import { useCheckSms, useSignInByPhone } from '@services/auth/hooks';
import { useState } from 'react';

import PhoneAuthForm from '@components/molecules/AuthModals/shared/PhoneAuthForm';
import { AuthFormType } from '@components/molecules/AuthModals/types';

const SignInByPhone = ({ closeModal }: { closeModal: () => void }) => {
    const [requestId, setRequestId] = useState<string | null>(null);
    const [step, setStep] = useState<AuthFormType>(AuthFormType.phone);
    const { mutate: signInByPhone } = useSignInByPhone();
    const { mutate: checkSms } = useCheckSms();

    const onSubmit = ({ phoneNumber }: { phoneNumber: string }) => {
        signInByPhone(
            { phoneNumber },
            {
                onSuccess: (response) => {
                    setRequestId(response?.data?.requestId);
                    setStep(AuthFormType.phoneConfirm);
                },
            },
        );
    };

    const handleOnPinComplete = (value: string) => {
        if (!requestId) return;

        checkSms(
            { verificationId: requestId, smsCode: value },
            {
                onSuccess: () => {
                    closeModal();
                },
            },
        );
    };

    // const resendCode = ({ phoneNumber }: { phoneNumber: string }) => {
    //     initSignInByPhone({
    //         variables: { phone: phoneNumber },
    //     });
    // };

    return (
        <PhoneAuthForm
            onSubmit={onSubmit}
            resendTimeLeft={10}
            handleOnPinComplete={handleOnPinComplete}
            resendCode={() => {}}
            loading={false}
            formType={step}
        />
    );
};
export default SignInByPhone;
