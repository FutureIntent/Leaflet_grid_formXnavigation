import { useTranslation } from 'next-i18next';

import Box from '@components/atoms/Box';

const OrderHistory = () => {
    const { t } = useTranslation();

    return (
        <Box as="section" id="history">
            <div>{t('')}</div>
        </Box>
    );
};

export default OrderHistory;
