import { useSignInEmail, useSignUpEmail } from '@services/auth/hooks';

import EmailAuthForm from '@components/molecules/AuthModals/shared/EmailAuthForm';

const SignUpEmail = ({ closeModal }: { closeModal: () => void }) => {
    const { mutate: signUp } = useSignUpEmail();
    const { mutate: signIn } = useSignInEmail();

    const onSubmit = ({ email, password }: { email: string; password: string }) => {
        signUp(
            { email, password },
            {
                onSuccess: async () => {
                    await signIn(
                        { email, password },
                        {
                            onSuccess: () => {
                                closeModal();
                            },
                        },
                    );
                },
            },
        );
    };

    return <EmailAuthForm loading={false} onSubmit={onSubmit} />;
};

export default SignUpEmail;
