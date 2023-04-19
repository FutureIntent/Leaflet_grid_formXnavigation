import ProcedureLine from '@components/routes/Therapies/Upcoming/ProcedureLine';
import StatusLine from '@components/routes/Therapies/Upcoming/StatusLine';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styled from 'styled-components';

import theme from '@theme/configs';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import LabeledField from '@components/atoms/LabeledField';
import Typography from '@components/atoms/Typography';

import Menu from '@components/molecules/Icons/Menu';
import Play from '@components/molecules/Icons/Play';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import IceBg from '../../../../public/images/ice_bg.jpg';
import { dummyTherapy } from '../../../dummyData/dummyData';

const CardContent = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
        'photo'
        'therapyInfo'
        'procedures'
        'statusLine'
        'statusInfo'
        'actionBtn';
    grid-template-columns: 100%;
    padding: 10px 15px;
    width: 100%;

    ${mediaQueries.tablet} {
        grid-template-areas:
            'photo therapyInfo menu'
            'procedures procedures procedures'
            'statusLine statusLine statusLine'
            'statusInfo statusInfo statusInfo'
            '. actionBtn actionBtn';

        grid-template-columns: 20% auto 30px;
    }

    ${mediaQueries.laptopS} {
        grid-template-areas:
            'photo therapyInfo actionBtn menu'
            'photo procedures procedures procedures'
            'photo statusLine statusLine statusLine'
            'photo statusInfo statusInfo statusInfo';
        grid-template-columns: 30% auto 255px 30px;
        padding: 18px 40px;
    }
`;

const Upcoming = () => {
    const { t } = useTranslation('therapies');

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                <Typography
                    variant="h2"
                    color="var(--black-brand)"
                    transformText="uppercase"
                    mb={16}
                >
                    {t('heading')}
                </Typography>
            </GridChild>

            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                <Box
                    boxShadow={theme.shadows.card}
                    width="100%"
                    display="flex"
                    overflow="hidden"
                    borderRadius={theme.space['2xs']}
                    backgroundColor="var(--white)"
                >
                    <CardContent>
                        <Box
                            gridArea="photo"
                            position="relative"
                            minHeight={{ _: '90px', tablet: '147px', laptopS: '330px' }}
                            m={{
                                _: '-10px -15px 0 -15px',
                                tablet: '-18px 0 0 -30px',
                                laptopS: '-18px 0 -18px -40px',
                            }}
                        >
                            <Image placeholder="blur" layout="fill" src={IceBg} />
                        </Box>
                        <Box gridArea="therapyInfo" width={{ _: 'auto', laptopS: '255px' }}>
                            <Typography variant="h3" color="var(--black-brand)">
                                {dummyTherapy.heading}
                            </Typography>
                            <Typography variant="paragraph" color="var(--black-brand)">
                                {dummyTherapy.address}
                            </Typography>
                            <Box display="flex" mt={10}>
                                <LabeledField label={t('date')} value="13 October, 2021" />
                                <LabeledField label={t('Time')} value="16:00" />
                            </Box>
                        </Box>
                        <Box
                            gridArea="actionBtn"
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-end"
                            height="fit-content"
                            mb={{ _: '18px', tablet: '0' }}
                        >
                            <Button variant="link" size={SizePropsType.small}>
                                {t('showCode')}
                            </Button>
                            <Button withIcon size={SizePropsType.small}>
                                {t('start')} <Play />
                            </Button>
                        </Box>
                        <Box gridArea="menu" display={{ _: 'none', tablet: 'block' }}>
                            <Menu />
                        </Box>
                        <Box gridArea="procedures">
                            <ProcedureLine />
                        </Box>
                        <Box gridArea="statusLine">
                            <StatusLine />
                        </Box>
                        <Box gridArea="statusInfo">
                            <Typography variant="caption" color="var(--black-brand)" mb="20px">
                                <Typography as="span" variant="caption" color="var(--blue-brand)">
                                    {t('statuses.waitingForConfirmation')}:{' '}
                                </Typography>
                                Please, set “start therapy” to confirm the start of the session, or
                                enter the code given.
                            </Typography>
                        </Box>
                    </CardContent>
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default Upcoming;
