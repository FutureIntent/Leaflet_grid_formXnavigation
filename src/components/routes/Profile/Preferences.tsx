import GeneralPreferences from '@components/routes/Profile/Preferences/GeneralPreferences';
import Notifications from '@components/routes/Profile/Preferences/Notifications';

import Box from '@components/atoms/Box';
import Hr from '@components/atoms/Hr';

const Preferences = () => (
    <Box>
        <GeneralPreferences />
        <Hr />
        <Notifications />
    </Box>
);

export default Preferences;
