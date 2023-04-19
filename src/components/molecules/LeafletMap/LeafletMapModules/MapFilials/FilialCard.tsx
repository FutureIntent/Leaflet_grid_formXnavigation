import styled from 'styled-components';
import colors from '@theme/configs/colors';
import { mediaQueriesReversed } from '../../../../../../theme/configs/mediaQueries';
import { FilialCardProps } from '../../LeafletMapTypes/FilialTypes';
import FilialAddress from './CardComponents/FilialAddress';
import FilialImage from './CardComponents/FilialImage';
import FilialDiscount from './CardComponents/FilialDiscount';
import FilialStatus from './CardComponents/FilialStatus';
import FilialName from './CardComponents/FilialName';
import FilialDetails from './CardComponents/FilialDetails';
import PopupStatus from '../MapMarkersPopups/PopupComponents/PopupStatus';


const FilialCardJSX = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    ${`${mediaQueriesReversed.tabletL} and (orientation: landscape)`} {
        background-color: transparent;
        border-color: ${colors.greyDark};
        border-style: solid;
        border-width: thin;
        box-shadow: 0 1px 1px ${colors.greyDark};  
    }
    ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
        background-color: transparent;
        border-color: ${colors.greyDark};
        border-style: solid;
        border-width: thin;
        box-shadow: 0 1px 1px ${colors.greyDark};
        flex-direction: column;     
    }
`;
const FilialCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2% 3%;
    position: relative;
    width: 60%;
    ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
        height: 50%;
        width: 100%;
    }
`;
export const FilialCardInfoDetailsTime = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    white-space: nowrap;
`;
export const FilialCardInfoDetailsTimeSVG = styled.img`
    min-height: 2em;
    object-fit: contain;
    width: 20%;
`;

const FilialCard = ({filial, setView, width}: FilialCardProps) => {
    const {
        name = null,
        address = null,
        workHours = null,
        status = false,
        imageURL = '/noSource',
        discount = null,
        distance = -1,
        coordinates = [-1, -1],
    } = { ...filial };

    function locateFilial() {
        setView([...coordinates]);
    }

    return (
        <FilialCardJSX onClick={()=>{locateFilial()}}>
            <FilialImage imageURL={imageURL}/>
            {discount && (
                <FilialDiscount discount={discount}/>
            )}
            <FilialCardInfo>
                {width <= 1024 && window.innerWidth >= window.innerHeight || width <= 568 && width <= window.innerHeight ? <PopupStatus status={status} width={width}/> : <FilialStatus status={status} />}
                <FilialName width={width} name={name}/>
                <FilialAddress address={address} width={width}/>
                <FilialDetails workHours={workHours} distance={distance}/>
            </FilialCardInfo>
        </FilialCardJSX>
    );
};

export default FilialCard;