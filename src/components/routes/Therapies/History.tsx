import ListItem from '@components/routes/Therapies/History/ListItem';
import { Stack } from '@mui/material';
import routeMap from '@utils/RouteMap';
import { useTranslation } from 'next-i18next';

import theme from '@theme/configs';

import Box from '@components/atoms/Box';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import { demoHistoryTherapies } from '../../../dummyData/dummyData';

const History = () => {
    const { t } = useTranslation('therapies');

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={20}>
                    <Box display="flex" alignItems="center">
                        <Typography
                            variant="h2"
                            color="var(--black-brand)"
                            lineHeight="47px"
                            mr={10}
                        >
                            {t('History')}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <LinkWithArrow label={t('Show whole list')} to={routeMap.history} />
                    </Box>
                </Box>
                <Box
                    boxShadow={theme.shadows.card}
                    p={{ _: '10px 15px', tablet: '13px 20px', laptopS: '20px 70px 30px 40px' }}
                >
                    <Stack direction="column" spacing={2}>
                        {demoHistoryTherapies.map((therapy) => (
                            <ListItem key={therapy.name} {...therapy} />
                        ))}
                    </Stack>
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default History;
