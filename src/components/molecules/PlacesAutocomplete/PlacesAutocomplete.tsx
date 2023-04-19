import { ILocation } from '@services/user/requests';
import { SyntheticEvent } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

import Input from '@components/atoms/Form/Input';

const PlacesAutocomplete = ({
    onSelect,
}: {
    onSelect: (val: ILocation, cb: () => void) => void;
}) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {},
        debounce: 300,
    });

    const handleInput = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    };

    const handleSelect =
        ({ description }: { description: string }) =>
        () => {
            setValue(description, false);
            clearSuggestions();

            getGeocode({ address: description }).then((result) => {
                const { lat, lng } = getLatLng(result[0]);

                onSelect(
                    {
                        name: description,
                        latitude: lat.toString(),
                        longitude: lng.toString(),
                    },
                    clearSuggestions,
                );
            });
        };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                place_id,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                <li key={place_id + main_text} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <div>
            <Input
                name="location"
                value={value}
                label="Location"
                onChange={handleInput}
                disabled={!ready}
            />
            {status === 'OK' && <ul>{renderSuggestions()}</ul>}
        </div>
    );
};

export default PlacesAutocomplete;
