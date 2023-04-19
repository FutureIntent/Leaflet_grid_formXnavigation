import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyLocation from '@theme/assets/myLocation.svg';
import colors from '@theme/configs/colors';
import { mediaQueriesReversed } from '@theme/configs/mediaQueries';

const LeafletMap = dynamic(() => import('@components/molecules/LeafletMap/LeafletMap'), {
    ssr: false,
});

const LeafLetMapContainer = styled.div`
    left: 0;
    min-height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
    .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
        align-items: center;
        bottom: -7px;
        display: flex;
        justify-content: center;
        left: -210px;
        opacity: 1;
        transform: translate3d(1047px, 597px, 0px);
    }
    .leaflet-popup-content p {
        margin: 0;
    }
    .leaflet-popup-tip-container {
        display: none;
    }
    .leaflet-popup-content-wrapper .leaflet-popup-content {
        margin: 0 0 !important;
        width: 100% !important;
    }
    .leaflet-popup-content-wrapper,
    .leaflet-popup-tip {
        background-color: #ffffff;
        border-radius: 4px;
        box-shadow: 0 8px 16px #110d3e1a;
        padding: 0;
        width: 100%;
    }
    .leaflet-container a.leaflet-popup-close-button {
        display: none;
    }
    .leaflet-container {
        min-height: calc(100vh - var(--header-height));
        .leaflet-left {
            left: 2.5%;
        }
        .leaflet-top {
            align-items: flex-end;
            display: flex;
            justify-content: flex-end;
            min-height: 74vh;
            top: 0;
            width: 95%;

            ${mediaQueriesReversed.desktopM} {
                min-height: 72vh;
            }

            ${mediaQueriesReversed.desktop} {
                min-height: 68vh;
            }

            ${mediaQueriesReversed.laptop} {
                min-height: 66vh;
            }
        }
    }
    .leaflet-verticalcenter {
        padding-top: 10px;
        pointer-events: none;
        position: absolute;
        top: 70%; /* possible because the placeholder's parent is the map */
        transform: translateY(-50%);
        z-index: 1000;
    }
    .leaflet-verticalcenter .leaflet-control-scale.leaflet-control {
        display: none;
    }
    .leaflet-control-geosearch .results.active {
        display: none;
    }
    .leaflet-control-geosearch form {
        padding: 0 0;
        padding-left: 5%;
        input {
            text-indent: 0;
        }
    }
    .leaflet-control-geosearch a.reset {
        padding: 0;
    }
    .leaflet-geosearch-bar form input {
        min-width: 0;
    }
    .leaflet-control-geosearch.leaflet-geosearch-bar {
        border: 1px solid var(--grey-dark);
        border-radius: ${({ theme }) => theme.space['2xs']};
        height: 50px;
        margin: 10px 2.5%;
        max-width: none;
        width: 24%;
        ${mediaQueriesReversed.desktopM} {
            width: 28%;
        }
        ${mediaQueriesReversed.desktop} {
            width: 30%;
        }
        ${mediaQueriesReversed.laptop} {
            width: 35%;
        }
        ${`${mediaQueriesReversed.tabletL} and (orientation: landscape)`} {
            width: 40%;
        }
        ${`${mediaQueriesReversed.tabletL} and (orientation: portrait)`} {
            width: 45%;
        }
        @media all and (max-width: 992px) and (orientation: landscape) {
            height: 45px;
            width: 45%;
        }
        ${`${mediaQueriesReversed.tablet} and (orientation: landscape)`} {
            width: 45%;
        }
        ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
            height: 45px;
            width: 95%;
        }
        form {
            border: 0;
            height: 100%;
            position: relative;
            &:before {
                color: ${colors.greyDark};
                content: 'My Location';
                font-family: 'Manrope', Regular;
                font-size: 12px;
                left: 5%;
                position: absolute;
                top: 10%;
            }
            input {
                color: ${colors.blackBrand};
                font-family: 'Manrope', Regular;
                font-size: 18px;
                font-weight: 300;
                height: 100%;
                padding-top: 3%;
                width: 89%;
                ${mediaQueriesReversed.desktop} {
                    width: 87%;
                }
            }
            a {
                background-image: url(${MyLocation.src});
                background-position: center;
                background-repeat: no-repeat;
                background-size: auto;
                color: transparent;
                height: 100%;
                width: 10%;
                ${mediaQueriesReversed.desktop} {
                    width: 11%;
                }
            }
        }
    }
    .leaflet-verticalcenter .leaflet-control {
        border: 0;
        border-radius: ${({ theme }) => theme.space['2xs']};
        box-shadow: 0 8px 16px #110d3e1a;
        margin-bottom: 10px;
    }
    .leaflet-touch .leaflet-bar {
        ${mediaQueriesReversed.tabletL} {
            display: none;
        }
    }
    .leaflet-touch .leaflet-bar a {
        align-items: center;
        color: ${colors.greyDark};
        display: flex;
        font-family: 'Manrope';
        font-size: 40px;
        font-weight: 300;
        height: 50px;
        justify-content: center;
        width: 50px;
        ${mediaQueriesReversed.desktop} {
            height: 45px;
            width: 45px;
        }
        ${mediaQueriesReversed.laptop} {
            height: 40px;
            width: 40px;
        }
    }
`;

interface TopBarStyles {
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    maxWidth?: string;
    height?: string;
}

const Map = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const switchButtons: any = document.getElementById('viewSwitchButtons');
    const switchBorder: any = document.getElementById('viewSwitchBorder');

    function changeTopBarStyles({
        position = 'static',
        top = 'unset',
        left = 'unset',
        right = 'unset',
        maxWidth = '300px',
        height = 'unset',
    }: TopBarStyles) {
        if (switchButtons) switchButtons.style.position = position;
        if (switchButtons) switchButtons.style.top = top;
        if (switchButtons) switchButtons.style.left = left;
        if (switchButtons) switchButtons.style.right = right;
        if (switchButtons) switchButtons.style.maxWidth = maxWidth;
        if (switchButtons) switchBorder.style.height = height;
    }

    switch (true) {
        case width <= 568 && width <= window.innerHeight:
            changeTopBarStyles({
                position: 'absolute',
                top: '65px',
                left: '2.5%',
                maxWidth: '95%',
                height: '45px',
            });
            break;
        case width <= 768 && width >= window.innerHeight:
            changeTopBarStyles({
                position: 'absolute',
                top: '10px',
                right: '2.5%',
                maxWidth: '45%',
                height: '45px',
            });
            break;
        case width <= 992 && width >= window.innerHeight:
            changeTopBarStyles({
                position: 'absolute',
                top: '10px',
                right: '2.5%',
                maxWidth: '45%',
                height: '45px',
            });
            break;
        case width <= 1024 && width <= window.innerHeight:
            changeTopBarStyles({
                position: 'absolute',
                top: '10px',
                right: '2.5%',
                maxWidth: '45%',
                height: '50px',
            });
            break;
        case width <= 1024 && width >= window.innerHeight:
            changeTopBarStyles({
                position: 'absolute',
                top: '10px',
                right: '2.5%',
                maxWidth: '40%',
                height: '50px',
            });
            break;
        case width <= 1366:
            changeTopBarStyles({
                position: 'absolute',
                top: '10px',
                right: '2.5%',
                maxWidth: '35%',
                height: '50px',
            });
            break;
        default:
            changeTopBarStyles({
                position: 'absolute',
                top: '10px',
                height: '50px',
            });
    }

    function handleResize(): void {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        const footer: any = document.getElementById('footer');
        const content: any = document.getElementById('content');
        const headersBox: any = document.getElementById('headersUnknownBox');

        if(footer) footer.style.display = 'none';
        if(content) content.style.minHeight = 'calc(100vh - var(--header-height))';
        if(headersBox) headersBox.style.paddingTop = '0';

        window.addEventListener('resize', handleResize);

        return () => {
            if (footer) footer.style.display = 'flex';
            if (content) content.style.minHeight = '0';
            if (headersBox) headersBox.style.display = '15px';
            if (switchButtons) switchButtons.style.position = 'static';
            if (switchButtons) switchButtons.style.maxWidth = '300px';
            if (switchButtons) switchBorder.style.height = 'unset';

            changeTopBarStyles({});

            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LeafLetMapContainer>
            <LeafletMap
                mapCenter={[55.75642921329934, 37.60531123060988]}
                zoom={15}
                width={width}
                changeView
                searchField
                myGeoLocation
                procedureFilters
                filialList
            />
        </LeafLetMapContainer>
    );
};

export default Map;
