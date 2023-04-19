import { Box, Button } from '@mui/material';
import { styled as muistyled } from '@mui/material/styles';
import styled from 'styled-components';
import colors from '@theme/configs/colors';
import { fontsConfig } from '@components/atoms/Typography';
import { mediaQueriesReversed } from '@theme/configs/mediaQueries';
import { ProcedureFilter } from '../../LeafletMapTypes/ProcedureFilterTypes';

const ProcedureFilterContainer = muistyled(Box)(() => ({
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'flex-start',
    'position': 'absolute',
    'top': '70px',
    'left': '2.5%',
    'zIndex': '1',
    '@media all and (max-width: 992px) and (orientation: landscape)': {
        top: '65px',
    },
    '@media all and (max-width: 568px) and (orientation: portrait)': {
        top: '120px',
    },
}));
const ProcedureFilterWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    .buttonStyle {
        background-color: ${colors.blueBrand};
        border-radius: 4px;
        color: ${colors.white};
        white-space: nowrap;
        font-size: ${fontsConfig.caption.fontSize[4]};
        font-family: ${fontsConfig.caption.fontFamily};
        @media all and (hover: none) {
            &:hover {
                background-color: ${colors.blueBrand};
            }
        }
        ${mediaQueriesReversed.tablet} and (orientation: landscape){
            font-size: 12px;
        }
        @media all and (max-width: 375px) and (orientation: portrait) {
            font-size: 12px;
        }
    }
    .buttonStyle.buttonInactive {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.4);
        @supports not ((backdrop-filter: blur(10px)) or (-moz-backdrop-filter: blur(10px))) {
            & {
                background-color: rgba(16, 16, 28, 0.8);
            }
        }
    }
    .buttonStyle: nth-child(n + 2) {
        margin-left: 0.5em;
        @media all and (max-width: 375px) and (orientation: portrait) {
            margin-left: 0.3em;
        }
    }
`;

const ProcedureFilters = ({filterList, filter, setFilter}: ProcedureFilter) => {

    function handleFilter(event: any) {
        const filterName: string = event.target.name.split('_')[1];
        if (filter.includes(filterName)) {
            const filterIndex = filter.indexOf(filterName);
            setFilter((prevState: string[]): string[] => {
                prevState.splice(filterIndex, 1);
                return [...prevState];
            });
            return;
        }
        setFilter((prevState: string[]): string[] => [...prevState, filterName]);
    }

    function isActive(filterName: string): boolean {
        return filter.includes(filterName);
    }

    return (
        <ProcedureFilterContainer>
            <ProcedureFilterWrapper>
                {filterList.map((item: string) => (
                    <Button
                        key={item}
                        name={`filter_${item}`}
                        id={`filter_${item}`}
                        variant="contained"
                        className={isActive(item) ? 'buttonStyle' : 'buttonStyle buttonInactive'}
                        onClick={(event)=>{handleFilter(event)}}
                    >
                        {item}
                    </Button>
                ))}
            </ProcedureFilterWrapper>
        </ProcedureFilterContainer>
    );
};

export default ProcedureFilters;