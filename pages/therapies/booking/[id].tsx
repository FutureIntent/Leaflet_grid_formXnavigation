import { GetStaticPaths } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Typography from '@components/atoms/Typography';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import i18nextConfig from '../../../next-i18next.config';

const TherapyBooking = () => {
    const { t } = useTranslation();

    return (
        <GridParent>
            <GridChild>
                <Typography>{t('Book')}</Typography>
            </GridChild>
        </GridParent>
    );
};

export default TherapyBooking;

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
