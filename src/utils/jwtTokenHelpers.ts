import { isSSR } from '@utils/helpers';
import nookies from 'nookies';

export const TOKEN_LIFETIME = 5 * 60 * 1000 - 1000;

export const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join(''),
    );

    return JSON.parse(jsonPayload);
};

export const getRefreshTokenExpires = () => {
    if (isSSR()) return null;

    const { refreshTokenExpires } = nookies.get();

    return refreshTokenExpires;
};

export const setRefreshTokenExpires = ({ date }: { date?: string }) => {
    if (date) {
        nookies.set(null, 'refreshTokenExpires', date);
    }
};

export const removeRefreshToken = () => {
    nookies.destroy(null, 'refreshTokenExpires');
};
