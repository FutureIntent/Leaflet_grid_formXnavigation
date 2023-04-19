import { TogglerDataType } from "@components/molecules/ViewToggler/TogglerTypes/TogglerTypes"

export interface FacilityViewType {
    data: boolean,
    location: boolean,
    schedule: boolean,
    gallery: boolean,
    devices: boolean
}

export interface ViewDataType {
    header: string,
    text: string
}

export type HeaderType = {
    [key: string]: ViewDataType
}

export interface FacilityHeaderType {
    view: TogglerDataType,
    viewData: HeaderType
}

export interface FacilityBackButtonType {
    link: string
}