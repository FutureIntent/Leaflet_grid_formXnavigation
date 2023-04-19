import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { SetViewAndPosition } from '../../LeafletMapTypes/LeafletTypes';

const SearchField = ({setPosition, setView}: SetViewAndPosition) => {
    const provider = new OpenStreetMapProvider();
    const searchControl = GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: false,
        retainZoomLevel: true,
        keepResult: true
    });
    const map = useMap();

    useEffect(() => {
        map.addControl(searchControl);
        map.on('geosearch/showlocation', (event: any) => {
            const lat = event.location.x;
            const lon = event.location.y;
            setPosition([lon, lat]);
            setView([lon, lat]);
        });
        return (): any => map.removeControl(searchControl);  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};

export default SearchField;