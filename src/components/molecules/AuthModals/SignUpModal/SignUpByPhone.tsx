import PhoneAuthForm from '@components/molecules/AuthModals/shared/PhoneAuthForm';
import { AuthFormType } from '@components/molecules/AuthModals/types';

const SignUpByPhone = ({ closeModal }: { closeModal: () => void }) => (
    // const { userSignUpByPhone, initPhoneVerification, verifyPhone, initData, verifyPhoneMeta } =
    //     useSignUpByPhone();
    // const resendTimeLeft = initData?.data?.initSignInWithPhone?.resendAvailable;
    // const requestId = initData?.data?.initSignInWithPhone?.requestId;
    // const loading = initData?.loading || verifyPhoneMeta?.loading;
    //
    // const onSubmit = ({ phoneNumber }: { phoneNumber: string }) => {
    //     userSignUpByPhone({ variables: { phoneNumber, password: 'qwerty123' } }).finally(() => {
    //         initPhoneVerification();
    //         authFormTypeVar(AuthFormType.phoneConfirm);
    //     });
    // };
    //
    // const handleOnPinComplete = (value: string) => {
    //     verifyPhone({
    //         variables: {
    //             requestId,
    //             code: value,
    //         },
    //     }).finally(() => closeModal());
    // };
    //
    // const resendCode = () => {
    //     initPhoneVerification();
    // };

    <PhoneAuthForm
        onSubmit={closeModal}
        resendTimeLeft={10}
        handleOnPinComplete={() => {}}
        resendCode={() => {}}
        loading={false}
        formType={AuthFormType.phone}
    />
);
export default SignUpByPhone;
