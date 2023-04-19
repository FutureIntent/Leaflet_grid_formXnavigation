import HighLightedRow from '@components/routes/Profile/Preferences/HighLightedRow';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import Box from '@components/atoms/Box';
import ToggleSwitch from '@components/atoms/ToggleSwitch';
import Typography from '@components/atoms/Typography';

const Notifications = () => {
    const { t } = useTranslation();
    const [isReceiveMailEnabled, setIsReceiveMailEnabled] = useState(false);
    const [isReceivePhoneEnabled, setReceivePhoneEnabled] = useState(false);

    const handleIsReceiveMailClick = (value: boolean) => setIsReceiveMailEnabled(value);
    const handleIsReceivePhoneClick = (value: boolean) => setReceivePhoneEnabled(value);

    return (
        <Box mb={60} mt={20}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10}>
                {t('General preferences')}
            </Typography>
            <Box display="flex" flexDirection="column" gridGap={10}>
                <HighLightedRow>
                    <Typography variant="paragraph2">{t('Receive mail notifications')}</Typography>
                    <div>
                        <ToggleSwitch
                            name="receiveMail"
                            checked={isReceiveMailEnabled}
                            onChange={handleIsReceiveMailClick}
                        />
                    </div>
                </HighLightedRow>

                <HighLightedRow>
                    <Typography variant="paragraph2">{t('Receive phone notifications')}</Typography>
                    <div>
                        <ToggleSwitch
                            name="receivePhone"
                            checked={isReceivePhoneEnabled}
                            onChange={handleIsReceivePhoneClick}
                        />
                    </div>
                </HighLightedRow>
            </Box>
        </Box>
    );
};

export default Notifications;
