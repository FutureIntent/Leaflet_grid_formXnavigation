import { useAppSelector } from '@hooks';
import { Login, Logout } from '@mui/icons-material';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useSignOut } from '@services/auth/hooks';
import { IUser } from '@services/user/requests';
import { RootState } from '@store';
import { selectIsLoggedIn, selectUser } from '@store/user/selectors';
import routeMap from '@utils/RouteMap';
import { useTranslation } from 'next-i18next';
import { ReactElement, useState, MouseEvent, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import mediaQueries, { mediaSizes } from '@theme/configs/mediaQueries';

import { useModal } from '@hooks/useModal';

import SignInModal from '@components/molecules/AuthModals/SignInModal/SignInModal';
import SignUpModal from '@components/molecules/AuthModals/SignUpModal/SignUpModal';
import { AuthModalData } from '@components/molecules/AuthModals/types';
import Heart from '@components/molecules/Icons/Heart';
import MenuIcon from '@components/molecules/Icons/Menu';
import Tutorial from '@components/molecules/Icons/Tutorial';
import MenuItem from '@components/molecules/Menu/MenuItem';
import UserAvatar from '@components/molecules/UserAvatar';

// import ThemeToggle from '@components/molecules/ThemeToggle';
import Box from '@components/atoms/Box';
import Link from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

const StyledButton = styled(Button)`
    border: 1px solid ${({ theme }) => theme.colors.grey}!important;
    border-radius: 4px;
    grid-gap: 10px;
    height: 40px;
    margin-left: 1.25rem;
    overflow: hidden;
    padding: 5px 5px 5px 10px !important;

    ${mediaQueries.tablet} {
        padding: 5px 15px !important;
    }
`;

const StyledMenu = styled(Menu)`
    .MuiPaper-root {
        border-radius: ${({ theme }) => theme.space['2xs']};
        box-shadow: ${({ theme }) => theme.shadows.card};
        padding: 20px 30px;
    }
`;

interface MapStateSelectors {
    user: IUser | null;
    isUserLoggedIn: boolean;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateSelectors>({
    user: selectUser,
    isUserLoggedIn: selectIsLoggedIn,
});

const AppMenu = (): ReactElement => {
    const { t } = useTranslation('auth');
    const menuContainerRef = useRef<HTMLDivElement | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { user, isUserLoggedIn } = useAppSelector(mapStateToProps);
    const isLargerThenLaptopS = useMediaQuery({ query: mediaSizes.laptopS });

    const { openModal: openSignInModal } = useModal<AuthModalData>('signIn');
    const { openModal: openSignUpModal } = useModal<AuthModalData>('signUp');
    const { mutate: signOut } = useSignOut();

    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenSignInModal = () => {
        openSignInModal();
        handleClose();
    };
    const handleOpenSignUpModal = () => {
        openSignUpModal();
        handleClose();
    };

    return (
        <div ref={menuContainerRef}>
            <StyledButton
                id="app-menu-button"
                aria-controls="app-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon color="var(--grey-dark)" size={{ _: 'small2', laptopS: 'medium' }} />

                <UserAvatar
                    photo={user?.profile?.avatar || ''}
                    alt={user?.profile?.name || ''}
                    size={isLargerThenLaptopS ? 'lg' : 'sm'}
                />
            </StyledButton>
            <StyledMenu
                id="app-menu"
                anchorEl={anchorEl}
                open={open}
                container={menuContainerRef?.current}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'app-menu-button',
                }}
            >
                <Box display="flex" justifyContent="space-between" mb={20}>
                    {isUserLoggedIn ? (
                        <Link href="/profile">
                            <Box display="flex">
                                <Tutorial color="var(--grey-dark)" />
                                <Typography variant="paragraph2" color="var(--black-brand)" ml={7}>
                                    {t('Profile settings')}
                                </Typography>
                            </Box>
                        </Link>
                    ) : (
                        <Box display="flex">
                            <Box
                                cursor="pointer"
                                display="flex"
                                alignItems="center"
                                onClick={handleOpenSignUpModal}
                            >
                                <Typography variant="paragraph2" color="var(--blue-brand)">
                                    Sign up
                                </Typography>
                            </Box>
                            <Box
                                cursor="pointer"
                                display="flex"
                                alignItems="center"
                                onClick={handleOpenSignInModal}
                                ml={30}
                            >
                                <Typography as="div" variant="paragraph2" color="var(--grey-dark)">
                                    Log in
                                </Typography>
                                <Login sx={{ color: 'var(--grey-dark)' }} />
                            </Box>
                        </Box>
                    )}
                    {/* <ThemeToggle /> */}
                </Box>
                <Box display="flex">
                    <MenuItem
                        link={routeMap.therapies}
                        icon={<Heart color="var(--brand-accent)" size="xl" />}
                        label={t('Therapies')}
                    />
                    <MenuItem
                        link={routeMap.business}
                        icon={<Heart color="var(--brand-accent)" size="xl" />}
                        label={t('Business')}
                    />
                    <MenuItem
                        link="/blog"
                        icon={<Heart color="var(--brand-accent)" size="xl" />}
                        label={t('Blogs')}
                    />
                </Box>
                {isUserLoggedIn && (
                    <Box
                        cursor="pointer"
                        display="flex"
                        justifyContent="flex-end"
                        mt={20}
                        onClick={() => signOut()}
                    >
                        <Typography variant="paragraph2" color="var(--grey-dark)">
                            Logout{' '}
                        </Typography>
                        <Logout sx={{ color: 'var(--grey-dark)' }} />
                    </Box>
                )}
            </StyledMenu>
            <SignInModal />
            <SignUpModal />
        </div>
    );
};

export default AppMenu;
