import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTranslation } from 'next-i18next';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

import Map from '@components/molecules/Icons/home/Map';
import Offers from '@components/molecules/Icons/home/Offers';

export enum ViewTypes {
    list = 'list',
    map = 'map',
}

const PointerEventWrapper = styled.div`
    max-width: 300px;
    pointer-events: auto;
    width: 100%;
`;

const StyledToggleGroup = styled(ToggleButtonGroup)`
    border: 1px solid var(--grey-dark);
    border-radius: ${({ theme }) => theme.space['2xs']};
    padding: 1px;
    position: relative;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.topBar};
`;

const StyledToggleBtn = styled(ToggleButton)`
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.space['2xs']}!important;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 50%;

    &.Mui-selected,
    &.Mui-selected:hover {
        background-color: var(--blue-brand) !important;
    }
`;

const TopBar = ({ view, setView }: { view: ViewTypes; setView: (view: ViewTypes) => void }) => {
    const { t } = useTranslation('home');

    const handleChange = (_: MouseEvent<HTMLElement>, newView: ViewTypes) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    return (
        <PointerEventWrapper id={"viewSwitchButtons"}>
            <StyledToggleGroup color="primary" value={view} exclusive onChange={handleChange} id={"viewSwitchBorder"}>
                <StyledToggleBtn value={ViewTypes.list}>
                    <Offers
                        size="medium2"
                        color={view === ViewTypes.list ? 'var(--white)' : 'var(--grey-dark)'}
                    />
                    <Typography
                        display="inline-block"
                        variant="accent"
                        color={view === ViewTypes.list ? 'var(--white)' : 'var(--grey-dark)'}
                        ml={10}
                    >
                        {t('offers')}
                    </Typography>
                </StyledToggleBtn>
                <StyledToggleBtn value={ViewTypes.map}>
                    <Map
                        size="medium2"
                        color={view === ViewTypes.map ? 'var(--white)' : 'var(--grey-dark)'}
                    />
                    <Typography
                        display="inline-block"
                        variant="accent"
                        color={view === ViewTypes.map ? 'var(--white)' : 'var(--grey-dark)'}
                        ml={10}
                    >
                        {t('map')}
                    </Typography>
                </StyledToggleBtn>
            </StyledToggleGroup>
        </PointerEventWrapper>
    );
};

export default TopBar;