import styled from 'styled-components';

import colors from '@theme/configs/colors';
import { mediaQueriesReversed } from '@theme/configs/mediaQueries';

import { fontsConfig } from '@components/atoms/Typography';

import { Markers } from '../../LeafletMapTypes/MarkersPopupsTypes';
import PopupAddress from './PopupComponents/PopupAddress';
import PopupDiscount from './PopupComponents/PopupDiscount';
import PopupImage from './PopupComponents/PopupImage';
import PopupName from './PopupComponents/PopupName';
import PopupProcedures from './PopupComponents/PopupProcedures';
import PopupStatus from './PopupComponents/PopupStatus';
import PopupTime from './PopupComponents/PopupTime';

export interface IPopupContentProps {
    content: number | null;
    icondimensions: number;
    popupoffset: number;
}

const PopupContent = styled.div<IPopupContentProps>`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 20vh;
    justify-content: space-between;
    min-height: 150px;
    min-width: 180px;
    width: 15vw;
    ${mediaQueriesReversed.desktopM} {
        height: 23vh;
        width: 18vw;
    }
    ${mediaQueriesReversed.desktop} {
        height: 25vh;
        width: 20vw;
    }
    ${mediaQueriesReversed.laptop} {
        height: 30vh;
        max-height: 250px;
        width: 25vw;
    }
    ${`${mediaQueriesReversed.tabletL} and (orientation: portrait)`} {
        height: 23vh;
        width: 40vw;
    }
    ${`${mediaQueriesReversed.tabletL} and (orientation: landscape)`} {
        height: 40vh;
        width: 35vw;
    }
    @media all and (max-width: 992px) and (orientation: landscape) {
        width: 35vw;
        height: 50vh;
    }
    ${`${mediaQueriesReversed.tablet} and (orientation: landscape)`} {
        height: 50vh;
        width: 45vw;
    }
    ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
        flex-direction: row;
        height: 15vh;
        max-height: 150px;
        min-height: 100px;
        width: 95vw;
        &::after {
            align-items: center;
            background-color: ${colors.white};
            border-radius: 4px;
            border-style: none;
            color: ${colors.blueBrand};
            content: "${({content}) => content ? `-${content}%` : ""}";
            display: ${({content}) => content ? "flex" : "none"};
            font-family: ${fontsConfig.accent.fontFamily};
            font-size: ${fontsConfig.accent.fontSize};
            font-weight: ${fontsConfig.accent.fontWeight};
            height: 40px;
            justify-content: center;
            left: calc(50vw - 2.5vw - 35px);
            overflow: hidden;
            position: absolute;
            top: calc(
                100% + ${({icondimensions}) => icondimensions || "0"}px + 
                ${({popupoffset}) => popupoffset || "0"}px
                );
            white-space: nowrap;
            width: 70px;
        }
    }
    @media all and (max-width: 375px) and (orientation: portrait) {
        width: 95vw;
        height: 16vh;
        min-height: 80px;
    }
`;

const PopupContentData = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;
    padding: 2% 5%;
    position: relative;
    width: 100%;
    ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
        height: 100%;
        width: 60%;
    }
`;

const PopupCard = ({ filial, width, iconDimensions, popupOffset }: Markers) => {
    const {
        name = null,
        address = null,
        workHours = null,
        status = false,
        discount = null,
        imageURL = '/noSource',
        procedures = [],
    } = { ...filial };

    return (
        <PopupContent
            content={discount}
            icondimensions={iconDimensions[1]}
            popupoffset={Math.abs(popupOffset[1])}
        >
            {width <= 568 && width <= window.innerHeight && discount && (
                <PopupDiscount discount={discount} />
            )}
            <PopupImage imageURL={imageURL} />
            <PopupContentData>
                <PopupStatus status={status} width={width} />
                <PopupName name={name} />
                <PopupAddress address={address} />
                {width <= 568 && width <= window.innerHeight ? (
                    <PopupTime workHours={workHours} />
                ) : (
                    <PopupProcedures procedures={procedures} width={width} />
                )}
            </PopupContentData>
        </PopupContent>
    );
};

export default PopupCard;
