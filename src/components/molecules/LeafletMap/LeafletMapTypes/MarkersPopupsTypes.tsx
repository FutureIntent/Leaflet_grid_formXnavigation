import { Filial } from "./FilialTypes";

export type MarkerParameters = [number, number];

export interface Markers{
   filial: Filial,
   key?: string,
   iconDimensions: MarkerParameters,
   popupOffset: MarkerParameters,
   width: number
}