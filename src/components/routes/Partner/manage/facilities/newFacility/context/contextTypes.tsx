// unknown data types for handling user inputs, because components are non existent yet

export interface NewFacilityType {
    data: NewFacilityDataType,
    location: unknown,
    schedule: unknown,
    gallery: unknown,
    devices:  unknown
}

export interface NewFacilityDataType {
    name: string,
    type: string,
    comment: string
}
