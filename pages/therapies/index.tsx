import Booked from '@components/routes/Therapies/Booked';
import History from '@components/routes/Therapies/History';
import MyFavorites from '@components/routes/Therapies/MyFavorites';
import Upcoming from '@components/routes/Therapies/Upcoming';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Section from '@components/templates/Section';

import i18nextConfig from '../../next-i18next.config';

const Index = () => (
    <>
        <Section id="upcoming-therapies" mt="60px">
            <Upcoming />
        </Section>
        <Section id="booked-therapies">
            <Booked />
        </Section>
        <Section id="favorite-therapies">
            <MyFavorites />
        </Section>
        <Section id="therapies-history">
            <History />
        </Section>
    </>
);

export default Index;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
