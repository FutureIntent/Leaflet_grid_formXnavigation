import { useAppSelector } from '@hooks';
import { useUpdateLocations } from '@services/user/hooks';
import { ILocation } from '@services/user/requests';
import { selectUser } from '@store/user/selectors';
import { useTranslation } from 'next-i18next';

import { PlacesAutocomplete } from '@components/molecules/PlacesAutocomplete';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const Location = () => {
    const { t } = useTranslation();
    const user = useAppSelector(selectUser);
    const { mutate } = useUpdateLocations();

    const handleSelect = (val: ILocation, onSuccess: () => void) => {
        mutate(val, { onSuccess });
    };

    return (
        <Box mb={60}>
            <Typography variant="paragraph" color="var(--grey-dark)" mb={10}>
                {t('Location')}
            </Typography>
            <Box>
                <ul>
                    {user?.locations.map((location) => (
                        <li key={location.name}>{location.name}</li>
                    ))}
                </ul>
            </Box>
            <Box width="100%">
                <PlacesAutocomplete onSelect={handleSelect} />
            </Box>
        </Box>
    );
};

export default Location;
