import axios from '@services/axios';

export interface IProfile {
    name?: string;
    surname?: string;
    birthday?: string;
    avatar?: string;
    language?: string;
    mailNotifications?: boolean;
    phoneNotifications?: boolean;
    locationTracking?: boolean;
    dealsSalesNotifications?: boolean;
}

export interface IUser {
    id: string;
    email: {
        email: string;
        confirmed: boolean;
    };
    phone: {
        countryCode: string;
        number: string;
        confirmed: boolean;
    };
    balance: number;
    profile: IProfile;
    linkedAccounts?: ILinkedAccount[];
    locations: ILocation[];
}

export interface ILinkedAccount {
    type: string;
    additionalInfo: string;
}

export interface ILocation {
    id?: string;
    name: string;
    latitude: string;
    longitude: string;
}

export interface ILocationResponse {
    data: {
        id: string;
        name: string;
        latitude: string;
        longitude: string;
    };
}

export const getUser = async (): Promise<IUser> =>
    axios.get('/user/me', { withCredentials: false }).then((response) => response.data.data);

export type ISetAvatarResponse = { data: string };

export const setAvatar = async (formData: FormData): Promise<ISetAvatarResponse> =>
    axios
        .put('/user/avatar', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => response.data)
        .catch((errors) => Promise.reject(errors));

export const removeAvatar = async (): Promise<any> =>
    axios.delete('/user/avatar').catch((error) => Promise.reject(error.response.data.message));

export type IUpdateUserResponse = { data: IProfile };

export const updateProfile = async (data: Partial<IProfile>): Promise<IUpdateUserResponse> =>
    axios
        .put('/user/profile', data)
        .then((response) => response.data)
        .catch((errors) => Promise.reject(errors));

export const updateLocation = async (data: ILocation): Promise<ILocationResponse> =>
    axios
        .post('/user/location', data)
        .then((response) => response.data)
        .catch((errors) => Promise.reject(errors));

export const removeLocation = async ({ id }: { id: string }): Promise<any> =>
    axios
        .delete(`/user/location/${id}`)
        .catch((error) => Promise.reject(error.response.data.message));
