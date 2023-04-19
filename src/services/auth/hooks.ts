import { useAppDispatch } from '@hooks';
import {
    checkSms,
    ICheckSmsProps,
    ISignInWithPhoneProps,
    ISignInWithPhoneResponse,
    refreshToken,
    signInWithPhone,
    signOut,
    signUpEmail,
    singInEmail,
} from '@services/auth/requests';
import { IAuthEmailCredentialsProps, IAuthEmailResponse } from '@services/auth/types';
import { setToken } from '@services/axios';
import { getUser } from '@services/user/requests';
import { setUser } from '@store/user/slice';
import { TOKEN_LIFETIME } from '@utils/jwtTokenHelpers';
import { AxiosError } from 'axios';
import {
    useMutation,
    useQueryClient,
    UseMutationResult,
    UseQueryResult,
    useQuery,
} from 'react-query';

export const useSignUpEmail = (): UseMutationResult<
    IAuthEmailResponse,
    string[],
    IAuthEmailCredentialsProps
> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<IAuthEmailResponse, string[], IAuthEmailCredentialsProps>(signUpEmail, {
        onSuccess: async (response) => {
            queryClient.setQueryData('user', response.data);
            dispatch(setUser(response.data));
        },
    });
};

export const useSignInEmail = (): UseMutationResult<
    IAuthEmailResponse,
    string[],
    IAuthEmailCredentialsProps
> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<IAuthEmailResponse, string[], IAuthEmailCredentialsProps>(singInEmail, {
        onSuccess: async (response) => {
            await setToken(response.data.token);
            const userData = await getUser();

            queryClient.setQueryData('user', userData);
            dispatch(setUser(userData));
        },
    });
};

export const useSignOut = () => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation(signOut, {
        onSuccess: async () => {
            setToken(null);
            queryClient.setQueryData('user', null);
            dispatch(setUser(null));

            window.localStorage.setItem('logout', Date.now().toString());
        },
    });
};

export const useRefreshToken = (): UseQueryResult<boolean, AxiosError> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useQuery(
        'refreshToken',
        async () => {
            const tokenData = await refreshToken();

            if (tokenData.data.token) {
                setToken(tokenData.data.token);
                const userData = await getUser();

                queryClient.setQueryData('user', userData);
                dispatch(setUser(userData));

                return true;
            }

            queryClient.setQueryData('user', null);
            dispatch(setUser(null));

            return false;
        },
        {
            refetchInterval: TOKEN_LIFETIME,
            staleTime: TOKEN_LIFETIME,
            retry: false,
            enabled: false,
        },
    );
};

export const useSignInByPhone = (): UseMutationResult<
    ISignInWithPhoneResponse,
    string[],
    ISignInWithPhoneProps
> =>
    useMutation<ISignInWithPhoneResponse, string[], ISignInWithPhoneProps>(signInWithPhone, {
        onSuccess: async (response) => {
            try {
                return response;
            } catch (error) {
                // eslint-disable-next-line no-console
                return console.error('Something went wrong: ', error);
            }
        },
    });

export const useCheckSms = (): UseMutationResult<IAuthEmailResponse, string[], ICheckSmsProps> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<IAuthEmailResponse, string[], ICheckSmsProps>(checkSms, {
        onSuccess: async (response) => {
            await setToken(response.data.token);
            const userData = await getUser();

            queryClient.setQueryData('user', userData);
            dispatch(setUser(userData));
        },
    });
};
