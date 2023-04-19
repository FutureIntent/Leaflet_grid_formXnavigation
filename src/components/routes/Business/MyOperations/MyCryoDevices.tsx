import { useTranslation } from 'next-i18next';

import Box from '@components/atoms/Box';

const MyCryoDevices = () => {
    const { t } = useTranslation();

    return (
        <Box as="section" id="myDevices" mb={140}>
            <div>{t('')}</div>
        </Box>
    );
};

export default MyCryoDevices;
