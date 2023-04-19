import LeafletMap from 'leaflet';
import { useRef } from 'react';
import { Marker, Popup} from 'react-leaflet';
import LocationMarkerActive from "@theme/assets/locationMarkerActive.svg";
import LocationMarkerRegular from "@theme/assets/locationMarker.svg"
import PopupCard from './PopupCard';
import { Markers } from '../../LeafletMapTypes/MarkersPopupsTypes';


const CustomMarker = ({filial, width, iconDimensions, popupOffset}: Markers) => {
    const position: [number, number] = filial.coordinates;
    const markerRef = useRef<any>(null);
    
    const iconRegular = LeafletMap.icon({
        iconUrl: `${LocationMarkerRegular.src}`,
        shadowUrl: undefined,
        iconSize: iconDimensions,
        shadowSize: undefined, 
        iconAnchor: undefined ,
        shadowAnchor: undefined,
        popupAnchor: popupOffset
    });

    function setLocationActive(): void {
        // eslint-disable-next-line no-underscore-dangle
        if (markerRef.current) markerRef.current._icon.src = `${LocationMarkerActive.src}`;     
    }

    function setLocationRegular(): void {
        // eslint-disable-next-line no-underscore-dangle
        if (markerRef.current) markerRef.current._icon.src = `${LocationMarkerRegular.src}`;
    }

    return (
        <Marker ref={markerRef} icon={iconRegular} position={position} eventHandlers={{
            popupopen: setLocationActive,
            popupclose: setLocationRegular
        }}>
            <Popup>
                <PopupCard filial={filial} width={width} popupOffset={popupOffset} iconDimensions={iconDimensions} />
            </Popup>
        </Marker>
        );
}

export default CustomMarker;