import { Coordinates } from "./LeafletTypes"

export interface Filial {
    id: number,
    name: string,
    address: string
    workHours: string,
    status: boolean,
    imageURL: string,
    discount: number | null,
    procedures: string[],
    distance: number,
    coordinates: Coordinates
}

export interface FilialProps {
    width: number,
    setView: any,
    filialCollection: Filial[]
}

export interface FilialCardProps {
    width: number,
    setView: any,
    filial: Filial
}