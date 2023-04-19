import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';
import 'leaflet/dist/leaflet.css';
import {ReactElement, useEffect, useState } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import theme from '@theme/configs';
import { nanoid } from 'nanoid';
import SearchField from './LeafletMapModules/MapNavigation/SearchField';
import MyGeoLocation from './LeafletMapModules/MapNavigation/MyGeoLocation';
import CustomMarker from './LeafletMapModules/MapMarkersPopups/CustomMarker';
import ProcedureFilters from './LeafletMapModules/ProcedureFilter/ProcedureFilters';
import FilialList from './LeafletMapModules/MapFilials/FilialList';
import ChangeView from './LeafletMapModules/MapNavigation/ChangeView';
import { Filial } from './LeafletMapTypes/FilialTypes';
import { Coordinates, LeafletMapProps } from './LeafletMapTypes/LeafletTypes';
import FilialDummyData from './LeafletMapDummyData/FilialDummyData';
import { Filters } from './LeafletMapTypes/ProcedureFilterTypes';

const filterList: Filters = ['Body', 'Face', 'Local', 'Full-Body'];

const LeafletMap = ({ mapCenter, zoom, isDark = true, width, changeView=false, searchField=false, myGeoLocation=false, procedureFilters=false, filialList=false}: LeafletMapProps) => {
    const [position, setPosition] = useState<Coordinates>(mapCenter);
    const [mapView, setMapView] = useState<Coordinates>(mapCenter);
    const [filialCollection, setFilialCollection] = useState<Filial[]>([]);
    const [filter, setFilter] = useState<Filters>([...filterList]);
    const [markerCollection, setMarkerCollection] = useState<ReactElement[]>([]);

    useEffect(() => {
        console.log(`Fetched: position(${position})_filter(${filter})`);
        const fetchCollection: Filial[] = FilialDummyData;
        setFilialCollection([...fetchCollection]);
    }, [position, filter]);

    useEffect(() => { 
        const markerList: ReactElement[] = filialCollection.map((item: Filial) => <CustomMarker key={nanoid()} filial={item} width={width} iconDimensions={[50,50]} popupOffset={[0,-17]}/>);
        setMarkerCollection(markerList);
    }, [filialCollection, width]);
    
    return (
        <div>
            <MapContainer
                center={mapCenter}
                zoom={zoom}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                style={{ height: '100%', width: '100%', zIndex: theme.zIndices.map }}
                id="LeafletMap"
                tap={false}
            >
                {changeView && <ChangeView view={mapView} zoom={zoom} />}
                {searchField && <SearchField setView={setMapView} setPosition={setPosition} />}
                {myGeoLocation && <MyGeoLocation setView={setMapView} setPosition={setPosition} />}

                {
                    markerCollection.map((marker: ReactElement) => marker)
                }

                {isDark ? (
                    <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
                ) : (
                    <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
                )}  
                          
            </MapContainer>     
            {procedureFilters && <ProcedureFilters filterList={filterList} filter={filter} setFilter={setFilter} />}
            {filialList && <FilialList filialCollection={filialCollection} setView={setMapView} width={width} />}
        </div>
    );
};

export default LeafletMap;