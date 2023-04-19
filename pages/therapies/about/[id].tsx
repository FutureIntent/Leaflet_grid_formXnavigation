import routeMap from '@utils/RouteMap';
import { GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Badge from '@components/atoms/Badge';
import Box from '@components/atoms/Box';
import Calendar from '@components/atoms/Calendar';
import GoBack from '@components/atoms/GoBack';
import Hr from '@components/atoms/Hr';
import Tag from '@components/atoms/Tag';
import Typography from '@components/atoms/Typography';

import OutlinedHeart from '@components/molecules/Icons/OutlinedHeart';
import Share from '@components/molecules/Icons/Share';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import i18nextConfig from '../../../next-i18next.config';

const PhotoGrid = dynamic(() => import('@components/molecules/PhotoGrid/PhotoGrid'));

const StyledHeart = styled(OutlinedHeart)`
    margin-left: 16px;
`;

const AboutPlace = () => (
    <GridParent>
        <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
            <Box
                display="flex"
                flexDirection={{ _: 'column', tablet: 'row' }}
                justifyContent="space-between"
                mt={40}
                mb={16}
                gridGap={10}
            >
                <Box display="flex">
                    <GoBack link={routeMap.therapies} />
                    <Box ml={16}>
                        <Box display="flex" alignItems="center">
                            <Typography variant="h2" color="var(--black-brand)" mr={16}>
                                Gain Hard
                            </Typography>
                            <div>
                                <Badge variant="paragraph" color="var(--white)">
                                    Gym
                                </Badge>
                            </div>
                        </Box>
                        <Typography variant="paragraph" color="var(--grey-dark)">
                            458 Oxford St, London
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Share size={{ _: 'medium', tablet: 'large2' }} color="var(--blue-brand)" />
                    <StyledHeart
                        size={{ _: 'medium', tablet: 'large2' }}
                        color="var(--blue-brand)"
                    />
                </Box>
            </Box>
        </GridChild>
        <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }} mb={30}>
            <PhotoGrid />
        </GridChild>
        <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 4' }} mb={100}>
            <Typography variant="h2" color="var(--brand-black)">
                Title about something
            </Typography>
            <Typography variant="paragraph" color="var(--brand-black)">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
            </Typography>

            <Hr mt={40} mb={30} />

            <Typography variant="h3" color="var(--brand-black)" mb={20}>
                Available therapies
            </Typography>

            <Tag display="inline-block" variant="paragraph" color="var(--blue-brand)" mr={15}>
                Full-body
            </Tag>
            <Tag display="inline-block" variant="paragraph" color="var(--blue-brand)" mr={15}>
                Local
            </Tag>
            <Tag display="inline-block" variant="paragraph" color="var(--blue-brand)">
                Facial
            </Tag>

            <Hr mt={40} mb={30} />

            <Box display="flex" mb={30}>
                <Box mr={25}>
                    <Typography variant="paragraph" color="var(--grey-dark)">
                        Monday – Friday
                    </Typography>
                    <Typography variant="h3" color="var(--brand-black)">
                        07:00 – 22:00
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="paragraph" color="var(--grey-dark)">
                        Saturday – Sunday
                    </Typography>
                    <Typography variant="h3" color="var(--brand-black)">
                        09:00 – 16:00
                    </Typography>
                </Box>
            </Box>

            <Calendar />
        </GridChild>
    </GridParent>
);

export default AboutPlace;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = ['test'];

    return {
        paths: paths.map((id: string) => ({ params: { id } })),
        fallback: false,
    };
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
