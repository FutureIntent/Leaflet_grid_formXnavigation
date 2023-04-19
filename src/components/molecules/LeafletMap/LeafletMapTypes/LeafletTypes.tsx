
export interface LeafletMapProps {
  mapCenter: Coordinates,
  zoom: number,
  isDark?: boolean,
  width: number,
  changeView?: boolean,
  searchField?: boolean,
  myGeoLocation?: boolean,
  procedureFilters?: boolean,
  filialList?: boolean
}

export type Coordinates = [lat: number, lon: number];

export interface ChangeViewProps {
  view: Coordinates,
  zoom: number
}

export interface SetViewAndPosition {
  setPosition: any,
  setView: any
}