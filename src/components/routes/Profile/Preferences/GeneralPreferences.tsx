import HighLightedRow from '@components/routes/Profile/Preferences/HighLightedRow';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import Box from '@components/atoms/Box';
import ToggleSwitch from '@components/atoms/ToggleSwitch';
import Typography from '@components/atoms/Typography';

const GeneralPreferences = () => {
    const { t } = useTranslation();
    const [isTrackingEnabled, setIsTrackingEnabled] = useState(false);
    const [isDealsNotificationsEnabled, setDealsNotificationsEnabled] = useState(false);

    const handleIsTrackingClick = (value: boolean) => setIsTrackingEnabled(value);
    const handleIsDealsNotificationsEnabled = (value: boolean) =>
        setDealsNotificationsEnabled(value);

    return (
        <Box mb={40}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10}>
                {t('General preferences')}
            </Typography>
            <Box display="flex" flexDirection="column" gridGap={10}>
                <HighLightedRow>
                    <Typography variant="paragraph2">{t('Location tracking')}</Typography>
                    <div>
                        <ToggleSwitch
                            name="tracking"
                            checked={isTrackingEnabled}
                            onChange={handleIsTrackingClick}
                        />
                    </div>
                </HighLightedRow>

                <HighLightedRow>
                    <Typography variant="paragraph2">
                        {t('Send Deals & Sales notifications')}
                    </Typography>
                    <div>
                        <ToggleSwitch
                            name="dealsNotifications"
                            checked={isDealsNotificationsEnabled}
                            onChange={handleIsDealsNotificationsEnabled}
                        />
                    </div>
                </HighLightedRow>
            </Box>
        </Box>
    );
};

export default GeneralPreferences;
