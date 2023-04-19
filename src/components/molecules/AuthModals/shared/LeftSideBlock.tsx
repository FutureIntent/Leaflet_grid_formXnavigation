import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styled from 'styled-components';

import Logo from '@components/molecules/Icons/Logo';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import IceBg from '../../../../../public/images/ice_bg.jpg';

const BackgroundImage = styled.div`
    &:after {
        background: transparent linear-gradient(180deg, #070f39cc 0%, #070f3933 100%);
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

interface LeftSideBlockProps {
    ariaTitle: string;
    handleOpenModal: (data?: any) => void;
    title: string;
    btnText: string;
}

const LeftSideBlock = ({ ariaTitle, handleOpenModal, title, btnText }: LeftSideBlockProps) => {
    const { t } = useTranslation('auth');

    return (
        <Box position="relative" maxWidth={435} p="25px 67px">
            <Box
                position="relative"
                zIndex={10}
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <Typography variant="h3" color="var(--white)" id={ariaTitle}>
                    {title}
                </Typography>
                <Button variant="night" onClick={handleOpenModal} mt={30} mb={70}>
                    {btnText}
                </Button>
                <Logo />
                <Typography variant="caption" color="var(--grey-dark)">
                    {t('signIn.disclaimer')}
                </Typography>
            </Box>
            <BackgroundImage>
                <Image placeholder="blur" layout="fill" src={IceBg} />
            </BackgroundImage>
        </Box>
    );
};

export default LeftSideBlock;
