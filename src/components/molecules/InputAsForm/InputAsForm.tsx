import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateProfile } from '@services/user/hooks';
import { useForm } from 'react-hook-form';
import { ObjectSchema } from 'yup';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Input from '@components/atoms/Form/Input/Input';
import InputActions from '@components/atoms/Form/InputActions';

const InputAsForm = ({
    name,
    value,
    label,
    validationSchema,
    ...rest
}: {
    name: string;
    label: string;
    value?: string;
    type?: 'number' | 'text' | 'email' | 'tel' | 'password';
    validationSchema?: ObjectSchema<any, any>;
}) => {
    const { mutate } = useUpdateProfile();
    const { register, handleSubmit, reset, formState } = useForm({
        resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    });

    const onSubmit = (val: any) => {
        mutate(val, { onSuccess: () => reset() });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box backgroundColor={!formState.dirtyFields[name] ? colors.greyLt : 'transparent'}>
                <Input
                    label={label}
                    {...register(name)}
                    defaultValue={value}
                    {...rest}
                    icon={
                        formState.dirtyFields[name] && (
                            <InputActions
                                disabled={!!formState.errors.phoneNumber}
                                onCancel={() => reset()}
                            />
                        )
                    }
                />
            </Box>
        </form>
    );
};

export default InputAsForm;
