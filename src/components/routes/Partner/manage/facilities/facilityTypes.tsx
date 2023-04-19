
export interface FacilityInputType {
    handleAction: (value: string) => void,
    placeHolder?: string,
    name?: string
}

export interface FacilityGridType {
    grid: string,
    setGrid: any
}

export interface FacilityInterface {
    id?: number,
    img: string,
    heading: string,
    address: string,
    place: string,
    devices: number,
    agents: number
}

export interface NewFacilityButton {
    text: string,
    action: () => void
}