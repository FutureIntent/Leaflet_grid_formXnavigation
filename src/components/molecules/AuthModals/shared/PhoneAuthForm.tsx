import { isPast } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PinInput from 'react-pin-input';

import { AuthFormType } from '@components/molecules/AuthModals/types';
import CountdownTimer from '@components/molecules/CountdownTimer';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { PhoneNumberWithFlag } from '@components/atoms/Form/CountryCodeSelect/CountryCodeSelect';
import { DropdownItemProps } from '@components/atoms/Form/Dropdown';
import PhoneInput from '@components/atoms/Form/PhoneInput';
import { Spinner } from '@components/atoms/Spinner';
import Typography from '@components/atoms/Typography';

const PhoneAuthForm = ({
    onSubmit,
    resendTimeLeft,
    handleOnPinComplete,
    resendCode,
    loading,
    formType,
}: {
    onSubmit: ({ phoneNumber }: { phoneNumber: string }) => void;
    resendTimeLeft: number;
    handleOnPinComplete: (value: string) => void;
    resendCode: ({ phoneNumber }: { phoneNumber: string }) => void;
    loading?: boolean;
    formType: AuthFormType;
}) => {
    const { register, handleSubmit } = useForm();
    const [countryCode, setCountryCode] = useState<DropdownItemProps | null>(null);
    const [authPhoneNumber, setAuthPhoneNumber] = useState<string | null>(null);
    const [isResendAvailable, setIsResendAvailable] = useState(false);

    useEffect(() => {
        setIsResendAvailable(isPast(resendTimeLeft));
    }, [resendTimeLeft]);

    const prepareSubmit = ({ phoneNumber }: { phoneNumber?: string }) => {
        if (phoneNumber) {
            setAuthPhoneNumber(phoneNumber.replace(countryCode?.value || '', ''));
            onSubmit({ phoneNumber: phoneNumber || '' });
        }
    };

    const handleResendCode = () =>
        countryCode?.value &&
        resendCode({ phoneNumber: `${countryCode?.value} ${authPhoneNumber}` });

    const handleOnTimerEnd = () => setIsResendAvailable(isPast(resendTimeLeft));

    if (formType === AuthFormType.phoneConfirm) {
        return (
            <Box>
                <Typography variant="caption">
                    We’ve sent you 6-digit security code on your number via SMS.
                </Typography>
                {countryCode?.value && authPhoneNumber && (
                    <Box display="flex" mt={20}>
                        <PhoneNumberWithFlag {...countryCode} />
                        <Typography variant="paragraph2">{authPhoneNumber}</Typography>
                    </Box>
                )}
                {loading ? (
                    <Box display="flex" justifyContent="center">
                        <Box width={80} height={80}>
                            <Spinner />
                        </Box>
                    </Box>
                ) : (
                    <>
                        <PinInput
                            length={6}
                            initialValue=""
                            type="numeric"
                            inputMode="number"
                            style={{ padding: '10px 0' }}
                            inputStyle={{
                                backgroundColor: 'var(--grey-lt)',
                                border: '0',
                                width: '40px',
                                marginRight: '10px',
                            }}
                            onComplete={handleOnPinComplete}
                            autoSelect
                            focus
                        />
                        <Button
                            variant="link"
                            disabled={!isResendAvailable}
                            onClick={handleResendCode}
                        >
                            <Typography variant="caption" color="var(--blue-brand)">
                                Send new{' '}
                                {!isResendAvailable && (
                                    <>
                                        (
                                        <CountdownTimer
                                            timestamp={resendTimeLeft}
                                            onEnd={handleOnTimerEnd}
                                        />
                                        )
                                    </>
                                )}
                            </Typography>
                        </Button>
                    </>
                )}
            </Box>
        );
    }

    return (
        <form id="signIn-form" onSubmit={handleSubmit(prepareSubmit)}>
            <PhoneInput
                {...register('phoneNumber')}
                countryCode={countryCode}
                onCountrySelect={setCountryCode}
            />
        </form>
    );
};

export default PhoneAuthForm;
