import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import Box from '@components/atoms/Box';

import i18nextConfig from '../next-i18next.config';

const Balance = () => {
    const { t } = useTranslation();

    return (
        <GridParent>
            <GridChild>
                <Box flexGrow={2} />
                <Box>{t('Balance', '')}</Box>
                <Box flexGrow={2} />
            </GridChild>
        </GridParent>
    );
};

export default Balance;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
