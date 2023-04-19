import { useAppSelector } from '@hooks';
import { selectUser } from '@store/user/selectors';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';

import colors from '@theme/configs/colors';
import { mediaSizes } from '@theme/configs/mediaQueries';
import shadows from '@theme/configs/shadows';

import LogoWhiteSymbol from '@components/molecules/Icons/logo/symbol/LogoWhiteSymbol';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';
import { FONT_BOLD } from '@components/atoms/Typography/Typography';

const CryoBalance = () => {
    const { t } = useTranslation();
    const isLargerThenTablet = useMediaQuery({ query: mediaSizes.tablet });
    const user = useAppSelector(selectUser);

    return (
        <Box
            display="flex"
            borderRadius={4}
            boxShadow={shadows.card3}
            minWidth={{ _: '95px', tablet: '160px' }}
            overflow="hidden"
        >
            <Box backgroundColor={colors.blueBrand} p={5}>
                <LogoWhiteSymbol size="medium3" />
            </Box>
            <Box p="5px 8px 3px">
                <Typography
                    variant="caption"
                    fontSize={{ _: 10, tablet: 10 }}
                    color="greyDark"
                    fontWeight={FONT_BOLD}
                    lineHeight={{ _: '0.8', tablet: '0.8' }}
                    transformText="uppercase"
                >
                    {isLargerThenTablet && t('Cryo˚')}
                    {t('Balance')}
                </Typography>
                <Typography
                    variant="accent"
                    fontSize={{ _: '12px', tablet: '18px' }}
                    color="blueBrand"
                >
                    {(user?.balance || 0).toFixed(2)}
                </Typography>
            </Box>
        </Box>
    );
};

export default CryoBalance;
