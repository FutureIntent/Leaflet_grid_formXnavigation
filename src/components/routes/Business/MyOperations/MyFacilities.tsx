import { useTranslation } from 'next-i18next';

import Box from '@components/atoms/Box';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

const MyFacilities = () => {
    const { t } = useTranslation();

    return (
        <Box as="section" id="myFacilities" mb={140}>
            <Box
                display="flex"
                flexDirection={{ _: 'column', laptopS: 'row' }}
                justifyContent="space-between"
                flexWrap="wrap"
            >
                <Typography
                    transformText="uppercase"
                    variant="h2"
                    color="var(--black-brand)"
                    lineHeight="47px"
                    mr={10}
                >
                    {t('MY CRYO˚DEVICES')}
                </Typography>

                <LinkWithArrow to="/devices" label={t('Manage')} />
            </Box>
        </Box>
    );
};

export default MyFacilities;
