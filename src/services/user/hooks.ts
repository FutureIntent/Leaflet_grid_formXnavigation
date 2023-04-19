import {
    setUser,
    updateAvatar,
    deleteAvatar,
    updateUserProfile,
    deleteLocation,
    updateUserLocations,
} from '@store/user/slice';
import {
    useQuery,
    UseQueryResult,
    UseQueryOptions,
    UseMutationResult,
    useQueryClient,
    useMutation,
} from 'react-query';
import { useAppDispatch } from 'src/hooks';

import {
    getUser,
    ILocation,
    ILocationResponse,
    IProfile,
    ISetAvatarResponse,
    IUpdateUserResponse,
    IUser,
    removeAvatar,
    removeLocation,
    setAvatar,
    updateLocation,
    updateProfile,
} from './requests';

export const useUser = (options?: UseQueryOptions<IUser, Error>): UseQueryResult<IUser, Error> => {
    const dispatch = useAppDispatch();

    return useQuery<IUser, Error>('user', getUser, {
        ...options,
        staleTime: Infinity,
        onSuccess: (data) => dispatch(setUser(data)),
    });
};

export const useSetAvatar = (): UseMutationResult<ISetAvatarResponse, string[], FormData> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<ISetAvatarResponse, string[], FormData>(setAvatar, {
        onSuccess: async (response) => {
            await queryClient.invalidateQueries('user');
            dispatch(updateAvatar(response.data));
        },
    });
};

export const useUpdateProfile = (): UseMutationResult<
    IUpdateUserResponse,
    string[],
    Partial<IProfile>
> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<IUpdateUserResponse, string[], Partial<IProfile>>(updateProfile, {
        onSuccess: async (response) => {
            await queryClient.invalidateQueries('user');

            dispatch(updateUserProfile(response.data));
        },
    });
};

export const useRemoveAvatar = (): UseMutationResult<void, string[], void> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<void, string[], void>(removeAvatar, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('user');
            dispatch(deleteAvatar);
        },
    });
};

export const useUpdateLocations = (): UseMutationResult<ILocationResponse, string[], ILocation> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<ILocationResponse, string[], ILocation>(updateLocation, {
        onSuccess: async (response) => {
            await queryClient.invalidateQueries('user');

            dispatch(updateUserLocations(response.data));
        },
    });
};

export const useRemoveLocation = (): UseMutationResult<void, string[], { id: string }> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<void, string[], { id: string }>(removeLocation, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('user');
            dispatch(deleteLocation);
        },
    });
};
