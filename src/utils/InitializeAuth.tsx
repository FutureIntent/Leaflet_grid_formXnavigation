import { useAppSelector } from '@hooks';
import { useRefreshToken } from '@services/auth/hooks';
import { useUser } from '@services/user/hooks';
import { selectIsLoggedIn } from '@store/user/selectors';
import nookies from 'nookies';
import { useEffect } from 'react';

const InitializeAuth = (): null => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const { refreshTokenExpires } = nookies.get();
    const { refetch, data } = useRefreshToken();

    useEffect(() => {
        // if (!isLoggedIn) {
        refetch();
        // }
    }, [isLoggedIn, refetch, refreshTokenExpires]);

    useUser({
        enabled: Boolean(data),
    });

    return null;
};

export default InitializeAuth;
