import Cryotherapies from '@components/routes/Home/Cryotherapies';
import Map from '@components/routes/Home/Map';
import TopBar, { ViewTypes } from '@components/routes/Home/TopBar';
import Blog from '@components/routes/Home/blocks/Blog';
import TherapyCardSlider from '@components/routes/Home/blocks/TherapyCardSlider';
import { fetchPosts } from '@services/posts/requests';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';
import Section from '@components/templates/Section';

import HeroBanner from '@components/molecules/HeroBanner/HeroBanner';

import Box from '@components/atoms/Box';

import i18nextConfig from '../next-i18next.config';
import {
    demoNearYouCardData,
    demoSalesCardData,
    demoTherapiesCardData,
} from '../src/dummyData/dummyData';
import { Post } from '../src/types/Sanity';

const StyledGridParent = styled(GridParent)`
    height: 100%;
    pointer-events: none;
`;

const Temporary = ({ view, setView }: { view: ViewTypes; setView: (view: ViewTypes) => void }) => (
    <Box position="absolute" top={0} left={0} width="100%">
        <StyledGridParent gridTemplateRows="1fr">
            <GridChild gridColumn="span 12">
                <Box width="100%" display="flex" justifyContent="center" pt={20}>
                    <TopBar view={view} setView={setView} />
                </Box>
            </GridChild>
        </StyledGridParent>
    </Box>
);

type HomeProps = {
    initialPosts: Post[];
};

const Home = ({ initialPosts }: HomeProps): ReactElement => {
    const { t } = useTranslation();
    const [view, setView] = useState(ViewTypes.list);

    return (
        <>
            <Temporary view={view} setView={setView} />
            {view === ViewTypes.map && <Map />}
            {view === ViewTypes.list && (
                <>
                    <GridParent id="viewSwitchGrid">
                        <GridChild gridColumn={{ _: 'span 12', laptopS: '2/ span 10' }}>
                            <HeroBanner />
                        </GridChild>
                    </GridParent>
                    <Cryotherapies
                        therapies={demoTherapiesCardData}
                        blockTitle={t('Cryotherapies')}
                    />
                    <Section id="cryo-near-you">
                        <TherapyCardSlider title={t('CryoNearYou')} cards={demoNearYouCardData} />
                    </Section>
                    <Section id="therapy-sales">
                        <TherapyCardSlider title={t('Sales')} cards={demoSalesCardData} />
                    </Section>
                    <Section id="cryo-blogs">
                        <Blog posts={initialPosts} />
                    </Section>
                </>
            )}
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }: { locale?: string }) => {
    let posts: Post[];

    try {
        posts = await fetchPosts({});
    } catch (e) {
        posts = [];
    }

    return {
        props: {
            initialPosts: posts,
            ...(await serverSideTranslations(locale || 'en', ['common', 'auth'], i18nextConfig)),
        },
    };
};
