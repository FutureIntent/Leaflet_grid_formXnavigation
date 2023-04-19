import { AccountCircleRounded } from '@mui/icons-material';
import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const DefAvatar = styled(AccountCircleRounded)`
    color: ${({ theme }) => theme.colors.greyDark};
`;

export type UserAvatarProps = {
    size?: 'sm' | 'lg' | 'xl' | 'full';
    photo?: string;
    alt?: string;
};

const defaultProps = {
    size: 'lg',
    photo: '',
    alt: '',
};

const sizeMap = {
    sm: '20px',
    lg: '30px',
    xl: '108px',
    full: '100%',
};

const sizeVariant = variant({
    prop: 'size',
    variants: {
        sm: {
            width: sizeMap.sm,
            height: sizeMap.sm,
        },
        lg: {
            width: sizeMap.lg,
            height: sizeMap.lg,
        },
        xl: {
            width: sizeMap.xl,
            height: sizeMap.xl,
        },
    },
});

const StyledContainer = styled.div<UserAvatarProps>`
    ${sizeVariant};

    border-radius: 50%;
    overflow: hidden;
    position: relative;
`;

const UserAvatar = ({ size = 'sm', photo, alt, ...rest }: UserAvatarProps): ReactElement => {
    const imgSize = sizeMap[size];

    return (
        <StyledContainer size={size} {...rest}>
            {!photo && <DefAvatar sx={{ width: imgSize, height: imgSize }} />}
            {photo && (
                <Image src={photo} alt={alt} width={imgSize} height={imgSize} layout="fixed" />
            )}
        </StyledContainer>
    );
};

UserAvatar.defaultProps = defaultProps;

export default UserAvatar;
