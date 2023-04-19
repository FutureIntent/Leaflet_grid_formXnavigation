import { useSignInEmail } from '@services/auth/hooks';

import EmailAuthForm from '@components/molecules/AuthModals/shared/EmailAuthForm';

const SignInEmail = ({ closeModal }: { closeModal: () => void }) => {
    const { mutate, isLoading } = useSignInEmail();

    const onSubmit = ({ email, password }: { email: string; password: string }) =>
        mutate(
            { email, password },
            {
                onSuccess: () => {
                    closeModal();
                },
            },
        );

    return <EmailAuthForm loading={isLoading} onSubmit={onSubmit} />;
};

export default SignInEmail;
