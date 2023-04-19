import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import SuccessIcon from '@components/molecules/Icons/Success';

const StyledSuccessIcon = styled(SuccessIcon)`
    height: 115px;
    width: 115px;
`;

const Success = () => {
    const { t } = useTranslation();

    return (
        <Box mt={30} display="flex" flexDirection="column" alignItems="center">
            <StyledSuccessIcon color="var(--success)" />
            <Box maxWidth={340}>
                <Typography variant="h3" color="var(--black-brand)" mt={16} textAlign="center">
                    {t('Almost there!')}
                </Typography>
                <Typography
                    variant="paragraph"
                    color="var(--grey-dark)"
                    mt={6}
                    mb={10}
                    textAlign="center"
                >
                    {t(
                        'We will e-mail you when verification is succeeded. It may take several hours.',
                    )}
                </Typography>
            </Box>
        </Box>
    );
};

export default Success;
